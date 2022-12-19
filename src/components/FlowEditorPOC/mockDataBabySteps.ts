import { Edge, MarkerType, Node } from "reactflow";

export const nodes: Node<any>[] = [
  {
    id: "1",
    data: { label: "Deadly super weapon" },
    type: "weapon",
    position: { x: 100, y: 100 },
  },
  {
    id: "2",
    data: { label: "The nasty supervillain" },
    type: "villain",
    position: { x: 500, y: 100 },
  },
];

export const edges: Edge[] = [
  {
    id: "1-2",
    source: "1",
    target: "2",
    label: "kills",
    type: "step",
    animated: true,
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: "red",
      strokeWidth: 2,
      width: 20,
      height: 20,
    },
    style: { stroke: "red", strokeWidth: 2 },
  },
];
