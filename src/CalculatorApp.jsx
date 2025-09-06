import React, { useEffect, useRef, useState } from "react";

const BUTTONS = [
  { label: "C", kind: "util", action: "clear" },
  { label: "⌫", kind: "util", action: "delete" },
  { label: "%", kind: "op", value: "%" },
  { label: "÷", kind: "op", value: "/" },
  { label: "7", kind: "num" },
  { label: "8", kind: "num" },
  { label: "9", kind: "num" },
  { label: "×", kind: "op", value: "*" },
  { label: "4", kind: "num" },
  { label: "5", kind: "num" },
  { label: "6", kind: "num" },
  { label: "−", kind: "op", value: "-" },
  { label: "1", kind: "num" },
  { label: "2", kind: "num" },
  { label: "3", kind: "num" },
  { label: "+", kind: "op", value: "+" },
  { label: "00", kind: "num" },
  { label: "0", kind: "num" },
  { label: ".", kind: "dot" },
  { label: "=", kind: "eq", action: "equals" }
];

// rest of component code...
function CalculatorApp() {
  const [input, setInput] = useState("");

  return (
    <div>
      <h1>React Calculator</h1>
      <input value={input} readOnly />
      <div>
        {BUTTONS.map((btn) => (
          <button key={btn.label}>{btn.label}</button>
        ))}
      </div>
    </div>
  );
}

export default CalculatorApp;