import { ReactNode } from "react";
import "./NodeCard.css";

export const NodeCard = ({ children }: NodeCardProps) => {
  return <div className="nodecard">{children}</div>;
};

export type NodeCardProps = {
  children: ReactNode;
};
