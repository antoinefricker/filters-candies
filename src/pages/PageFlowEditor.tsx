import "reactflow/dist/style.css";
import { FlowEditorStoreContextProvider } from "../components/FlowEditor/contexts/FlowEditorStoreContext";
import { FlowEditorUI } from "../components/FlowEditor/FlowEditorUI";
import { FlowEditorUIContextProvider } from "../components/FlowEditor/contexts/FlowEditorUIContext";
import { edges, nodes } from "../components/FlowEditor/mockData";

export const PageFlowEditor = () => {
  return (
    <FlowEditorStoreContextProvider edges={edges} nodes={nodes}>
      <FlowEditorUIContextProvider>
        <FlowEditorUI />
      </FlowEditorUIContextProvider>
    </FlowEditorStoreContextProvider>
  );
};
