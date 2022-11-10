import { Edge } from "reactflow";
import { SVGFilterNode } from "../../model/filters";

export const nodes: SVGFilterNode[] = [
  {
    id: "1",
    data: { label: "test", source: "illustration" },
    position: { x: 0, y: 0 },
    type: "source",
  },
  {
    id: "2",
    data: {
      label: "test",
      mode: "multiply",
      input1: "input1",
      input2: "input2",
      x: 0,
      y: 0,
      width: 100,
      height: 100,
    },
    position: { x: 0, y: 100 },
    type: "feBlend",
  },
];
export const edges: Edge[] = [
  { id: "1-2", source: "1", target: "2", type: "step", animated: true },
];
