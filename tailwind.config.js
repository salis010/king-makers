module.exports = {
  mode: 'jit',
  purge: [
    './src/**/*.{js,tsx}'
  ],
  content: [],
  theme: {
    colors: {
      primary: {
        200: '#a40537'
      },
      secondary: {
        200: '#00122e'
      },
      grey: {
        0: 'rgba(0, 0, 0, 0)',
        50: 'rgb(255, 255, 255)',
        100: 'rgb(235, 235, 235)',
        200: 'rgb(75, 75, 75)',
        900: 'rgb(0, 0, 0)'
      },
      alert: {
        100: 'rgb(200, 10, 10)'
      }
    },
    extend: {
      keyframes: {
        searchBox: {
          from: {
            width: '0rem'
          },
          to: {
            width: '30rem'
          }
        }
      },
      animation: {
        searchBox: 'searchBox 0.5s',
        notification: 'notification 0.5s'
      }
    }
  },
  plugins: []
}