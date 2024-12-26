import React, { useState } from "react";

function App() {
  const [val, setVal] = useState("");
  const [valueIn, setValueIn] = useState();
  function handleChange(obj) {
    setVal(obj.target.value);
  }
  function valuIn() {
    setValueIn(val);
  }

  return (
    <div className="container">
      <h1> hello : {valueIn}</h1>

      <input
        onChange={handleChange}
        type="text"
        name="inputs"
        placeholder="What's your name?"
        value={val}
      />
      <button onClick={valuIn}>Submit</button>
    </div>
  );
}

export default App;
