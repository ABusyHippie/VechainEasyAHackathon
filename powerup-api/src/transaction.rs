use anyhow::{Result, anyhow};
use thor_devkit::{
    transactions::{Transaction, Clause},
    Address,
    PrivateKey,
    PublicKey,
    rlp::Encodable,
    AddressConvertible,
};
use std::str::FromStr;
use hex;
use serde_json;
use bip39::{Mnemonic, Language};
use hdwallet::{ExtendedPrivKey, DefaultKeyChain, KeyChain};
use secp256k1::Secp256k1;

pub struct WalletInfo {
    pub address: String,
    pub private_key: PrivateKey,
}

use hdwallet::traits::Serialize as HDWalletSerialize;

impl WalletInfo {
    pub fn from_mnemonic(mnemonic: &str) -> Result<Self> {
        let mnemonic = Mnemonic::parse_in(Language::English, mnemonic).map_err(|e| anyhow!("Mnemonic error: {}", e))?;
        let seed = mnemonic.to_seed("");
        let root = ExtendedPrivKey::with_seed(&seed).map_err(|e| anyhow!("ExtendedPrivKey error: {}", e))?;
        let key_chain = DefaultKeyChain::new(root);
        let derivation_path = hdwallet::ChainPath::from("m/44'/818'/0'/0/0");
        let (derived_key, _) = key_chain.derive_private_key(derivation_path).map_err(|e| anyhow!("Key derivation error: {}", e))?;
        
        let private_key_bytes = derived_key.serialize();
        let private_key = PrivateKey::from_slice(&private_key_bytes[..32]).map_err(|e| anyhow!("PrivateKey error: {}", e))?;
        
        let secp = Secp256k1::new();
        let public_key = PublicKey::from_secret_key(&secp, &private_key);
        let address = public_key.address();

        Ok(WalletInfo {
            address: address.to_hex(),
            private_key,
        })
    }
}

// The rest of the code remains the same...

pub async fn send_transaction(
    network_url: &str,
    wallet_info: &WalletInfo,
    to: &str,
    value: u64,
) -> Result<String> {
    let client = reqwest::Client::new();

    // Get the current block reference
    let best_block: serde_json::Value = client
        .get(format!("{}/blocks/best", network_url))
        .send()
        .await?
        .json()
        .await?;

    let block_ref = best_block["id"]
        .as_str()
        .ok_or_else(|| anyhow!("Invalid block reference"))?
        .get(0..18)
        .ok_or_else(|| anyhow!("Invalid block reference length"))?;

    // Create the transaction
    let clause = Clause {
        to: Some(Address::from_str(to)?),
        value: value.into(),
        data: vec![].into(),
    };

    let mut tx = Transaction {
        chain_tag: 0x4a, // VeChain mainnet chain tag
        block_ref: u64::from_str_radix(block_ref, 16)?,
        expiration: 720,
        clauses: vec![clause],
        gas_price_coef: 0,
        gas: 21000,
        depends_on: None,
        nonce: rand::random(),
        reserved: None,
        signature: None,
    };

    // Sign the transaction
    tx = tx.sign(&wallet_info.private_key);

    // Send the raw transaction
    let mut raw_tx = Vec::new();
    tx.encode(&mut raw_tx);
    let raw_tx_hex = hex::encode(raw_tx);
    
    let response: serde_json::Value = client
        .post(format!("{}/transactions", network_url))
        .json(&serde_json::json!({ "raw": raw_tx_hex }))
        .send()
        .await?
        .json()
        .await?;

    let tx_id = response["id"]
        .as_str()
        .ok_or_else(|| anyhow!("Invalid transaction ID"))?
        .to_string();

    Ok(tx_id)
}