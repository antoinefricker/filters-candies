import { ChangeEvent, useCallback } from "react";
import { Handle, NodeProps, Position } from "reactflow";
import { GraphicSourceData } from "../../model/GraphicSource";
import { NodeCard } from "./NodeCard";

const handleStyle = { left: 10 };

export const GraphicSourceNode = ({ data }: GraphicSourceNodeProps) => {
  const handleTypeChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      console.log(event.currentTarget.value);
    },
    []
  );

  return (
    <NodeCard>
      <Handle
        type="source"
        position={Position.Bottom}
        id="output"
        className="nodecard-handle mod--output"
      />
    </NodeCard>
  );
};

export type GraphicSourceNodeProps = NodeProps<GraphicSourceData>;
