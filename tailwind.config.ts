import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "300px",
      sm: "640px",
      md: "768px",
      lg: "1080px",
      xl: "1280px",
      ["2xl"]: "1530px",
    },
    extend: {
      colors: {
        "green-primary": "#DCDCDC",
        "green-actived": "#719D96",
        "green-border": "#B0C4DE",
        "green-btn": "#F0E68C",
        "green-title-card": "#719D96",
        "black-title": "#1c1c1c",
        "blue-royal": "#4169E1",
      },
    },
    maxWidth: {
      grid: "77.5rem",
      "text-hero": "66rem",
      "area-icons": "53.4rem",
      "area-mockups": "59.8rem",
      "area-cards": "82.5rem",
    },
    height: {
      "section-hero": "54.6rem",
      "area-cards": "35.1rem",
    },
  },
  plugins: [],
};
export default config;
