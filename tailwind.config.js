/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#19264F",
        secondary: "#0B142F",
        tertiary: "#52A5B0",
        paragraph: "#E6E6E6",
      },
    },
  },
  plugins: [],
};
