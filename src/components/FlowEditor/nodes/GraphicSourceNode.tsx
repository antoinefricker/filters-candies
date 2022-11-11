import { createStyles, Select, TextInput } from "@mantine/core";
import { Handle, NodeProps, Position } from "reactflow";
import { GraphicSourceData } from "../../../model/filters";
import { NodeCard } from "../nodes/NodeCard";

const useStyles = createStyles((theme) => ({
  root: {
    position: "relative",
  },

  input: {
    height: "auto",
    paddingTop: 18,
  },

  label: {
    position: "absolute",
    zIndex: 1000,
    pointerEvents: "none",
    fontSize: theme.fontSizes.xs,
    paddingLeft: theme.spacing.sm,
    paddingTop: theme.spacing.sm / 2,
  },
}));

export const GraphicSourceNode = ({ data }: GraphicSourceNodeProps) => {
  const { classes } = useStyles();

  return (
    <NodeCard>
      <Handle
        type="source"
        id="source"
        position={Position.Bottom}
        className="nodecard-handle mod--output"
      />

      <h5>{data.source}</h5>
      <Select
        style={{ marginTop: 20, zIndex: 20 }}
        data={["illustration", "mixed", "photograph", "text", "video"]}
        defaultValue="illustration"
        label="Source type"
        classNames={classes}
      />
    </NodeCard>
  );
};

export type GraphicSourceNodeProps = NodeProps<GraphicSourceData>;
