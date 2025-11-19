import { style } from "@vanilla-extract/css";

import { color } from "@shared/styles/token/color.css";

export const headerContainer = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  height: "10rem",
  backgroundColor: color.blue200,
  padding: "0 8rem",
});

export const leftContainer = style({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
});

export const title = style({
  fontSize: "2rem",
  fontWeight: "600",
  color: color.white,
});

export const helloInfo = style({
  color: color.white,
  fontSize: "1.2rem",
});

export const rightContainer = style({
  display: "flex",
  gap: "0.8rem",
  fontSize: "1.4rem",
  fontWeight: "500",
  color: color.white,
});
