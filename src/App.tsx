import React from "react";
import ScriptGeneration from "./components/ScriptGeneration";
import ScriptExecution from "./components/ScriptExecution";
import ResultDisplay from "./components/ResultDisplay";
import { ScriptProvider } from "./context/ScriptContext";
import "./App.scss";

const App: React.FC = () => {
  return (
    <ScriptProvider>
      <div className='app-container'>
        <h1 className='app-title'>Script Generator App</h1>
        <ScriptGeneration />
        <ScriptExecution />
        <ResultDisplay />
      </div>
    </ScriptProvider>
  );
};

export default App;
