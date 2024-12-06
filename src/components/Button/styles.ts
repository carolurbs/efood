import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { colors } from '../../styles'
export const ButtonContainer = styled.button`
  background-color: ${colors.salmon};
  color: ${colors.white};
  font-size: 16px;
  font-weight: 700;
  tex-align: center;
  display: inline-block;
  padding: 4px 6px;
  line-height: 16px;
  text-decoration: none;
`
export const ButtonLink = styled(Link)`
  background-color: ${colors.salmon};
  color: ${colors.white};
  font-size: 16px;
  font-weight: 700;
  tex-align: center;
  display: inline-block;
  padding: 4px 6px;
  line-height: 16px;
  text-decoration: none;
`
