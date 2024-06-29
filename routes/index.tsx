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
          <span>Compete With Your Neighbors</span>
          <br />Save The Planet
        </h2>
        <a href="#waterCycle" id="btn">Connect</a>
        
      </section>

      <section id="waterCycle" >
        <img src="/img/water.png" alt="background" id="background"></img>
        <h2 id="text">
          <span>Compete With Your Neighbors</span>
          <br />Save The Planet
        </h2>
        <p>
          1- Evaporation: Water from the oceans, rivers, lakes, and puddles gets heated by the sun and turns into vapor. Imagine the water turning into "invisible clouds" that go up into the sky. <br />
          <br />2- Condensation: The water vapor cools in the sky and turns back into tiny water droplets. This forms clouds, which look like fluffy cotton in the sky. <br />
          <br />3- Precipitation: When the water droplets in the clouds come together and get very heavy, they fall to the Earth as rain, snow, or hail. It's like the clouds are crying.
        </p>
        <a href="#waterCycle2" id="btn">Water Cycle 2</a>
      </section>
  
      <section id="whatIsClimateChange" class="sec">
        <a href="#waterCycle2" id="btn">Water Cycle 2</a>
        <h2>What Is Climate Change?</h2>
        <p>
          Climate change describes a change in the average conditions — such as temperature and rainfall — in a region over a long period of time. NASA scientists have observed Earth’s surface is warming, and many of the warmest years on record have happened in the past 20 years.
        </p>
        <a href="#climateChange" id="btn">Climate Change</a>
      </section>
      
      <section id="climateChange" class="sec">
        <a href="#whatIsClimateChange" id="btn">What Is Climate Change?</a>
        <h2>Climate Change</h2>
        <p>
          The Earth's weather has changed a little bit over a very long time. But now, it's getting warmer faster than it has in a really, really long time, like more than 10,000 years!
        </p>
        <a href="#humanInfluence" id="btn">Human Influence</a>
      </section>

      <section id="humanInfluence" class="sec">
        <a href="#climateChange" id="btn">Climate Change</a>
        <h2>Human Influence</h2>
        <p>
          Scientists have been studying this for a while, and they're sure that people are making the Earth warmer. They've used all sorts of tools, like looking at really old ice, rocks, and tree rings, as well as super high-tech things like satellites and special machines.
        </p>
        <a href="#waysOfKnowing" id="btn">Ways of Knowing</a>
      </section>

      <section id="waysOfKnowing" class="sec">
        <a href="#humanInfluence" id="btn">Human Influence</a>
        <h2>Ways of Knowing</h2>
        <p>
          Scientists use different tools and sources of information to understand how the climate is changing. Some of these are very old, like pieces of ice, rocks, and tree rings. They also use modern technology, like satellites and special machines.
        </p>
        <a href="#evidenceOfWarning" id="btn">Evidence of Warming</a>
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
        <p>Developed by <a href="https://rak1u.deno.dev/">Rak1u</a></p>
      </footer>
    </div>
  );
}
