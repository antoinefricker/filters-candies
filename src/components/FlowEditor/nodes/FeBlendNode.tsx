import { Handle, NodeProps, Position } from "reactflow";
import { FeBlendFilterData } from "../../../model/filters";
import { NodeCard } from "../nodes/NodeCard";

export const FeBlendNode = ({ data }: FeBlendNodeProps) => {
  return (
    <NodeCard>
      <Handle
        type="source"
        position={Position.Bottom}
        id="output"
        className="nodecard-handle mod--output"
      />
      <Handle
        type="source"
        position={Position.Top}
        id="input"
        className="nodecard-handle mod--input"
      />
      <div>
        <h4>feBlend</h4>
        <p>{data.input1}</p>
      </div>
    </NodeCard>
  );
};

export type FeBlendNodeProps = NodeProps<FeBlendFilterData>;
