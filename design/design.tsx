export const pxToRem = (px: number) => {
  const rootValue = 16;
  const rem = (1 / rootValue) * px + "rem";
  return rem;
};

export const color = {
  brand: "#009b86",
  brandHover: "#34ac9c",
  body: "#fff",
  logo: "#0d2436",
  pageBackground: "#0d2436",
  pageBackgroundAlternative: "#0b2a41",
  white: {
    100: "#fff",
  },
  grey: {
    100: "#e8e7ec",
    200: "#cccccc",
    300: "#76848f",
    900: "#1f1f1f",
  },
  red: {
    100: "#fdeded",
    200: "#f38280",
  },
  button: {
    primary: "#009b86",
    secondary: "#0d2436",
  },
};

export const gradient = {
  purple: `linear-gradient(87.29deg,#009b86 17.71%,#552586 80.85%)`,
};

export const fontFamily = {
  brand: "'Roboto', sans-serif",
};

export const fontWeight = {
  light: "300",
  normal: "400",
  bold: "700",
};

export const breakpoint = {
  xxxs: { min: 375 },
  xxs: { min: 425 },
  xs: { min: 599 },
  sm: { min: 768 },
  md: { min: 1024 },
  lg: { min: 1440 },
};

export const mediaQuery = {
  xxxs: `@media screen and (min-width: ${breakpoint.xxxs.min}px)`,
  xxs: `@media screen and (min-width: ${breakpoint.xxs.min}px)`,
  xs: `@media screen and (min-width: ${breakpoint.xs.min}px)`,
  sm: `@media screen and (min-width: ${breakpoint.sm.min}px)`,
  md: `@media screen and (min-width: ${breakpoint.md.min}px)`,
  lg: `@media screen and (min-width: ${breakpoint.lg.min}px)`,
};

export const layout = {
  regular: "1200px",
};

export const shadow = {
  card: `0 1px 1px hsl(0deg 0% 0% / 0.075),
  0 2px 2px hsl(0deg 0% 0% / 0.075),
  0 4px 4px hsl(0deg 0% 0% / 0.075),
  0 8px 8px hsl(0deg 0% 0% / 0.075),
  0 16px 16px hsl(0deg 0% 0% / 0.075)`,
  cardHover: `0 1px 1px hsl(0deg 0% 0% / 0.095),
  0 2px 2px hsl(0deg 0% 0% / 0.095),
  0 4px 4px hsl(0deg 0% 0% / 0.095),
  0 8px 8px hsl(0deg 0% 0% / 0.095),
  0 16px 16px hsl(0deg 0% 0% / 0.095)`,
  button: `0px 8px 15px rgb(0 0 0 / 35%);`,
  buttonHover: `0px 8px 15px rgb(0 0 0 / 40%);`,
};
