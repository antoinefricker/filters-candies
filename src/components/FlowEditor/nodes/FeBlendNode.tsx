import { NodeProps } from "reactflow";
import { FeBlendFilterData } from "../../../model/filters";
import { NodeCard, createNodeCardTitle } from "../nodes/NodeCard";

export const FeBlendNode = (props: FeBlendNodeProps) => {
  return (
    <NodeCard
      type="feBlend"
      title={createNodeCardTitle(props, "Blend")}
      inputs={["input1", "input2", "input3"]}
      output={true}
    >
      <p>Test</p>
    </NodeCard>
  );
};

export type FeBlendNodeProps = NodeProps<FeBlendFilterData>;
