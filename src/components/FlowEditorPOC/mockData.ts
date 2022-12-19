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
    data: { label: "Bound together" },
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
