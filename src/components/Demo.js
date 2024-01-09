import React, { useMemo, useState } from "react";
import { nthPrime } from "../utils/helper";

const Demo = () => {
  const [text, setText] = useState(0);
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const prime = useMemo(() => {
    console.log("Calculate prime no.");
    return nthPrime(text);
  }, [text]);


  return (
    <div
      className={`m-4 p-2 w-96 h-96 border border-black ${
        isDarkTheme && "bg-gray-900"
      }`}
    >
      <div>
        <button
          className="bg-black text-white"
          onClick={() => setIsDarkTheme(!isDarkTheme)}
        >
          Toggle
        </button>
      </div>
      <div>
        <input
          className="border border-black w-72 px-2"
          type="number"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div>
        <h1 className={`mt-4 font-bold text-xl ${isDarkTheme && "text-white"}`}>
          {prime}
        </h1>
      </div>
    </div>
  );
};

export default Demo;
