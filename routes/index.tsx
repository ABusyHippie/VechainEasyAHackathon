import { useSignal } from "@preact/signals";
import { useEffect } from "preact/hooks";

export default function Home() {
  return (
    <div>
      <header id="header">
        <a href="#" class="logo">Power Up!</a>
        <ul>
          <li><p id="text">Reduce your utilities use, make B3TR!</p></li>
        </ul>
      </header>

      <section id="home">
        <img src="/img/water.png" alt="background" id="background"></img>
        <h2 id="text">
          <span>Reduce Your Utility Usage</span>
          <br />Make B3TR Token
        </h2>
        <a href="#waterCycle" id="btn">Connect</a>
        
      </section>

      <section id="waterCycle" >
        <img src="/img/water.png" alt="background" id="background"></img>
        <h2 id="text-water">
          <br />Use Less Water <br />
          <span>Daily Reminders of sustainable habits</span> <br />
          <span>Collect Rainwater Challenge 💧</span> <br />
          <span>Grow Your Own Veggie Garden Multiplier 🥕</span>
        </h2>
        <a href="#waterCycle2" id="btn">Submit Your Water Bill Now</a>
      </section>
      
      <section id="waterCycle" >
        <img src="/img/water.png" alt="background" id="background"></img>
        <h2 id="text-electric">
          <br />Use Less Electricity <br />
          <span>Try High Efficiency Bulbs 💡</span> <br />
          <span>Get a Bonus for Giving Back to the Grid ⚡️</span> <br />
          <span>Save on Your Bill by Watching With Friends 📺</span>
        </h2>
        <a href="#waterCycle2" id="btn">Submit Your Water Bill Now</a>
      </section>

      <section id="waterCycle" >
        <img src="/img/water.png" alt="background" id="background"></img>
        <h2 id="text-gas">
          <br />Use Less Gas <br />
          <span>Recycle Your Cooking Oil with  <a href="https://oily.uco.network/home">Oily</a></span> <br />
          <span>Collect Rainwater Challenge 💧</span> <br />
          <span>Grow Your Own Veggie Garden Multiplier 🥕</span>
        </h2>
        <a href="#waterCycle2" id="btn">Submit Your Water Bill Now</a>
      </section>

      <section id="evidenceOfWarning" class="sec">
        <a href="#waysOfKnowing" id="btn">Ways of Knowing</a>
        <h2>Evidence of Warming</h2>
        <p>
          There are many signs that the Earth is getting warmer, from the rise in temperature all around the world to the melting of large ice sheets.
        </p>
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
