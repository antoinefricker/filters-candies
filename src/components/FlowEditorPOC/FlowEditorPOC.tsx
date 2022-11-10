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
import { nodes as initialNodes, edges as initialEdges } from "./mockData";

export const FlowEditorPOC = () => {
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
    <ReactFlow
      style={{
        width: "100%",
        height: "100%",
      }}
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
  );
};
