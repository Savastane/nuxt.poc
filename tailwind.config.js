module.exports = {
  mode: "jit",
  purge: [
    
    
    "./assets/**/*.{css}",
    "./components/*.{vue,js}",
    "./components/**/*.{vue,js}",
    "./pages/*.vue",
    "./layouts/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./*.{vue,js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin'),
    
    // require('tw-elements/dist/plugin')
  ],
  content: [
    
    "./node_modules/flowbite.{js,ts}",
    './src/**/*.{html,js}', 
    // './node_modules/tw-elements/dist/js/**/*.js'
  ],
};