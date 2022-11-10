import { Handle, NodeProps, Position } from "reactflow";
import { GraphicSourceData } from "../../../model/filters";
import { NodeCard } from "../nodes/NodeCard";

export const GraphicSourceNode = ({ data }: GraphicSourceNodeProps) => {
  return (
    <NodeCard>
      <Handle
        type="source"
        position={Position.Bottom}
        id="output"
        className="nodecard-handle mod--output"
      />
      <div>
        <h5>{data.source}</h5>
      </div>
    </NodeCard>
  );
};

export type GraphicSourceNodeProps = NodeProps<GraphicSourceData>;
