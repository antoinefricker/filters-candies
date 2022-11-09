// Photo by Valeria Boltneva: https://www.pexels.com/photo/photography-of-table-and-chairs-near-plants-827518/

import { AbstractFilter } from "./filters";

export type GraphicSource = AbstractFilter<"source"> & {
  type: "illustration" | "mixed" | "photograph" | "text" | "video";
};
