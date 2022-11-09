import { useState, useCallback, useMemo } from "react";
import ReactFlow, {
  Node,
  Edge,
  Background,
  Controls,
  applyEdgeChanges,
  applyNodeChanges,
  NodeChange,
  EdgeChange,
  addEdge,
  Connection,
  NodeTypes,
} from "reactflow";
import "reactflow/dist/style.css";
import { CustomNode } from "./CustomNode";

const initialNodes: Node<any>[] = [
  {
    id: "1",
    data: { label: "Welcome" },
    position: { x: 0, y: 0 },
  },
  {
    id: "2",
    data: { label: "TypeScript", value: "hell" },
    type: "custom",
    position: { x: 100, y: 400 },
  },
  {
    id: "3",
    type: "output",
    data: { label: "Output #1" },
    position: { x: 10, y: 10 },
    parentNode: "5",
    extent: "parent",
  },
  {
    id: "4",
    type: "output",
    data: { label: "Output #2" },
    position: { x: 10, y: 80 },
    parentNode: "5",
    extent: "parent",
  },
  {
    id: "5",
    type: "group",
    data: { label: "Outputs" },
    position: { x: 150, y: 40 },
    style: {
      width: 170,
      height: 140,
    },
  },
];
const initialEdges: Edge[] = [
  { id: "1-2", source: "1", target: "2", label: "to the", type: "step" },
];

export const SVGFiltersEditor = () => {
  const [nodes, setNodes] = useState<Node[]>(initialNodes);
  const [edges, setEdges] = useState<Edge[]>(initialEdges);
  const nodeTypes: NodeTypes = useMemo(
    () => ({
      custom: CustomNode,
    }),
    []
  );

  const onNodesChange = useCallback(
    (changes: NodeChange[]) =>
      setNodes((_nodes) => applyNodeChanges(changes, _nodes)),
    []
  );
  const onEdgesChange = useCallback(
    (changes: EdgeChange[]) =>
      setEdges((_edges) => applyEdgeChanges(changes, _edges)),
    []
  );

  const onConnect = useCallback(
    (params: Edge | Connection) => setEdges((eds) => addEdge(params, eds)),
    []
  );

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
      }}
    >
      <ReactFlow
        fitView
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
};
