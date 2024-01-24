// src/components/ScriptGeneration.tsx
import React, { useContext } from "react";
import { ScriptContext } from "../context/ScriptContext";
import "./ScriptGeneration.scss";

const ScriptGeneration: React.FC = () => {
  const { script, setObjectToEvaluate, setScript, setResult } =
    useContext(ScriptContext);

  const getRandomObject = () => {
    return {
      name: getRandomString(),
      age: getRandomNumber(1, 150),
      // Add other properties as needed
    };
  };

  const getRandomString = (length = 8) => {
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let result = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      result += charset.charAt(randomIndex);
    }
    return result;
  };

  const getRandomNumber = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const handleScriptChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setScript(event.target.value);
  };

  const handleTestScript = () => {
    // Generate a random test object
    const testObject = getRandomObject();

    // Set the test object
    setObjectToEvaluate(testObject);

    // Test script
    const testScript = `(object.name === "${testObject.name}" && object.age === ${testObject.age})`;

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
    <div className='script-generation-container'>
      <h2>Script Generation</h2>
      <button onClick={handleTestScript}>Generate test script</button>
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
