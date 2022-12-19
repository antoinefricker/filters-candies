import { FlowEditorPOC } from "../components/FlowEditorPOC/FlowEditorPOC";
import { nodes, edges } from "../components/FlowEditorPOC/mockDataBeepMachine";

export const PageBeepMachineTest = () => {
  return <FlowEditorPOC nodes={nodes} edges={edges} />;
};
