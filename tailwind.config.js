module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      sans: "'Titillium Web', sans-serif",
    },
    colors: {
      white: "#FFFFFF",
      black: "#000000",
      gray: {
        DEFAULT: "#404366",
        "50": "#F1F1F6",
        "100": "#DBDCE8",
        "200": "#AFB2CD",
        "300": "#8387B1",
        "400": "#5C6092",
        "500": "#404366",
        "600": "#323550",
        "700": "#24263A",
        "800": "#171824",
        "900": "#09090E",
      },
      blue: {
        DEFAULT: "#0000FF",
        "50": "#E5E5FF",
        "100": "#CCCCFF",
        "200": "#9999FF",
        "300": "#6666FF",
        "400": "#3333FF",
        "500": "#0000FF",
        "600": "#0000CC",
        "700": "#000099",
        "800": "#000066",
        "900": "#000033",
      },
      purple: {
        DEFAULT: "#7937C4",
        "50": "#F0E8F9",
        "100": "#E3D4F3",
        "200": "#C8ACE8",
        "300": "#AE84DD",
        "400": "#935DD1",
        "500": "#7937C4",
        "600": "#602C9C",
        "700": "#482174",
        "800": "#2F154D",
        "900": "#170A25",
      },
      red: {
        DEFAULT: "#F90000",
        "50": "#FFDFDF",
        "100": "#FFC6C6",
        "200": "#FF9393",
        "300": "#FF6060",
        "400": "#FF2D2D",
        "500": "#F90000",
        "600": "#C60000",
        "700": "#930000",
        "800": "#600000",
        "900": "#2D0000",
      },
      "light-blue": {
        DEFAULT: "#00B4CC",
        "50": "#B3F6FF",
        "100": "#99F3FF",
        "200": "#66EDFF",
        "300": "#33E7FF",
        "400": "#00E1FF",
        "500": "#00B4CC",
        "600": "#008799",
        "700": "#005A66",
        "800": "#002D33",
        "900": "#000000",
      },
      yellow: {
        DEFAULT: "#FFA506",
        "50": "#FFF8EB",
        "100": "#FFEFD2",
        "200": "#FFDC9F",
        "300": "#FFCA6C",
        "400": "#FFB739",
        "500": "#FFA506",
        "600": "#D28600",
        "700": "#9F6600",
        "800": "#6C4500",
        "900": "#392400",
      },
      green: {
        DEFAULT: "#1B771B",
        "50": "#91E691",
        "100": "#7DE17D",
        "200": "#53D853",
        "300": "#2ECA2E",
        "400": "#24A124",
        "500": "#1B771B",
        "600": "#124D12",
        "700": "#082408",
        "800": "#000000",
        "900": "#000000",
      },
    },
  },
  variants: {
    extend: {
      zIndex: ["hover"],
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
