// src/components/ScriptGeneration.tsx
import React, { useContext } from "react";
import { ScriptContext } from "../context/ScriptContext";
import "./ScriptGeneration.scss";
import { ScriptObject } from "../types/types";

const ScriptGeneration: React.FC = () => {
  const {
    script,
    objectToEvaluate,
    setObjectToEvaluate,
    setScript,
    setResult,
  } = useContext(ScriptContext);

  const getRandomObject = () => {
    return {
      name: getRandomName(),
      role: getRandomRole(),
      age: getRandomNumber(1, 150),
    };
  };

  const getRandomName = (length = 8) => {
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let result = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      result += charset.charAt(randomIndex);
    }
    return result;
  };

  const getRandomRole = () => {
    const roles = [
      "student",
      "lecturer",
      "secretary",
      "developer",
      "manager",
      "engineer",
      "designer",
      "analyst",
      "administrator",
      "researcher",
    ];

    const randomIndex = Math.floor(Math.random() * roles.length);
    return roles[randomIndex];
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
    const testScript = function (objectToEvaluate: ScriptObject) {
      if (
        objectToEvaluate.name === "Budha" ||
        objectToEvaluate.age === 40 ||
        objectToEvaluate.role === "student"
      ) {
        return objectToEvaluate;
      }
    };

    // Set the script
    setScript(JSON.stringify(testScript));

    // Execute the script and update the result
    try {
      const result = testScript(objectToEvaluate);
      if (result) {
        setResult(true);
      }
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
