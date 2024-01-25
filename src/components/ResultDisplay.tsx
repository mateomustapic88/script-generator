// src/components/ResultDisplay.tsx
import React, { useContext } from "react";
import { ScriptContext } from "../context/ScriptContext";
import "./ResultDisplay.scss";

const ResultDisplay: React.FC = () => {
  const { result, script } = useContext(ScriptContext);

  console.log(script);

  return (
    <div className='result-display-container'>
      <h2>Result Display</h2>
      <p>
        Result:{" "}
        {result !== null
          ? result
            ? "Object meets conditions"
            : "Object does not meet conditions"
          : "No result to display"}
      </p>
    </div>
  );
};

export default ResultDisplay;
