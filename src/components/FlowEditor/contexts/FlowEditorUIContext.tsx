import { Node } from "reactflow";
import { createContext, ReactNode, useMemo, useState } from "react";

const FlowEditorUIContext = createContext<FlowEditorUIContextType | null>(null);

export const FlowEditorUIContextProvider = (
  props: FlowEditorUIContextProviderProps
) => {
  const [showCreationPanel, setShowCreationPanel] = useState(false);
  const [showNodeSelectionPanel, setShowNodeSelectionPanel] = useState(false);
  const [nodeSelection, setNodeSelection] = useState<Node | null>(null);

  const { children } = props;

  const value = useMemo(() => {
    return {
      openCreationPanel: () => setShowCreationPanel(true),
      closeCreationPanel: () => setShowCreationPanel(false),
      openNodeSelectionPanel: () => setShowNodeSelectionPanel(true),
      closeNodeSelectionPanel: () => setShowNodeSelectionPanel(false),
      nodeSelection,
      setNodeSelection,
    };
  }, [
    setShowCreationPanel,
    setShowNodeSelectionPanel,
    nodeSelection,
    setNodeSelection,
  ]);

  return (
    <FlowEditorUIContext.Provider value={value}>
      {children}
    </FlowEditorUIContext.Provider>
  );
};

export type FlowEditorUIContextProviderProps = {
  children: ReactNode;
};

export type FlowEditorUIContextType = {
  openCreationPanel: () => void;
  closeCreationPanel: () => void;
  openNodeSelectionPanel: () => void;
  closeNodeSelectionPanel: () => void;
  nodeSelection: Node | null;
  setNodeSelection: (node: Node | null) => void;
};
