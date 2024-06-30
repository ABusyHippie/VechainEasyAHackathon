import { useSignal } from "@preact/signals";
import { useEffect } from "preact/hooks";

export default function Home() {
  return (
    <div>
      <header id="header">
        <a href="#" class="logo">Power Up!</a>
        {/* <ul>
          <li><p id="text">Reduce your utilities use, make B3TR! x</p></li>
        </ul> */}
      </header>

      <section id="home">
        <img src="/img/main.png" alt="background" id="background"></img>
        <h2 id="text">
          <span>Slash Your Utility Bills, Compete With Your Neighbors</span><br />
          <br />Earn B3TR Today
        </h2>
        <a href="#waterCycle" id="btn">Sign In</a>
      </section>

      <section id="waterCycle" >
        <img src="/img/agua.png" alt="background" id="background"></img>
        <h2 id="text-water">
          <br />Use less water <br />
          <span>Daily reminders of sustainable habits 📅</span> <br />
          <span>Collect rainwater challenge 💧</span> <br />
          <span>Grow your own veggie garden multiplier 🥕</span>
        </h2>
        <a href="#waterCycle2" id="btn-water">Submit Your Water Bill Now</a>
      </section>
      
      <section id="waterCycle" >
        <img src="/img/light.png" alt="background" id="background"></img>
        <h2 id="text-water">
          <br />Use Less Electricity <br />
          <span>Try High Efficiency Bulbs 💡</span> <br />
          <span>Get a Bonus for Giving Back to the Grid ⚡️</span> <br />
          <span>Save on Your Bill by Watching With Friends 📺</span>
        </h2>
        <a href="#waterCycle2" id="btn-lit">Submit Your Electric Bill Now</a>
      </section>

      <section id="waterCycle" >
        <img src="/img/gas.png" alt="background" id="background"></img>
        <h2 id="text-water">
          <br />Use Less Gas <br />
          <span>Recycle Your Cooking Oil with  <a href="https://oily.uco.network/home">Oily</a></span> <br />
          <span>Try the Cold Shower Challenge 🥶</span> <br />
          <span>Smart Heating Only The Rooms Your In 🧠</span>
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
