import { NodeProps } from "reactflow";
import { NodeCard, createNodeCardTitle } from "../nodes/NodeCard";
import type { PreviewData } from "../../../model";

export const PreviewNode = (props: PreviewNodeProps) => {
  return (
    <NodeCard
      type="source"
      title={createNodeCardTitle(props, "Preview")}
      inputs={["input"]}
      output={false}
    ></NodeCard>
  );
};

export type PreviewNodeProps = NodeProps<PreviewData>;
