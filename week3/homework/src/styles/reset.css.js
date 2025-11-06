import { globalStyle } from "@vanilla-extract/css";

/*
1. Prevent padding and border from affecting element width.
2. Allow adding a border by just setting border-width.
*/
globalStyle("*", {
  boxSizing: "border-box" /* 1 */,
  borderWidth: "0" /* 2 */,
  borderStyle: "solid" /* 2 */,
  borderColor: "currentColor" /* 2 */,
});

globalStyle("::before, ::after", {
  boxSizing: "inherit" /* 1 */,
  borderWidth: "0" /* 2 */,
  borderStyle: "solid" /* 2 */,
  borderColor: "currentColor" /* 2 */,
  // content: '""',
});

/*
1. Sensible line-height.
2. Prevent iOS text size adjust.
3. Readable tab size.
4~6. Use user's configured sans settings.
7. Disable iOS tap highlight.
*/
globalStyle("html, :host", {
  lineHeight: "1.5" /* 1 */,
  WebkitTextSizeAdjust: "100%" /* 2 */,
  tabSize: "4" /* 3 */,
  fontFamily: "Pretendard, system-ui, sans-serif" /* 4 */,
  fontFeatureSettings: "normal" /* 5 */,
  fontVariationSettings: "normal" /* 6 */,
  WebkitTapHighlightColor: "transparent" /* 7 */,
});

globalStyle("html, body", {
  margin: "0",
  padding: "0",
  fontSize: "62.5%",
  scrollBehavior: "smooth",
});

/*
1. Add the correct height in Firefox.
2. Correct border color inheritance in Firefox.
3. Ensure HR is visible by default.
*/
globalStyle("hr", {
  height: "0" /* 1 */,
  color: "inherit" /* 2 */,
  borderTopWidth: "1px" /* 3 */,
});

/* Add the correct text decoration in Chromium/Safari/Edge. */
globalStyle("abbr:where([title])", {
  textDecoration: "underline dotted",
});

/* Remove default heading size/weight for opt-in styling. */
globalStyle("h1, h2, h3, h4, h5, h6", {
  fontSize: "inherit",
  fontWeight: "inherit",
});

/* Reset link styles for opt-in styling. */
globalStyle("a", {
  color: "inherit",
  textDecoration: "inherit",
});

/* Add the correct font weight in Edge/Safari. */
globalStyle("b, strong", {
  fontWeight: "bolder",
});

globalStyle("p", { margin: "0" });

/*
1~3. Mono font defaults and sizing.
*/
/*
Add the correct font size in all browsers.
*/
globalStyle("small", {
  fontSize: "80%",
});
/* Prevent sub/sup from affecting line-height. */
globalStyle("sub, sup", {
  fontSize: "75%",
  lineHeight: "0",
  position: "relative",
  verticalAlign: "baseline",
});
globalStyle("sub", {
  bottom: "-0.25em",
});

globalStyle("sup", {
  top: "-0.5em",
});

/*
1. Remove text indent in Chrome/Safari.
2. Inherit table border color.
3. Remove gaps between borders.
*/
globalStyle("table", {
  textIndent: "0" /* 1 */,
  borderColor: "inherit" /* 2 */,
  borderCollapse: "collapse" /* 3 */,
});

/*
1. Change font styles in all browsers.
2. Remove margin in Firefox/Safari.
3. Remove default padding in all browsers.
*/
globalStyle("button, input, optgroup, select, textarea", {
  fontFamily: "inherit" /* 1 */,
  fontFeatureSettings: "inherit" /* 1 */,
  fontVariationSettings: "inherit" /* 1 */,
  fontSize: "100%" /* 1 */,
  fontWeight: "inherit" /* 1 */,
  lineHeight: "inherit" /* 1 */,
  letterSpacing: "inherit" /* 1 */,
  color: "inherit" /* 1 */,
  margin: "0" /* 2 */,
  padding: "0" /* 3 */,
});

/* Remove text-transform inheritance quirks. */
globalStyle("button, select", {
  textTransform: "none",
});

/*
1. Correct clickable types on iOS/Safari.
2. Remove default button styles.
*/
globalStyle(
  'button, input:where([type="button"]), input:where([type="reset"]), input:where([type="submit"])',
  {
    WebkitAppearance: "button" /* 1 */,
    backgroundColor: "transparent" /* 2 */,
    backgroundImage: "none" /* 2 */,
  },
);

/*
Use the modern Firefox focus style for all focusable elements.
*/
globalStyle(":-moz-focusring", {
  outline: "auto",
});

/*
Remove the additional `:invalid` styles in Firefox.
*/
globalStyle(":-moz-ui-invalid", {
  boxShadow: "none",
});

/*
Add the correct vertical alignment in Chrome and Firefox.
*/
globalStyle("progress", {
  verticalAlign: "baseline",
});

/*
Correct the cursor style of increment and decrement buttons in Safari.
*/
globalStyle("::-webkit-inner-spin-button, ::-webkit-outer-spin-button", {
  height: "auto",
});

/*
1. Correct the odd appearance in Chrome and Safari.
2. Correct the outline style in Safari.
*/
globalStyle('[type="search"]', {
  WebkitAppearance: "textfield" /*1 */,
  outlineOffset: "-2px" /*2 */,
});

/*
Remove the inner padding in Chrome and Safari on macOS.
*/
globalStyle("::-webkit-search-decoration", {
  WebkitAppearance: "none",
});

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Change font properties to `inherit` in Safari.
*/
globalStyle("::-webkit-file-upload-button", {
  WebkitAppearance: "button" /*1 */,
  font: "inherit" /*2 */,
});

/*
Add the correct display in Chrome and Safari.
*/
globalStyle("summary", {
  display: "list-item",
});

/*
Removes the default spacing and border for appropriate elements.
*/
globalStyle("fieldset", {
  margin: "0",
  padding: "0",
});

globalStyle("legend", {
  padding: "0",
});

globalStyle("ol, ul, menu", {
  listStyle: "none",
  margin: "0",
  padding: "0",
});

/*
Reset default styling for dialogs.
*/
globalStyle("dialog", {
  padding: "0",
});

/*
Prevent resizing textareas horizontally by default.
*/
globalStyle("textarea", {
  resize: "vertical",
});

/*
1. Reset the default placeholder opacity in Firefox.
2. Set the default placeholder color to the user's configured gray 400 color.
*/
globalStyle("input::placeholder, textarea::placeholder", {
  opacity: "1" /*1 */,
  color: "#9ca3af" /*2 */,
});

/*
Set the default cursor for buttons.
*/
globalStyle('button, [role="button"]', {
  cursor: "pointer",
});

/*
Make sure disabled buttons don't get the pointer cursor.
*/
globalStyle(":disabled", {
  cursor: "default",
});

/*
1. Make replaced elements `display: block` by default.
2. Add `vertical-align: middle` to align replaced elements more sensibly by default.
*/
globalStyle("img, svg, video, canvas, audio, iframe, embed, object", {
  display: "block" /*1 */,
  verticalAlign: "middle" /*2 */,
});

/*
Constrain images and videos to the parent width and preserve their intrinsic aspect ratio.
*/
globalStyle("img, video", {
  maxWidth: "100%",
  height: "auto",
});

/*
Make elements with the HTML hidden attribute stay hidden by default.
*/
globalStyle('[hidden]:where(:not([hidden="until-found"]))', {
  display: "none",
});

/* Remove default margin and padding */
globalStyle(
  "html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video",
  {
    margin: 0,
    padding: 0,
    verticalAlign: "baseline",
  },
);
