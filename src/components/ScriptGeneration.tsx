import React, { useContext, useState, useEffect } from "react";
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

  const [generatedScriptResult, setGeneratedScriptResult] =
    useState<ScriptObject | null>(null);
  const [savedResults, setSavedResults] = useState<ScriptObject[]>([]);

  useEffect(() => {
    // Update the generated script result when objectToEvaluate changes
    setGeneratedScriptResult(objectToEvaluate);
  }, [objectToEvaluate]);

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
      return (
        objectToEvaluate.name === "Budha" ||
        objectToEvaluate.age === 40 ||
        objectToEvaluate.role === "student"
      );
    };

    // Set the script
    setScript(JSON.stringify(testScript(objectToEvaluate)));

    // Execute the script and update the result
    try {
      const result = testScript(objectToEvaluate);
      setResult(result);

      console.log(result, "result");
    } catch (error) {
      console.error("Error executing script:", error);
      setResult(null);
    }
  };

  const handleSaveScript = () => {
    try {
      // Save the current generatedScriptResult to local storage
      if (generatedScriptResult) {
        const updatedResults = [...savedResults, generatedScriptResult];
        setSavedResults(updatedResults);
        localStorage.setItem("savedResults", JSON.stringify(updatedResults));
        alert("Script result saved!");
      } else {
        console.log("No script result to save.");
      }
    } catch (error) {
      console.error("Error saving script result:", error);
    }
  };

  return (
    <div className='script-generation-container'>
      <h2>Script Generation</h2>
      <button onClick={handleTestScript}>Generate test script</button>
      <textarea
        value={`Generated Script Result\nName: ${
          generatedScriptResult?.name || ""
        }\nAge: ${generatedScriptResult?.age || ""}\nRole: ${
          generatedScriptResult?.role || ""
        }`}
        onChange={handleScriptChange}
        placeholder='Enter script here'
        rows={4}
        cols={50}
      />

      <button onClick={handleSaveScript}>Save Generated Script</button>
    </div>
  );
};

export default ScriptGeneration;
