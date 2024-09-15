import { useState } from "react";
// Assuming the image is placed in the `public` folder
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import './App.css'

function App() {
  return (
    <div className="font-mono bg-zinc-600 min-h-screen text-center flex flex-col items-center justify-center p-4 bg-gray-100">
      <h1 className="font-semibold text-cyan-500 text-2xl sm:text-3xl md:text-5xl">
        New{" "}
        <span className="font-normal text-cyan-200 text-lg sm:text-xl md:text-3xl">
          VITE + React WebApp
        </span>
      </h1>

      <h2 className="font-bold text-cyan-500 text-base sm:text-lg md:text-xl mt-4">
        VITE_APP_KEY <br />
        <span className="font-normal text-cyan-200 text-base sm:text-xl md:text-3xl">
          {import.meta.env.VITE_APP_KEY || "Environment variable not found"}
        </span>
      </h2>
    </div>
  );
}

export default App;
