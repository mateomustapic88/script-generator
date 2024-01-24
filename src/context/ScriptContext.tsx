import React, {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  ReactNode,
} from "react";
import { ScriptObject } from "../types/types";

interface ScriptContextProps {
  script: string;
  setScript: Dispatch<SetStateAction<string>>;
  objectToEvaluate: ScriptObject;
  setObjectToEvaluate: Dispatch<SetStateAction<ScriptObject>>;
  result: boolean | null;
  setResult: Dispatch<SetStateAction<boolean | null>>;
}

export const ScriptContext = createContext<ScriptContextProps>({
  script: "",
  setScript: () => {},
  objectToEvaluate: { name: "", age: 0, role: "" },
  setObjectToEvaluate: () => {},
  result: null,
  setResult: () => {},
});

interface ScriptProviderProps {
  children: ReactNode;
}

export const ScriptProvider: React.FC<ScriptProviderProps> = ({ children }) => {
  const [script, setScript] = useState<string>("");
  const [objectToEvaluate, setObjectToEvaluate] = useState<ScriptObject>({
    name: "",
    age: 0,
    role: "",
  });
  const [result, setResult] = useState<boolean | null>(null);

  return (
    <ScriptContext.Provider
      value={{
        script,
        setScript,
        objectToEvaluate,
        setObjectToEvaluate,
        result,
        setResult,
      }}
    >
      {children}
    </ScriptContext.Provider>
  );
};
