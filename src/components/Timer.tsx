import { useEffect, useState } from "react";

export default function Timer() {
  const [isOpen, setIsOpen] = useState(false);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div style={{ border: "1px solid brown", padding: "8px" }}>
      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "Hide timer" : "Show timer"}
      </button>
      {isOpen && <p>TimerBox - {time.toLocaleTimeString()}</p>}
    </div>
  );
}
