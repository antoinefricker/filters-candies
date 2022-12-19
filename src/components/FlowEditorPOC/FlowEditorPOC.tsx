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
import { ColorNode } from "./ColorNode";
import { CustomNode } from "./CustomNode";
import { ImageNode } from "./ImageNode";
import { BeepNode } from "./BeepNode";

export const FlowEditorPOC = (props: FlowEditorPocProps) => {
  const { id, nodes: initialNodes, edges: initialEdges } = props;
  const [nodes, setNodes] = useState<Node[]>(initialNodes);
  const [edges, setEdges] = useState<Edge[]>(initialEdges);
  const nodeTypes: NodeTypes = useMemo(
    () => ({
      custom: CustomNode,
      color: ColorNode,
      weapon: ImageNode,
      villain: ImageNode,
      beep: BeepNode,
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
      id={id}
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

export type FlowEditorPocProps = {
  id?: string;
  nodes: Node[];
  edges: Edge[];
};
