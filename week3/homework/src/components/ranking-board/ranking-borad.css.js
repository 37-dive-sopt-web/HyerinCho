import { style } from "@vanilla-extract/css";

import { color } from "@styles/token/color.css";

export const boardContainer = style({
  width: "100%",
  minHeight: "100vh",
  padding: "2rem",
  borderRadius: "10px",
  backgroundColor: color.blue200,
});

export const titleContainer = style({
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

export const tableAllContainer = style({
  width: "100%",
  marginTop: "2rem",
});

export const tableHeaderContainer = style({
  backgroundColor: color.blue300,
});

export const tableHeader = style({
  padding: "0.5rem 0",
});
