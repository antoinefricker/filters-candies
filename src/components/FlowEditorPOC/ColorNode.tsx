import { Handle, NodeProps, Position } from "reactflow";

export const ColorNode = ({ data }: ColorNodeData) => {
  return (
    <div
      style={{
        padding: 0,
        width: 20,
        height: 20,
        backgroundColor: data.color,
      }}
    >
      <Handle type="target" position={Position.Top} />
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
};

export type ColorNodeData = NodeProps<ColorNodeDataInner>;
export type ColorNodeDataInner = {
  color: string;
};
