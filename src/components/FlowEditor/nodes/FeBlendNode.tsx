import { Handle, NodeProps, Position } from "reactflow";
import { FeBlendFilterData } from "../../../model/filters";
import { NodeCard } from "../nodes/NodeCard";

export const FeBlendNode = ({ data }: FeBlendNodeProps) => {
  return (
    <NodeCard
      type="feBlend"
      title="Blend"
      inputs={["input1", "input2", "input3"]}
      output={true}
    >
      <p>Test</p>
    </NodeCard>
  );
};

export type FeBlendNodeProps = NodeProps<FeBlendFilterData>;
