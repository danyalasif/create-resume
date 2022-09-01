import React, { useState } from "react";

type Action = {type: 'increment'} | {type: 'decrement'}
type Dispatch = (action: Action) => void
type State = {fullName: "", jobTitle: ""}
type EditorProviderProps = {children: React.ReactNode}
interface EditorProps {
  fullName: string;
  jobTitle: string;
}

export const EditorContext = React.createContext<any | undefined>(undefined)


function EditorProvider({children}:EditorProviderProps) {
    const [value, setValue] = useState<EditorProps>({fullName: "", jobTitle: ""})
    // const value: EditorProps = {fullName: "", jobTitle: ""}
    return <EditorContext.Provider value={[value, setValue]}>{children}</EditorContext.Provider>
}
  
function useEditorData() {
    const context = React.useContext(EditorContext)
    if (context === undefined) {
      throw new Error('useCount must be used within a CountProvider')
    }
    return context
}

  export {EditorProvider, useEditorData}