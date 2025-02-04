import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'
import { ButtonContainer } from '../Button/styles'

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 304px;
  height: 100%;
  background-color: ${colors.salmon};
  color: ${colors.vanila};
  img {
    max-height: 148px;
    width: 100%;
    height: 100%;
    margin-bottom: 8px;
    @media (max-width: ${breakpoints.tablet}) {
      max-height: 132px;
    }
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
  padding: 8px 0;
`
