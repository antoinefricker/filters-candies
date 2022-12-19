import { Edge, Node } from "reactflow";

let index = 0;

export const nodes: Node<any>[] = [
  {
    id: "1",
    data: { label: "1", note: "G4" },
    type: "beep",
    position: { x: 100, y: 100 },
  },
  {
    id: "2",
    data: { label: "2", note: "G4" },
    type: "beep",
    position: { x: 200, y: 100 },
  },
  {
    id: "3",
    data: { label: "3", note: "G4" },
    type: "beep",
    position: { x: 300, y: 100 },
  },
  {
    id: "4",
    data: { label: "4", note: "A4" },
    type: "beep",
    position: { x: 400, y: 100 },
  },
  {
    id: "5",
    data: { label: "5", note: "B4" },
    type: "beep",
    position: { x: 500, y: 100 },
  },
  {
    id: "6",
    data: { label: "6", note: "A4" },
    type: "beep",
    position: { x: 600, y: 100 },
  },
  {
    id: "7",
    data: { label: "7", note: "G4" },
    type: "beep",
    position: { x: 700, y: 100 },
  },

  {
    id: "8",
    data: { label: "8", note: "B4" },
    type: "beep",
    position: { x: 800, y: 100 },
  },
  {
    id: "9",
    data: { label: "9", note: "A4" },
    type: "beep",
    position: { x: 900, y: 100 },
  },
  {
    id: "10",
    data: { label: "10", note: "A4" },
    type: "beep",
    position: { x: 1000, y: 100 },
  },
  {
    id: "11",
    data: { label: "11", note: "G4" },
    type: "beep",
    position: { x: 1100, y: 100 },
  },
  {
    id: "12",
    data: { label: "12", note: "B5" },
    type: "beep",
    position: { x: 800, y: 300 },
  },
  {
    id: "13",
    data: { label: "13", note: "A5" },
    type: "beep",
    position: { x: 900, y: 300 },
  },
  {
    id: "14",
    data: { label: "14", note: "A5" },
    type: "beep",
    position: { x: 1000, y: 300 },
  },
  {
    id: "15",
    data: { label: "15", note: "G5" },
    type: "beep",
    position: { x: 1100, y: 300 },
  },
];

export const edges: Edge[] = [
  {
    id: "1",
    source: "1",
    target: "2",
  },
  {
    id: "2",
    source: "2",
    target: "3",
  },
  {
    id: "3",
    source: "3",
    target: "4",
  },
  {
    id: "4",
    source: "4",
    target: "5",
  },
  {
    id: "5",
    source: "5",
    target: "6",
  },
  {
    id: "6",
    source: "6",
    target: "7",
  },
  {
    id: "7",
    source: "7",
    target: "8",
  },
  {
    id: "8",
    source: "7",
    target: "12",
  },
  {
    id: "9",
    source: "8",
    target: "9",
  },
  {
    id: "10",
    source: "9",
    target: "10",
  },
  {
    id: "11",
    source: "10",
    target: "11",
  },
  {
    id: "12",
    source: "12",
    target: "13",
  },
  {
    id: "13",
    source: "13",
    target: "14",
  },
  {
    id: "14",
    source: "14",
    target: "15",
  },
];
