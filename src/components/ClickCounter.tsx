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
    <>
      <button onClick={handleClick}>Clicked: {clicks}</button>{" "}
      <button onClick={() => resetValue()}>Reset</button>
    </>
  );
}
