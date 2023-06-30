import "../css/style.css";
import javascriptLogo from "../../public/javascript.svg";
import viteLogo from "../../public/vite.svg";
import tailwindLogo from "../../public/tailwind.svg";
import { setupCounter } from "./counter.js";

document.querySelector("#app").innerHTML = `
  <div class="">
    <div class="flex justify-center">
      <a href="https://vitejs.dev" target="_blank">
        <img src="${viteLogo}" class="logo" alt="Vite logo" />
      </a>
      <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
        <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
      </a>
      <a href="https://tailwindcss.com/docs/guides/vite"><img src="${tailwindLogo}" class="logo tailwind" alt="Tailwind CSS logo" /></a>
    </div>
    <h1 class="text-4xl font-bold text-center mt-8">Hello Vite with Tailwind!</h1>
    <div class="card">
      <button id="counter" type="button" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Click me
      </button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`;

setupCounter(document.querySelector("#counter"));
