import {
  createContext,
  Dispatch,
  ReactNode,
  useContext,
  useMemo,
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
      value={{
        edges,
        setEdges,
        nodes,
        setNodes,
        updateNode: (nodeId: string, dataUpdate: any) => {
          const nodeIndex = nodes.findIndex(
            (node: Node<any>) => node.id === nodeId
          );
          if (nodeIndex < 0) {
            console.warn(`Unable to find nodewith id: #${nodeId}`);
          }

          setNodes([
            ...nodes.slice(0, nodeIndex),
            {
              ...nodes[nodeIndex],
              data: { ...nodes[nodeIndex].data, ...dataUpdate },
            },
            ...nodes.slice(nodeIndex + 1),
          ]);
        },
      }}
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
  updateNode: (nodeId: string, update: {}) => void;
  edges: Edge[];
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
    dragHandle: ".nodecard__header",
    connectable: true,
    ...node,
  }));
