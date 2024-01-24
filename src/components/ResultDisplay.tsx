import React, { useContext } from "react";
import { ScriptContext } from "../context/ScriptContext";

const ResultDisplay: React.FC = () => {
  const { result } = useContext(ScriptContext);

  return (
    <div>
      <h2>Result Display</h2>
      {result !== null ? (
        <p>
          Result:
          {result
            ? "Object meets conditions"
            : "Object does not meet conditions"}
        </p>
      ) : (
        <p>No result to display</p>
      )}
    </div>
  );
};

export default ResultDisplay;
