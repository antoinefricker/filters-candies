import {
  createContext,
  Dispatch,
  ReactNode,
  useContext,
  useState,
} from "react";
import { Node, Edge } from "reactflow";

const FlowEditorStoreContext = createContext<FlowEditorStoreContextType | null>(
  null
);

export const FlowEditorStoreContextProvider = (
  props: FlowEditorStoreProviderProps
) => {
  const {
    children,
    edges: initialEdges = [],
    nodes: initialNodes = [],
  } = props;
  const [edges, setEdges] = useState<Edge[]>(initialEdges);
  const [nodes, setNodes] = useState<Node[]>(initialNodes);
  return (
    <FlowEditorStoreContext.Provider
      value={{ nodes, setNodes, edges, setEdges }}
    >
      {children}
    </FlowEditorStoreContext.Provider>
  );
};

export const useFlowEditorStoreContext = () => {
  const context = useContext(FlowEditorStoreContext);
  if (!context) {
    throw new Error(
      "useFlowEditorStoreContext must be used within a FlowEditorStoreProvider"
    );
  }
  return context;
};

export type FlowEditorStoreContextType = {
  nodes: Node[];
  setNodes: Dispatch<Node[]>;
  edges: any;
  setEdges: Dispatch<Edge[]>;
};

export type FlowEditorStoreProviderProps = {
  children: ReactNode;
  nodes?: Node[];
  edges?: Edge[];
};

export const fullfillNodes = (nodes: Node[]) =>
  nodes.map((node) => ({
    draggable: true,
    dragHandle: ".drag-handle",
    connectable: true,
    ...node,
  }));
