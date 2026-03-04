import { useState, useEffect } from "react";
import { useDebounce } from "../hooks/useDebounce";

export default function DebounceSearchDemo() {
  const [input, setInput] = useState("");

  const debouncedValue = useDebounce(input, 500);

  useEffect(() => {
    if (debouncedValue) {
      console.log("Searching for:", debouncedValue);
    }
  }, [debouncedValue]);

  return (
    <div>
      <h1>Debounce Search Demo</h1>
      <p>Debounce Delay (ms)</p>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <p>Current Input: {input}</p>
      <p>Debounced Value (after 500 ms): {debouncedValue}</p>
      <p>Simulated Search Results:</p>
      <p>Type to see results</p>
    </div>
  );
}