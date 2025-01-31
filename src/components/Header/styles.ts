import styled from 'styled-components'
import { colors } from '../../styles'

export const HeaderBar = styled.header`
  width: 100vw;
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
  padding: 80px 172px;
`
export const Items = styled.li`
  margin-right: 192px;
  a {
    color: ${colors.salmon};
    cursor:pointer;
    img{
    display:flex;
    margin-left:144px;
    }

`
