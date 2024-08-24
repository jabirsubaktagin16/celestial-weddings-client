/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          text: "#091b19",
          background: "#ecf8f7",
          primary: "#c24c56",
          secondary: "#eae7c2",
          accent: "#a73942",
          "base-100": "#f8eced",
          "base-200": "#d88d93",
        },
      },
      "cupcake",
    ],
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
};
