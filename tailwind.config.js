module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      minHeight: {
        '0': '0',
        '1/8' : "8%",
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        'full': '100%',
       },
      colors:{
        chatGray: "#5E637A",
        chatWhite : "#ffffff",
        chatLightGray:"#D1D5DB",
        chatPurple:"#212443",
        chatPurpleDark:"#252849",
        chatBlue:"#406AE0",
        chatPurpleLight:"#524A7A"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
}
