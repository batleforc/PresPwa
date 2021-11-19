import React, { useState } from "react";
import Cat from './cat'

const TestDisplay = () => {
  const [cont, setCont] = useState(0);
  console.log(cont)
  return (
    <div onClick={()=>setCont(cont+1)}>
      <h1>Hello You</h1>
      {cont > 0 && <h1>Want some cats?</h1>}
      {cont > 30 && <h1>/!\ Warning only the last 50 cat are available offline</h1>}
      {cont >1 && <Cat howMuch={cont} />}
    </div>
  );
};

export default TestDisplay;
