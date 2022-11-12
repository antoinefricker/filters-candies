import { Select } from "@mantine/core";
import { NodeProps } from "reactflow";
import { SourceData } from "../../../model/filters";
import { createNodeCardTitle, NodeCard } from "./NodeCard";

export const SourceNode = (props: SourceNodeProps) => {
  return (
    <NodeCard
      type="source"
      title={createNodeCardTitle(props, "Graphic source")}
      output={true}
    >
      <Select
        data={["illustration", "mixed", "photograph", "text", "video"]}
        defaultValue="illustration"
        label="Source type"
      />
    </NodeCard>
  );
};

export type SourceNodeProps = NodeProps<SourceData>;
