import { useState } from "react";

interface Values {
  x: number;
  y: number;
  z: number;
}

export default function ClickCounterXYZ() {
  const [values, setValues] = useState<Values>({ x: 0, y: 0, z: 0 });

  const updateValue = (key: keyof Values) => {
    setValues({
      ...values,
      [key]: values[key] + 1,
    });
  };

  const resetValue = () => {
    setValues({ x: 0, y: 0, z: 0 });
  };

  return (
    <div style={{ border: "1px solid brown", padding: "8px" }}>
      <p>
        x: {values.x}, y: {values.y}, z: {values.z}
      </p>
      <button onClick={() => updateValue("x")}>Update x</button>
      <button onClick={() => updateValue("y")}>Update y</button>
      <button onClick={() => updateValue("z")}>Update z</button>
      <button onClick={() => resetValue()}>Reset</button>
    </div>
  );
}
