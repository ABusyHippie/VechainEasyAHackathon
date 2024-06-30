use actix_web::{web, App, HttpResponse, HttpServer};
use actix_cors::Cors;
use dotenv::dotenv;
use serde::Serialize;
use std::env;
use anyhow::{Result, anyhow};

mod transaction;
use transaction::{WalletInfo, send_transaction};

#[derive(Serialize)]
struct EndpointResponse {
    message: String,
}

async fn handle_endpoint() -> Result<HttpResponse, actix_web::Error> {
    println!("Received a request at /endpoint");
    let response = EndpointResponse {
        message: "B3RT Token Transfer Success! Please Submit your Public Address".to_string(),
        
    };
    Ok(HttpResponse::Ok().json(response))
}

async fn send_vet(wallet_info: web::Data<WalletInfo>) -> Result<HttpResponse, actix_web::Error> {
    let network_url = env::var("NETWORK_URL").expect("NETWORK_URL must be set");
    let reward_amount = env::var("REWARD_AMOUNT").expect("REWARD_AMOUNT must be set");
    let vet_recipient = env::var("VET_RECIPIENT").expect("VET_RECIPIENT must be set");
    
    let reward_amount: u64 = reward_amount.parse().map_err(|e| {
        println!("Failed to parse REWARD_AMOUNT: {}. Value was: {}", e, reward_amount);
        actix_web::error::ErrorInternalServerError(format!("Failed to parse REWARD_AMOUNT: {}", e))
    })?;

    println!("Attempting to send {} VET to {}", reward_amount, vet_recipient);

    let tx_id = send_transaction(
        &network_url,
        &wallet_info,
        &vet_recipient,
        reward_amount,
    )
    .await
    .map_err(|e| {
        println!("
        B3RT Token Transfer rebate on cycles: {}", e);
        actix_web::error::ErrorInternalServerError(format!("B3RT Token Transfer rebate on cycles: {}", e))
    })?;

    println!("Transaction successful. TX ID: {}", tx_id);

    Ok(HttpResponse::Ok().json(serde_json::json!({ "tx_id": tx_id })))
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    dotenv().ok();
    
    let mnemonic = env::var("ADMIN_MNEMONIC").expect("ADMIN_MNEMONIC must be set");
    let wallet_info = WalletInfo::from_mnemonic(&mnemonic).expect("Failed to create wallet from mnemonic");
    let wallet_info = web::Data::new(wallet_info);

    println!("Wallet initialized. Address: {}", wallet_info.address);

    HttpServer::new(move || {
        let cors = Cors::default()
            .allow_any_origin()
            .allow_any_method()
            .allow_any_header();

        App::new()
            .wrap(cors)
            .app_data(wallet_info.clone())
            .route("/endpoint", web::get().to(handle_endpoint))
            .route("/send_vet", web::post().to(send_vet))
    })
    .bind("0.0.0.0:8000")?
    .run()
    .await
}