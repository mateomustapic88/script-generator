// src/App.tsx
import React from "react";
import ScriptGeneration from "./components/ScriptGeneration";
import ScriptExecution from "./components/ScriptExecution";
import ResultDisplay from "./components/ResultDisplay";
import { ScriptProvider } from "./context/ScriptContext";

const App: React.FC = () => {
  return (
    <ScriptProvider>
      <div>
        <h1>Script Generator App</h1>
        <ScriptGeneration />
        <ScriptExecution />
        <ResultDisplay />
      </div>
    </ScriptProvider>
  );
};

export default App;
