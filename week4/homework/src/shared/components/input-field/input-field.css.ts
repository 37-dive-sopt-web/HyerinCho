import { style } from "@vanilla-extract/css";

import { color } from "@shared/styles/token/color.css";

export const inputContainer = style({
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
  padding: "0 2rem",

  border: `1px solid ${color.gray100}`,
  borderRadius: "8px",
  fontSize: "1.5rem",
  selectors: {
    "&:focus-within": {
      border: `1px solid ${color.blue300}`,
    },
  },
});

export const input = style({
  width: "100%",
  padding: "1.2rem 0",
  outline: "none",
});

export const image = style({
  width: "2.5rem",
  objectFit: "contain",
});
