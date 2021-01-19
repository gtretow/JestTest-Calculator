/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from "react";

export default ({ name }) => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <div className="name">hi,{name}</div>
      <button onClick={() => setCounter(counter + 1)}>click</button>
      <div className="count">{counter}</div>
    </div>
  );
};
