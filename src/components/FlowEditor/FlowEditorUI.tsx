import { createStyles } from "@mantine/core";
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
import "reactflow/dist/base.css";
import { GraphicSourceNode } from "./nodes/GraphicSourceNode";
import { FeBlendNode } from "./nodes/FeBlendNode";

const useStyles = createStyles((theme) => ({
  flowContainer: {
    width: "100%",
    height: "100%",
  },
}));

export const FlowEditorUI = () => {
  const { classes } = useStyles();
  const { setNodes, nodes, setEdges, edges } = useFlowEditorStoreContext();
  const nodeTypes: NodeTypes = useMemo(
    () => ({
      source: GraphicSourceNode,
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
      const newEdges = addEdge(params, edges);
      setEdges(newEdges);
    },
    [edges, setEdges]
  );

  return (
    <div className={classes.flowContainer}>
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
