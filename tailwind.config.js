module.exports = {
  mode : "jit",
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'lato': ['Lato', 'sans-serif'],
     },
    extend: {
      height: {
        header: '400px',
       },
      backgroundImage: theme => ({
        'hero-pattern': "url('https://i.ibb.co/bXg2QYZ/bannerbackground.png')",
       }),
      colors: {
        transparent: "transparent",
        current: "currentColor",
        blue: {
          light: "#85d7ff",
          DEFAULT: "#1fb6ff",
          dark: "#009eeb",
        },
        pink: {
          light: "#ff7ce5",
          DEFAULT: "#ff49db",
          dark: "#ff16d1",
        },
        gray: {
          darkest: "#1f2d3d",
          dark: "#3c4858",
          DEFAULT: "#c0ccda",
          light: "#e0e6ed",
          lightest: "#f9fafc",
        },
        green: {
          dark: "#009E7F",
        },
      },
    },
   
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
