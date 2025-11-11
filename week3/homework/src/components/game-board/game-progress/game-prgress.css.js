import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { color } from "src/styles/token/color.css";

export const gameProgressContainer = style({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  width: "100%",
  padding: "1rem",
  backgroundColor: color.blue300,
  borderRadius: "14px",
});

export const levelSelect = style({
  padding: "0.5rem",
  width: "100%",
  backgroundColor: color.blue200,
  borderRadius: "8px",
  cursor: "pointer",
});

export const recentProgressContainer = style({
  display: "flex",
  gap: "1rem",
});

export const recentProgress = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "0.5rem",
  padding: "1rem",
  width: "100%",
  backgroundColor: color.blue200,
  borderRadius: "8px",
});

export const recentProgressNumber = style({
  fontSize: "1.5rem",
  fontWeight: "900",
  color: color.blue600,
});

export const title = style({
  color: color.blue600,
  fontWeight: "700",
  fontSize: "1.2rem",
});

export const descriptionContainer = style({
  padding: "1.4rem 0.5rem",
  backgroundColor: color.blue200,
  borderRadius: "8px",
});

export const description = style({
  color: color.blue600,
  fontWeight: "600",
  fontSize: "1.1rem",
});

export const currentHistoryContainer = recipe({
  variants: {
    history: {
      true: {
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem",
      },
      false: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      },
    },
  },
});

export const historyInfoText = style({
  color: color.blue600,
});
