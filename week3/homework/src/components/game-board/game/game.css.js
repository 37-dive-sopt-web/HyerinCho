import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { color } from "@styles/token/color.css";

export const gameContainer = style({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  width: "100%",
});

export const gameTitleContainer = style({
  display: "flex",
  justifyContent: "space-between",
});

export const gameTitle = style({
  fontSize: "1.8rem",
  fontWeight: "700",
  color: color.blue600,
});

export const button = style({
  backgroundColor: color.red100,
  color: color.white,
  fontWeight: "500",
  borderRadius: "15px",
  padding: "0.5rem 1rem",
});

export const cardContainer = recipe({
  base: {
    display: "grid",
    gap: "1rem",
  },
  variants: {
    level: {
      1: { gridTemplateColumns: "repeat(4, 1fr)" },
      2: { gridTemplateColumns: "repeat(4, 1fr)" },
      3: { gridTemplateColumns: "repeat(6, 1fr)" },
    },
  },
});
