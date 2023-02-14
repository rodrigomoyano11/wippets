import css from 'styled-jsx/css'

const rootStyles = css``

const rootGlobalStyles = css.global`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell,
      Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  * {
    box-sizing: border-box;
  }
`

export { rootStyles, rootGlobalStyles }
