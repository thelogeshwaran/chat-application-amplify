module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      minHeight: {
        '0': '0',
        '1/10' : "8%",
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        'full': '100%',
       },
      colors:{
        chatGray: "#ECE5DD",
        chatWhite : "#ffffff",
        chatLightGray:"#D1D5DB",
        chatGreen:"#128C7E",
        messageGreen:"#DCF8C6",
        messageDarkGreen: "#128C7E"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
