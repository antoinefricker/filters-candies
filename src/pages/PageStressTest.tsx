import { ChangeEvent, useCallback, useEffect, useMemo, useState } from "react";
import ReactFlow, {
  Node,
  Edge,
  applyEdgeChanges,
  applyNodeChanges,
  NodeChange,
  EdgeChange,
  addEdge,
  Connection,
  NodeTypes,
  Background,
  Controls,
} from "reactflow";
import { createStyles } from "@mantine/core";
import { CustomNode } from "../components/FlowEditorPOC/CustomNode";

const useStyles = createStyles((theme) => ({
  stressTestPopper: {
    position: "absolute",
    bottom: "40px",
    right: "40px",
    zIndex: 20,
    padding: "10px",
    background: "#ffffffcc",
    border: "1px solid #00000033",
  },
  stressTestLabel: {
    display: "block",
    marginBottom: "10px",
  },
  stressTestLabelDiv: {
    display: "inline-block",
    width: "80px",
  },
}));

const createNodesAndEdges = (
  xNodes = 10,
  yNodes = 10,
  width = 100,
  height = 100
) => {
  const nodes = [];
  const edges = [];
  let nodeId = 1;
  let recentNodeId = null;

  for (let y = 0; y < yNodes; y++) {
    for (let x = 0; x < xNodes; x++) {
      const position = { x: x * width, y: y * height };
      const data = { label: `Node ${nodeId}` };
      const node = {
        id: `stress-${nodeId.toString()}`,
        style: { width: 50, fontSize: 11 },
        data,
        position,
      };
      nodes.push(node);

      if (recentNodeId && nodeId <= xNodes * yNodes) {
        edges.push({
          id: `${x}-${y}`,
          source: `stress-${recentNodeId.toString()}`,
          target: `stress-${nodeId.toString()}`,
        });
      }

      recentNodeId = nodeId;
      nodeId++;
    }
  }

  return { nodes, edges };
};

const [initialCols, initialRows] = [30, 18];
const [width, height] = [100, 100];

const { nodes: initialNodes, edges: initialEdges } = createNodesAndEdges(
  initialCols,
  initialRows,
  width,
  height
);
export const PageStressTest = () => {
  const { classes } = useStyles();
  const [cols, setCols] = useState<number>(initialCols);
  const [rows, setRows] = useState<number>(initialRows);
  const [nodes, setNodes] = useState<Node[]>(initialNodes);
  const [edges, setEdges] = useState<Edge[]>(initialEdges);

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const input = event.target;
      if (input.id === "cols") setCols(input.valueAsNumber);
      else if (input.id === "rows") setRows(input.valueAsNumber);
      const { nodes, edges } = createNodesAndEdges(cols, rows, width, height);
      setNodes(nodes);
      setEdges(edges);
    },
    [setEdges, setNodes, setCols, setRows, cols, rows]
  );

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
    <>
      <div className={classes.stressTestPopper}>
        <label htmlFor="cols" className={classes.stressTestLabel}>
          <div className={classes.stressTestLabelDiv}>Columns</div>
          <input
            type="number"
            id="cols"
            name="cols"
            value={cols}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="rows" className={classes.stressTestLabel}>
          <div className={classes.stressTestLabelDiv}>Rows</div>
          <input
            type="number"
            id="rows"
            name="rows"
            value={rows}
            onChange={handleChange}
          />
        </label>
        <p>
          {nodes.length} nodes / {edges.length} edges
        </p>
      </div>
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
    </>
  );
};
