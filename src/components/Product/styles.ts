import styled from 'styled-components'
import { colors } from '../../styles'
import { ButtonContainer } from '../Button/styles'

export const Card = styled.div`
  max-width: 320px;
  background-color: ${colors.salmon};
  color: ${colors.vanila};
  img {
    width: 100%;
    margin-bottom: 8px;
  }
`
export const Content = styled.div`
  padding: 8px;
  ${ButtonContainer} {
    background-color: ${colors.vanila};
    color: ${colors.salmon};
    border: none;
    width: 100%;
    display: block;
  }
`
export const Description = styled.p`
  font-weight: 400;
  line-height: 24px;
  font-size: 16px;
  margin: 8px 0;
`
