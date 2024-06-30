import { useSignal } from "@preact/signals";
import { useEffect } from "preact/hooks";

export default function Home() {
  return (
    <div>
      <header id="header">
        <a href="#" class="logo">Power Up!</a>
        {/* <ul>
          <li><p id="text">Reduce your utilities use, make B3TR!</p></li>
        </ul> */}
      </header>

      <section id="home">
        <img src="/img/grasslogos.png" alt="background" id="background"></img>
        <h2 id="text">
          <span>Slash Your Bills, Beat Your Neighbors</span><br />
          <br />Make Your Hood B3TR
        </h2>
        <a href="#waterCycle" id="btn">Connect</a>
      </section>

      <section id="waterCycle" >
        <img src="/img/water.png" alt="background" id="background"></img>
        <h2 id="text-water">
          <br />Use Less Water <br />
          <span>Don't Shower Bonus 🤢</span> <br />
          <span>No Laundry Challenge 💧</span> <br />
          <span>Make Your Own Compost Multiplier 💩</span>
        </h2>
        <a href="#waterCycle2" id="btn-water">Submit Your Water Bill Now</a>
      </section>
      
      <section id="waterCycle" >
        <img src="/img/electric.png" alt="background" id="background"></img>
        <h2 id="text-electric">
          <br />Use Less Electricity <br />
          <span>Game at 3am for Off-Peak Energy Use 🎮</span> <br />
          <span>Sell Your Fridge and Do The All Ramen Challenge 🍜</span> <br />
          <span>Save on Your Bill by Never Using Lights 💡</span>
        </h2>
        <a href="#waterCycle2" id="btn-lit">Submit Your Electric Bill Now</a>
      </section>

      <section id="waterCycle" >
        <img src="/img/fire.png" alt="background" id="background"></img>
        <h2 id="text-gas">
          <br />Use Less Gas <br />
          <span>Never Use Gas, Only Eat Take-Out 👨‍🍳</span> <br />
          <span>Get Free Food From Hackathons 🧠</span> <br />
          <span>Stay Under the Covers All Day To Not Use Heat 🥶</span>
        </h2>
        <a href="#waterCycle2" id="btn-gas">Submit Your Gas Bill Now</a>
      </section>
      
      <footer id="footer">
        <a href="https://fresh.deno.dev" id="deno-btn">
          <img
            id="deno"
            src="https://fresh.deno.dev/fresh-badge.svg"
            alt="Made with Fresh"
          />
        </a>
      </footer>
    </div>
  );
}
