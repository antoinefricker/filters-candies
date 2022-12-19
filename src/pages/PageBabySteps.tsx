import { FlowEditorPOC } from "../components/FlowEditorPOC/FlowEditorPOC";
import { nodes, edges } from "../components/FlowEditorPOC/mockDataBabySteps";

export const PageBabySteps = () => {
  return <FlowEditorPOC nodes={nodes} edges={edges} />;
};
