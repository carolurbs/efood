import { createGlobalStyle } from 'styled-components'
export const colors = {
  salmon: '#E66767',
  cream: '#FFF8F1',
  white: '#fff',
  vanila: '#FFEBD9'
}
export const breakpoints = {
  desktop: '1024px',
  tablet: '768px'
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
  overflow-x:hidden;
background-color: ${colors.cream};
color: ${colors.salmon};
.container{
max-width: 2024px;
width: 100%
margin: 0 auto;
@media(max-width:${breakpoints.desktop}){
max-width:80%;
}
}
}
`

export default EstiloGlobal
