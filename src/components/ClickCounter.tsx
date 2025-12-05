import { useEffect, useState } from "react";

export default function ClickCounter() {
  const [clicks, setClicks] = useState(() => {
    const savedClicks = window.localStorage.getItem("saved-clicks");

    if (savedClicks !== null) {
      return JSON.parse(savedClicks);
    }
    return 0;
  });

  useEffect(() => {
    localStorage.setItem("saved-clicks", JSON.stringify(clicks));
  }, [clicks]);

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
