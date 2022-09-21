import React, { useState } from "react";
console.log("this is react", React);

function Counter() {
  //examples of different states being called
  // const [count, setCount] = useState(0);
  // const [name, setName] = useState("Jaden");
  // const [health, setHealth] = useState(100);

  return (
    <>
      <span>Current Count: 0</span>
      <section>
        <button>+</button>
        <button>-</button>
      </section>
    </>
  );
}

export default Counter;
