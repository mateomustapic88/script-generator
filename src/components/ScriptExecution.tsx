import React, { useContext } from "react";
import { ScriptContext } from "../context/ScriptContext";
import "./ScriptExecution.scss";

const ScriptExecution: React.FC = () => {
  const { script, objectToEvaluate, setResult } = useContext(ScriptContext);

  console.log(objectToEvaluate);

  const handleExecuteScript = () => {
    try {
      const result = eval(script);

      if (typeof result === "boolean") {
        setResult(result);
        console.log("result", result);
      } else {
        console.error("Script did not return a boolean value:", result);
        setResult(null);
      }
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
