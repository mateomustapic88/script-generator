import React, { useContext } from "react";
import { ScriptContext } from "../context/ScriptContext";

const ScriptExecution: React.FC = () => {
  const { script, setResult } = useContext(ScriptContext);

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
    <div>
      <h2>Script Execution</h2>
      <button onClick={handleExecuteScript}>Execute Script</button>
    </div>
  );
};

export default ScriptExecution;
