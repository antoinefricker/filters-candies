import { useCallback, useMemo } from "react";
import ReactFlow, {
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
  MiniMap,
} from "reactflow";
import { useFlowEditorStoreContext } from "./contexts/FlowEditorStoreContext";
import { SourceNode } from "./nodes/SourceNode";
import { PreviewNode } from "./nodes/PreviewNode";
import { FeBlendNode } from "./nodes/FeBlendNode";
import "reactflow/dist/base.css";
import "./flowEditor.scss";

export const FlowEditor = () => {
  const { setNodes, nodes, setEdges, edges } = useFlowEditorStoreContext();
  const nodeTypes: NodeTypes = useMemo(
    () => ({
      source: SourceNode,
      preview: PreviewNode,
      feBlend: FeBlendNode,
    }),
    []
  );

  const onNodesChange = useCallback(
    (changes: NodeChange[]) => {
      const newNodes = applyNodeChanges(changes, nodes);
      setNodes(newNodes);
    },
    [nodes, setNodes]
  );
  const onEdgesChange = useCallback(
    (changes: EdgeChange[]) => {
      const newEdges = applyEdgeChanges(changes, edges);
      setEdges(newEdges);
    },
    [edges, setEdges]
  );

  const onConnect = useCallback(
    (params: Edge | Connection) => {
      console.log(params);
      const newEdges = addEdge(params, edges);
      setEdges(newEdges);
    },
    [edges, setEdges]
  );

  return (
    <div className="flowEditor">
      <ReactFlow
        fitView
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        maxZoom={1}
      >
        <Background />
        <Controls />
        <MiniMap style={{ height: 120 }} zoomable pannable />
      </ReactFlow>
    </div>
  );
};
