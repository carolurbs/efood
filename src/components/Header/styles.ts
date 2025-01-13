import styled from 'styled-components'
import { colors } from '../../styles'

export const HeaderBar = styled.header`
  width: 2024px;
  height: 184px;
  background-size: cover;
  background-repeat: no-repeat;
`
export const Links = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 900;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  padding: 72px 400px 88px 256px;
`
export const Items = styled.li`
margin-right: 256px;
  a {
    color: ${colors.salmon};
    img{
    display:flex;
    align-items: center;
    }
`
