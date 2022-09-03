import React, { useState } from "react";

type Action = { type: "increment" } | { type: "decrement" };
type Dispatch = (action: Action) => void;
type State = { fullName: ""; jobTitle: "" };
type EditorProviderProps = { children: React.ReactNode };

interface SkillType {
  id: number;
  desc: string;
  name: string;
}
interface EditorProps {
  fullName: string;
  jobTitle: string;
  profileInput: string;
  skills: Array<SkillType>;
}

export const EditorContext = React.createContext<
  [EditorProps, React.Dispatch<React.SetStateAction<EditorProps>>] | undefined
>(undefined);

const initialVals = {
  fullName: "",
  jobTitle: "",
  profileInput: "",
  skills: [],
};

function EditorProvider({ children }: EditorProviderProps) {
  const [value, setValue] = useState<EditorProps>(initialVals);

  return <EditorContext.Provider value={[value, setValue]}>{children}</EditorContext.Provider>;
}

function useEditorData() {
  const context = React.useContext(EditorContext);
  if (context === undefined) {
    throw new Error("useCount must be used within a CountProvider");
  }
  return context;
}

export { EditorProvider, useEditorData };
