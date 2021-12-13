import React, { useState } from "react";

export const Counter = () => {
  const [clicks, setClicks] = useState(0);
  const [step, setStep] = useState(2);

  return (
    <div>
      <div>Clicked: {clicks}</div>
      <button onClick={() => setClicks(clicks + step)}>Click</button>
      <br />
      <input
        type="text"
        name="step"
        value={step}
        onChange={(e) => setStep(+e.target.value)}
      />
    </div>
  );
};
