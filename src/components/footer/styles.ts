import styled from 'styled-components'
import { colors } from '../../styles'

export const FooterBar = styled.footer`
  width: 2024px;
  height: 296px;
  background-color: ${colors.vanila};
  display: flex;
  flex-direction: column;
  align-items: center;
  div {
    margin-top: 36px;
    padding-right: 176px;
  }
`
export const Links = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 32px 20px;
`

export const Disclaimer = styled.p`
  font-size: 10px;
  font-weight: 400;
  text-align: center;
  max-width: 560px;
  display: inline;
  margin-top: 40px;
  padding-right: 176px;
`
