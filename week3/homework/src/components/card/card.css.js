import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { color } from "src/styles/token/color.css";

export const cardContainer = style({
  position: "relative",
  width: "100%",
  aspectRatio: "1 / 1",
  minWidth: "7rem",
  minHeight: "7rem",
  perspective: "800px",
  cursor: "pointer",
});

export const card = recipe({
  base: {
    position: "relative",
    width: "100%",
    height: "100%",
    transformStyle: "preserve-3d",
    transition: "transform 0.6s cubic-bezier(0.4, 0.2, 0.2, 1)",
  },
  variants: {
    cardState: {
      before: { transform: "rotateY(0deg)" },
      progress: { transform: "rotateY(180deg)" },
      success: { transform: "rotateY(180deg)" },
    },
  },
  defaultVariants: {
    cardState: "before",
  },
});

const faceBase = style({
  position: "absolute",
  inset: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: 900,
  fontSize: "2rem",
  borderRadius: "8px",
  backfaceVisibility: "hidden",
  transition: "all 0.3s ease",
});

export const cardFront = style([
  faceBase,
  {
    backgroundColor: color.blue400,
    color: color.white,
  },
]);

export const cardBack = recipe({
  base: [
    faceBase,
    {
      transform: "rotateY(180deg)",
    },
  ],
  variants: {
    cardState: {
      progress: {
        backgroundColor: "transparent",
        border: `1px solid ${color.gray100}`,
        color: color.blue600,
      },
      success: {
        backgroundColor: color.blue500,
        color: color.white,
      },
    },
  },
  defaultVariants: {
    cardState: "progress",
  },
});
