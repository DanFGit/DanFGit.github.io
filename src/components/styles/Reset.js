import { css, createGlobalStyle } from 'styled-components'

export const reset = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Raleway, sans-serif;
    font-size: 1em;
    font-weight: 200;
  }

  li {
    list-style-position: inside;
  }
`

const Reset = createGlobalStyle`${reset}`

export default Reset
