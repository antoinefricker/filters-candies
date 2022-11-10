import { FlowEditorPOC } from "../components/FlowEditorPOC/FlowEditorPOC";
import { nodes, edges } from "../components/FlowEditorPOC/mockData";

export const PageFlowEditorPoc = () => {
  return <FlowEditorPOC nodes={nodes} edges={edges} />;
};
