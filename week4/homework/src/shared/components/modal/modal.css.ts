import { style } from "@vanilla-extract/css";

import { color } from "@shared/styles/token/color.css";

export const overlay = style({
  position: "fixed",
  width: "100vw",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "rgba(0, 0, 0, 0.35)",
  zIndex: "1",
});

export const modalContainer = style({
  minWidth: "45rem",
  padding: "3rem 4rem",
  borderRadius: "10px",
  backgroundColor: "#f7fbff",
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  textAlign: "center",
});

export const title = style({
  fontSize: "3rem",
  fontWeight: "700",
});

export const content = style({
  fontSize: "1.4rem",
});

export const buttonContainer = style({
  display: "flex",
  justifyContent: "center",
  gap: "2rem",
});

const button = style({
  padding: "1rem 2rem",
  borderRadius: "10px",
  fontSize: "1.2rem",
});

export const cancelButton = style([
  button,
  { border: `1px solid ${color.gray100}` },
]);

export const confirmButton = style([
  button,
  { backgroundColor: color.error, color: color.white },
]);
