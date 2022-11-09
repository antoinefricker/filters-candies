import { ChangeEvent, useCallback } from "react";
import { Handle, NodeProps, Position } from "reactflow";

const handleStyle = { left: 10 };
const cardStyle = {
  padding: "10px",
  backgroundColor: "#ffffff",
  border: "1px dashed #ff0000",
};

export const CustomNode = ({ data }: CustomNodeData) => {
  const onChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.currentTarget.value);
  }, []);

  return (
    <div style={cardStyle}>
      <Handle type="target" position={Position.Top} />
      <div>
        <label htmlFor="text" style={{ paddingRight: "10px" }}>
          {data.label}
        </label>
        <input
          id="text"
          name="text"
          onChange={onChange}
          defaultValue={data.value}
        />
      </div>
      <Handle type="source" position={Position.Bottom} id="a" />
      <Handle
        type="source"
        position={Position.Bottom}
        id="b"
        style={handleStyle}
      />
    </div>
  );
};

export type CustomNodeData = NodeProps<CustomNodeDataInner>;
export type CustomNodeDataInner = {
  label: string;
  value: string;
};
