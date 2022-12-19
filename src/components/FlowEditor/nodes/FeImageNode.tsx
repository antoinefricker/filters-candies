import { Select } from "@mantine/core";
import { NodeProps } from "reactflow";
import { FeImageFilterData } from "../../../model/filters";
import { NodeCard, createNodeCardTitle } from "../nodes/NodeCard";
import { FilterAreaForm } from "./FilterAreaForm";

export const FeImageNode = (props: FeImageNodeProps) => {
  return (
    <NodeCard
      type="feImage"
      title={createNodeCardTitle(props, "Image")}
      output={true}
    >
      <FilterAreaForm />
      <Select
        name="preserveAspectRationAlign"
        data={[
          "xMinYMin",
          "xMidYMin",
          "xMaxYMin",
          "xMinYMid",
          "xMidYMid",
          "xMaxYMid",
          "xMinYMax",
          "xMidYMax",
          "xMaxYMax",
        ]}
      />
      <Select name="preserveAspectRationMeetOrSlice" data={["meet", "slice"]} />
      <Select name="crossOrigin" data={["anonymous", "use-credentials"]} />
    </NodeCard>
  );
};

export type FeImageNodeProps = NodeProps<FeImageFilterData>;
