import { Select } from "@mantine/core";
import { NodeProps } from "reactflow";
import { SourceData, SourceType } from "../../../model/filters";
import { createNodeCardTitle, NodeCard } from "./NodeCard";
import {
  IconFileVector,
  IconPhoto,
  IconAlignJustified,
  IconLayout,
  TablerIcon,
  IconMovie,
} from "@tabler/icons";
import { ReactNode } from "react";
import { useFlowEditorStoreContext } from "../contexts/FlowEditorStoreContext";

export const SourceNode = (props: SourceNodeProps) => {
  const { data } = props;

  const iconClass: Record<SourceType, TablerIcon> = {
    illustration: IconFileVector,
    mixed: IconLayout,
    photograph: IconPhoto,
    text: IconAlignJustified,
    video: IconMovie,
  };
  const icon: ReactNode = iconClass[data.sourceType]({
    size: 24,
    stroke: 1,
    color: "currentColor",
  });

  const { updateNode } = useFlowEditorStoreContext();

  return (
    <NodeCard
      type="source"
      icon={icon}
      title={createNodeCardTitle(props, "Graphic source")}
      output={true}
    >
      <Select
        data={["illustration", "mixed", "photograph", "text", "video"]}
        defaultValue="illustration"
        label="Source type"
        onChange={(value) => {
          console.log(`onChange: ${value}`);
          updateNode(props.id, { sourceType: value });
        }}
      />
    </NodeCard>
  );
};

export type SourceNodeProps = NodeProps<SourceData>;
