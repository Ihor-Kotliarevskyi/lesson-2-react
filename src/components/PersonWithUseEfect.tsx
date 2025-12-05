import axios from "axios";
import { useEffect, useState } from "react";

interface Character {
  name: string;
  height: number;
}

export default function Person() {
  const [count, setCount] = useState(1);
  const [person, setPerson] = useState<Character | null>(null);

  useEffect(() => {
    async function fetchCharacter() {
      const response = await axios.get(
        `https://swapi.info/api/people/${count}`
      );
      setPerson(response.data);
    }

    fetchCharacter();
  }, [count]);

  return (
    <>
      <div style={{ border: "1px solid brown", padding: "8px" }}>
        <h2>Person</h2>
        <button onClick={() => setCount(count + 1)}>Get next character</button>
        <br></br>
        <br></br>
        <strong>The count is {count}</strong>
        <pre>{JSON.stringify(person, null, 2)}</pre>
      </div>
    </>
  );
}
