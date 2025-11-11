import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { color } from "src/styles/token/color.css";

export const headerContainer = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "2rem",
  borderRadius: "10px",
  backgroundColor: color.blue200,
});

export const title = style({
  fontSize: "2rem",
  color: color.blue500,
  fontWeight: "700",
});

export const buttonContainer = style({
  display: "flex",
  gap: "1rem",
});

export const button = recipe({
  base: {
    padding: "0.5rem 1rem",
    borderRadius: "8px",
    fontSize: "1.2rem",
  },
  variants: {
    active: {
      true: {
        backgroundColor: color.blue400,
        color: color.white,
      },
      false: {
        backgroundColor: color.blue200,
        color: color.blue600,
      },
    },
  },
});
