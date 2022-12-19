import { ReactNode } from "react";
import { Handle, HandleType, NodeProps, Position } from "reactflow";
import { NodeTypes } from "../../../model";
import "./NodeCard.scss";

export const NodeCard = (props: NodeCardProps) => {
  const { type, children, icon, title, output = false, inputs = [] } = props;
  return (
    <div className={`nodecard nodecard--${type}`}>
      {output && <NodeCardHandle type="output" />}
      {inputs.map((input, index) => (
        <NodeCardHandle
          key={`key_${index}`}
          type="input"
          {...{ id: input, index, siblings: inputs.length }}
        />
      ))}
      <header className="nodecard__header">
        <div className="nodecard__header-icon">{icon}</div>

        <h4>{title}</h4>
      </header>
      <div className="nodecard__container">{children}</div>
    </div>
  );
};

export const NodeCardHandle = (props: NodeCardHandleProps) => {
  const { type, index = 1, siblings = 1 } = props;
  const { handleType, position } =
    type === "input"
      ? {
          handleType: "target",
          position: Position.Left,
        }
      : {
          handleType: "source",
          position: Position.Right,
        };
  const handleId = props.id ?? type;

  return (
    <Handle
      id={handleId}
      type={handleType as HandleType}
      position={position}
      className={`react-flow__handle-${type} react-flow__handle-i${
        index + 1
      }_${siblings}`}
    />
  );
};

export type NodeCardHandleProps = {
  type: "output" | "input";
  index?: number;
  siblings?: number;
  id?: string;
};

export type NodeCardProps = {
  children?: ReactNode;
  icon?: ReactNode;
  type: NodeTypes;
  title: string;
  output?: boolean;
  inputs?: string[];
};

export const createNodeCardTitle = (props: NodeProps, title: string) =>
  `#${props.id} ${props.data.label ?? title}`;
