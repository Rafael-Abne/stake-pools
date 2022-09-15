import { createGlobalStyle } from 'styled-components'
// eslint-disable-next-line import/no-unresolved
import { PancakeTheme } from '@pancakeswap/uikit/dist/theme'

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends PancakeTheme {}
}

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Kanit', sans-serif;
  }
  body {
    background-color: ${({ theme }) => theme.colors.background};

    img {
      height: auto;
      max-width: 100%;
    }
    nav, nav ~ div > div{
      background-color: rgb(14, 74, 17) !important;
    }

    @media screen and (min-width: 968px){
    .hQKWmK .desktop-icon {
      display: block;
      display: none;
    }

    .hQKWmK .mobile-icon{
      display: none !important;
    }
  
`

export default GlobalStyle
