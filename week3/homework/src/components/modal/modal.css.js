import { style } from "@vanilla-extract/css";

import { color } from "@styles/token/color.css";

export const background = style({
  position: "fixed",
  top: 0,
  left: 0,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minWidth: "100vw",
  minHeight: "100vh",
  backgroundColor: "rgba(0, 0, 0, 0.4)",
  zIndex: 1,
});

export const modalContainer = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "1rem",
  width: "35rem",
  padding: "2rem",
  backgroundColor: color.blue300,
  borderRadius: "10px",
});

export const title = style({
  fontSize: "1.8rem",
  fontWeight: "800",
  color: color.blue600,
});

export const description = style({
  fontSize: "1.2rem",
  color: color.blue600,
});

export const timeInfo = style({
  fontSize: "1.4rem",
  fontWeight: "800",
  color: color.blue500,
});
