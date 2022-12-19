import { Handle, NodeProps, Position } from "reactflow";
import villainGraphic from "../../assets/supervillain.png";
import weaponGraphic from "../../assets/weapon.png";

export const ImageNode = (props: ImageNodeData) => {
  const { data, type } = props;
  return (
    <div>
      <h3>{data.label}</h3>
      <Handle type="target" position={Position.Top} />
      <Handle type="source" position={Position.Bottom} />
      <img
        src={type === "villain" ? villainGraphic : weaponGraphic}
        style={{ width: "200px", height: "200px" }}
      />
    </div>
  );
};

export type ImageNodeData = NodeProps<ImageNodeDataInner>;
export type ImageNodeDataInner = {
  label: string;
};
