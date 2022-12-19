import { Input } from "@mantine/core";

export const FilterAreaForm = () => {
  return (
    <>
      <Input type="number" name="x" />
      <Input type="number" name="y" />
      <Input type="number" name="width" />
      <Input type="number" name="height" />
    </>
  );
};
