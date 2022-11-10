import { FlowEditorPOC } from "../components/FlowEditorPOC/FlowEditorPOC";

import { createNodesAndEdges } from "../components/FlowEditorPOC/mockData";

const { nodes, edges } = createNodesAndEdges(30, 20);

export const PageFlowEditorPocStressTest = () => {
  return <FlowEditorPOC nodes={nodes} edges={edges} />;
};
