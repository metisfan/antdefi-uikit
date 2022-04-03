import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#E84142",
  primaryBright: "#E84142",
  primaryDark: "#E84142",
  secondary: "#949cc4",
  success: "#31D0AA",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#E84142",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#FAF9FA",
  backgroundDisabled: "#E9EAEB",
  contrast: "#191326",
  invertedContrast: "#FFFFFF",
  input: "#eeeaf4",
  tertiary: "#EFF4F5",
  text: "#452A7A",
  textDisabled: "#BDC2C4",
  textSubtle: "#8f80ba",
  borderColor: "#E9EAEB",
  card: "#FFFFFF",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#949cc4",
  background: "#482218",
  backgroundDisabled: "#27262c",
  contrast: "#1e293b",
  invertedContrast: "#191326",
  input: "#14213d",
  primaryDark: "#0098A1",
  tertiary: "#353547",
  text: "#EAE2FC",
  textDisabled: "#666171",
  textSubtle: "#c9c4d4",
  borderColor: "#000000",
  card: "#482218",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};
