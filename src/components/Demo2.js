import React, { useRef, useState } from "react";

const Demo2 = () => {
  // console.log("renderd")
  const [y, setY] = useState(0);
  let x = 0;

  const ref = useRef(0);

  // const i = useRef(null);
  // useEffect(() => {
  //   i.current = setInterval(() => {
  //     console.log("Namaste React", Math.random());
  //   }, 1000);

  //   return () => clearInterval(i.current);
  // }, []);

  return (
    <div className={`m-4 p-2 w-96 h-96 border border-black `}>
      <div>X-let: {x}</div>
      <div>Y-useState: {y}</div>
      <div>Ref-useRef: {ref.current}</div>
      <button
        className="border"
        onClick={() => {
          x = x + 1;
          console.log(x);
        }}
      >
        increase x
      </button>
      <button className="border" onClick={() => setY(y + 1)}>
        increase y
      </button>
      <button className="border" onClick={() => ref.current++}>
        increase ref
      </button>

      {/* <button
        className="bg-red-900 m-4 text-white font-bold rounded-lg"
        onClick={() => clearInterval(i.current)}
      >
        Stop Priniting
      </button> */}
    </div>
  );
};

export default Demo2;
