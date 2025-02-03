import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

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
  @media (max-width: ${breakpoints.desktop}) {
    padding: 80px 120px;
  }
  @media (max-width: ${breakpoints.tablet}) {
    padding: 80px;
    font-size: 12px;
    line-height: 12px;
  }
`
export const Items = styled.li`
  margin-right: 192px;
  @media (max-width: ${breakpoints.desktop}){
  margin-right: 20px;
  }
  @media (max-width: ${breakpoints.tablet}){
  margin-right: 20px;
  }
  a {
    color: ${colors.salmon};
    cursor:pointer;
    img{
    display:flex;
    margin-left:144px;
    @media (max-width: ${breakpoints.desktop}){
  margin-left: 80px;
  }
  @media (max-width: ${breakpoints.tablet}){
  margin-left: 16px;
    max-width:80px;

  }
    }

`
