import "reactflow/dist/style.css";
import { FlowEditorStoreContextProvider } from "./FlowEditorStoreContext";
import { FlowEditorUI } from "./FlowEditorUI";
import { FlowEditorUIContextProvider } from "./FlowEditorUIContext";
import { edges, nodes } from "../../mockData";

import "./SVGFilterEditor.css";

export const FlowEditor = () => {
  return (
    <FlowEditorStoreContextProvider edges={edges} nodes={nodes}>
      <FlowEditorUIContextProvider>
        <FlowEditorUI />
      </FlowEditorUIContextProvider>
    </FlowEditorStoreContextProvider>
  );
};
