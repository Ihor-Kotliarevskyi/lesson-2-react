import ClickCounter from "./ClickCounter";
import { useState } from "react";

interface Values {
  x: number;
  y: number;
  z: number;
}

export default function App() {
  const [values, setValues] = useState<Values>({ x: 0, y: 0, z: 0 });

  const updateValue = (key: keyof Values) => {
    setValues({
      ...values,
      [key]: values[key] + 1,
    });
  };

  return (
    <>
      <ClickCounter />
      <div>
        <p>
          x: {values.x}, y: {values.y}, z: {values.z}
        </p>
        <button onClick={() => updateValue("x")}>Update x</button>
        <button onClick={() => updateValue("y")}>Update y</button>
        <button onClick={() => updateValue("z")}>Update z</button>
      </div>
    </>
  );
}
