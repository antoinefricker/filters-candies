import { Edge } from "reactflow";
import { SVGFilterNode } from "../../model/filters";

export const nodes: SVGFilterNode[] = [
  {
    id: "1",
    data: { label: "Source 1", sourceType: "illustration" },
    position: { x: 0, y: 0 },
    type: "source",
  },
  {
    id: "2",
    data: { label: "Template", source: "http://www.septephotograph" },
    position: { x: 0, y: 300 },
    type: "feImage",
  },
  {
    id: "3",
    data: {
      label: "Final blend",
      mode: "multiply",
      input1: "input1",
      input2: "input2",
      x: 0,
      y: 0,
      width: 100,
      height: 100,
    },
    position: { x: 400, y: 150 },
    type: "feBlend",
  },
  {
    id: "4",
    data: { label: null },
    position: { x: 700, y: 150 },
    type: "preview",
  },
];
export const edges: Edge[] = [
  {
    id: "1-3",
    source: "1",
    sourceHandle: "output",
    target: "3",
    targetHandle: "input1",
    type: "step",
    animated: true,
  },
  {
    id: "2-3",
    source: "2",
    sourceHandle: "output",
    target: "3",
    targetHandle: "input2",
    type: "step",
    animated: true,
  },
  {
    id: "3-4",
    source: "3",
    sourceHandle: "output",
    target: "4",
    targetHandle: "input",
    type: "step",
    animated: true,
  },
];
