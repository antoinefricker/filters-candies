import {
  FlowEditorStoreContextProvider,
  fullfillNodes,
} from "../components/FlowEditor/contexts/FlowEditorStoreContext";
import { FlowEditor } from "../components/FlowEditor/FlowEditor";
import { FlowEditorUIContextProvider } from "../components/FlowEditor/contexts/FlowEditorUIContext";
import { edges, nodes } from "../components/FlowEditor/mockData";

export const PageFlowEditor = () => {
  return (
    <FlowEditorStoreContextProvider edges={edges} nodes={fullfillNodes(nodes)}>
      <FlowEditorUIContextProvider>
        <FlowEditor />
      </FlowEditorUIContextProvider>
    </FlowEditorStoreContextProvider>
  );
};
