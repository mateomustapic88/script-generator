// src/components/ScriptExecution.tsx
import React, { useContext } from "react";
import { ScriptContext } from "../context/ScriptContext";
import "./ScriptExecution.scss";

const ScriptExecution: React.FC = () => {
  const { script, objectToEvaluate, setResult } = useContext(ScriptContext);

  console.log(objectToEvaluate);

  const handleExecuteScript = () => {
    try {
      const result = eval(script) as boolean;
      setResult(result);
    } catch (error) {
      console.error("Error executing script:", error);
      setResult(null);
    }
  };

  return (
    <div className='script-execution-container'>
      <h2>Script Execution</h2>
      <button onClick={handleExecuteScript}>Execute Script</button>
    </div>
  );
};

export default ScriptExecution;
