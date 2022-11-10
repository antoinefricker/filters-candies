import { Edge, Node } from "reactflow";

export const nodes: Node<any>[] = [
  {
    id: "1",
    data: { label: "Welcome" },
    type: "input",
    position: { x: 0, y: 0 },
  },
  {
    id: "2",
    data: { label: "TypeScript", value: "hell" },
    type: "custom",
    position: { x: 100, y: 200 },
  },
  {
    id: "3",
    type: "output",
    data: { label: "Bound" },
    position: { x: 10, y: 10 },
    parentNode: "5",
    extent: "parent",
  },
  {
    id: "4",
    type: "output",
    data: { label: "for life" },
    position: { x: 10, y: 80 },
    parentNode: "5",
    extent: "parent",
  },
  {
    id: "5",
    type: "group",
    data: {},
    position: { x: 300, y: 300 },
    style: {
      width: 170,
      height: 140,
    },
  },
];
export const edges: Edge[] = [
  {
    id: "1-2",
    source: "1",
    target: "2",
    label: "to the",
    type: "step",
    style: { stroke: "cyan" },
  },
  {
    id: "2-3",
    source: "2",
    target: "3",
    animated: true,
    type: "step",
    sourceHandle: "a",
  },
  {
    id: "2-3",
    source: "2",
    target: "4",
    animated: true,
    sourceHandle: "b",
    style: { stroke: "pink" },
  },
];

export function createNodesAndEdges(xNodes = 10, yNodes = 10) {
  const nodes = [];
  const edges = [];
  let nodeId = 1;
  let recentNodeId = null;

  for (let y = 0; y < yNodes; y++) {
    for (let x = 0; x < xNodes; x++) {
      const position = { x: x * 100, y: y * 50 };
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
}
