import React, { useContext } from "react";
import { ScriptContext } from "../context/ScriptContext";

const ScriptGeneration: React.FC = () => {
  const { script, setObjectToEvaluate, setScript, setResult } =
    useContext(ScriptContext);

  const handleScriptChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setScript(event.target.value);
  };

  const handleTestScript = () => {
    // Test object
    const testObject = {
      name: "Buddha",
      age: 150,
      // Add other properties as needed
    };

    // Set the test object
    setObjectToEvaluate(testObject);

    // Test script
    const testScript = '(object.name === "Buddha" && object.age >= 100)';

    // Set the script
    setScript(testScript);

    // Execute the script and update the result
    try {
      const result = eval(testScript) as boolean;
      setResult(result);
    } catch (error) {
      console.error("Error executing script:", error);
      setResult(null);
    }
  };

  return (
    <div>
      <h2>Script Generation</h2>
      <button onClick={handleTestScript}>Use Test Script</button>
      <textarea
        value={script}
        onChange={handleScriptChange}
        placeholder='Enter script here'
        rows={4}
        cols={50}
      />
    </div>
  );
};

export default ScriptGeneration;
