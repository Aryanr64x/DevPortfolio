module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
     colors:{
       primary: '#001427',
       secondary: '#F4D58D',
       tertiary: '#81D2C7',
       white: '#ffffff',
       black: "#000000",
     },
      fontFamily:{
        sourceCodePro: ['Source Code Pro', 'monospace']
      }
    },
  },
  plugins: [],
}