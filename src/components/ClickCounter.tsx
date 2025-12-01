import { useState } from "react";

export default function ClickCounter() {
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    setClicks(clicks + 1);
  };

  const resetValue = () => {
    setClicks(0);
  };

  return (
    <div style={{ border: "1px solid brown", padding: "8px" }}>
      <>
        <button onClick={handleClick}>Clicked: {clicks}</button>{" "}
        <button onClick={() => resetValue()}>Reset</button>
      </>
    </div>
  );
}
