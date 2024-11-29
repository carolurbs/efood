import { createGlobalStyle } from 'styled-components'
export const colors = {
  salmon: '#E66767',
  cream: '#FFF8F1',
  white: '#fff'
}
const EstiloGlobal = createGlobalStyle`

*{
margin:0;
padding:0;
box-sizing: border-box;
font-family: Roboto, sans-serif;
list-style: none;
text-decoration:none;
}
body{
background-color: ${colors.cream};
color: ${colors.salmon};

}
`

export default EstiloGlobal
