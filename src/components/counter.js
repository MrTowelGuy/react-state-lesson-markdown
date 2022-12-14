import React, { useState } from "react";
console.log("this is react", React);

function Counter() {
  //examples of different states being called
  // const [count, setCount] = useState(0);
  // const [name, setName] = useState("Jaden");
  // const [health, setHealth] = useState(100);

  // Array Deconstructor
  const [count, setCount] = useState(0);
  // const handleClick = ()=>{alert("you clicked")};
  const add = () => setCount(count + 1);
  const sub = () => setCount(count - 1);

  return (
    <>
      <span>Current Count: {count}</span>
      <section>
        <button onClick={add}>+</button>
        <button onClick={sub}>-</button>
      </section>
    </>
  );
}

export default Counter;
