import {
  FlowEditorStoreContextProvider,
  fullfillNodes,
} from "../components/FlowEditor/contexts/FlowEditorStoreContext";
import { FlowEditorUI } from "../components/FlowEditor/FlowEditorUI";
import { FlowEditorUIContextProvider } from "../components/FlowEditor/contexts/FlowEditorUIContext";
import { edges, nodes } from "../components/FlowEditor/mockData";

export const PageFlowEditor = () => {
  const n = fullfillNodes(nodes);
  console.log(n);
  return (
    <FlowEditorStoreContextProvider edges={edges} nodes={n}>
      <FlowEditorUIContextProvider>
        <FlowEditorUI />
      </FlowEditorUIContextProvider>
    </FlowEditorStoreContextProvider>
  );
};
