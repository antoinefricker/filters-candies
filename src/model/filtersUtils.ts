export type ChannelSelector = "R" | "G" | "B" | "A";

type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;
export type Color = RGB | RGBA | HEX;

export type SourceUuid = string | "SourceGraphic" | "SourceAlpha";

export type MorphologyOperator = "erode" | "dilate";

export type EdgeMode = "duplicate" | "wrap" | "none";

export type BlendMode =
  | "normal"
  | "multiply"
  | "screen"
  | "overlay"
  | "darken"
  | "lighten"
  | "color-dodge"
  | "color-burn"
  | "hard-light"
  | "soft-light"
  | "difference"
  | "exclusion"
  | "hue"
  | "saturation"
  | "color"
  | "luminosity";

export type Matrix9 = [
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number
];

export type Transfer =
  | IdendityTransfer
  | TableTransfer
  | LinearTransfer
  | GammaTransfer;

export type IdendityTransfer = {};

export type TableTransfer = { tableValues: string };

export type LinearTransfer = {
  slope: number;
  intercept: number;
};

export type GammaTransfer = {
  exponent: number;
  amplicitude: number;
  offset: number;
};
