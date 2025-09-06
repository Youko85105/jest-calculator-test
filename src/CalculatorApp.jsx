import React, { useState } from "react";

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

function CalculatorApp() {
  const [input, setInput] = useState("");

  const handleClick = (btn) => {
    switch (btn.kind) {
      case "num":
        setInput((prev) => prev + btn.label);
        break;
      case "op":
        setInput((prev) => prev + btn.value);
        break;
      case "dot":
        setInput((prev) => prev + ".");
        break;
      case "util":
        if (btn.action === "clear") {
          setInput("");
        } else if (btn.action === "delete") {
          setInput((prev) => prev.slice(0, -1));
        }
        break;
      case "eq":
        try {
          // eslint-disable-next-line no-eval
          const result = eval(input);
          setInput(String(result));
        } catch (e) {
          // If evaluation fails, keep the current input
        }
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <h1>React Calculator</h1>
      <input value={input} readOnly data-testid="display" />
      <div>
        {BUTTONS.map((btn) => {
          const identifier = btn.action || btn.value || btn.label;
          return (
            <button
              key={btn.label}
              data-testid={`btn-${identifier}`}
              onClick={() => handleClick(btn)}
            >
              {btn.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default CalculatorApp;
