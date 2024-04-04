/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/container-queries"),
  ],

  theme: {
    extend: {
      colors: {
        rod: "#FF1054",
        hoverrod: "#FF5C8B",
        clickrod: "#BE1343",
        gron: "#007C7A",
        hovergron: "#009F9C",
        clickgron: "#006261",
      },
      fontFamily: {},
      backgroundImage: {
        "cleanup-img": "url('/src/assets/images/clean.jpg')",
        gronverden: "url('/src/assets/images/gronverden.jpg')",
      },
    },
  },
};
