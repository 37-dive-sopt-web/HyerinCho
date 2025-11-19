import { style } from "@vanilla-extract/css";

export const usernameContainer = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "2rem",
});

export const inputTitle = style({
  fontSize: "1.4rem",
});

export const username = style({
  fontSize: "1.8rem",
  fontWeight: 600,
});
