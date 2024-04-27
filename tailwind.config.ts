import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default <Partial<Config>>{
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'pacific-blue': {
          '50': '#ebffff',
          '100': '#cdfdff',
          '200': '#a1f7ff',
          '300': '#60efff',
          '400': '#18ddf8',
          '500': '#00c0de',
          '600': '#00a0c3',
          '700': '#087996',
          '800': '#10627a',
          '900': '#125167',
          '950': '#053547',
        },
      }
    },
    fontFamily: {
      sans: ["Titillium Web", ...defaultTheme.fontFamily.sans]
    },
  },
  variants: {},
  plugins: [],
  purge: {
    //enable remove unused CSS only in production
    enabled: process.env.NODE_ENV === 'production',
  }
}
