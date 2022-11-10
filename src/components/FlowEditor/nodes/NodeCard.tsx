import { createStyles } from "@mantine/core";
import { ReactNode } from "react";

const useStyles = createStyles((theme) => ({
  card: {
    background: "white",
    borderColor: "#666666",
    padding: "1rem",
  },
}));

export const NodeCard = ({ children }: NodeCardProps) => {
  const { classes } = useStyles();
  return <div className={classes.card}>{children}</div>;
};

export type NodeCardProps = {
  children: ReactNode;
};
