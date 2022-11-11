import { createStyles } from "@mantine/core";
import { ReactNode } from "react";
import { IconGridDots } from "@tabler/icons";

const useStyles = createStyles((theme) => ({
  card: {
    background: "white",
    borderStyle: "solid",
    borderColor: "#aaaaaa",
    padding: "1rem",
  },
}));

export const NodeCard = ({ children }: NodeCardProps) => {
  const { classes } = useStyles();
  return (
    <div className={classes.card}>
      <div className="drag-handle" style={{ border: "red 1px solid" }}>
        <IconGridDots />
      </div>
      {children}
    </div>
  );
};

export type NodeCardProps = {
  children: ReactNode;
};
