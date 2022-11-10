import { Edge, Node } from "reactflow";

export const nodes: Node<any>[] = [
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
export const edges: Edge[] = [
  { id: "1-2", source: "1", target: "2", label: "to the", type: "step" },
];
