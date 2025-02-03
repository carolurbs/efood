import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const Imagem = styled.div`
  background-size: 100vw;
  background-repeat: no-repeat;
  background-position: center;
  width: 100vw;
  height: 100%;
  display: block;
  color: ${colors.white};
  position: relative;
  .container {
    z-index: 1;
    position: relative;
    h2 {
      font-size: 32px;
      line-height: 40px;
      margin-left: 172px;
      @media (max-width: ${breakpoints.desktop}) {
        margin-left: 120px;
      }
      @media (max-width: ${breakpoints.tablet}) {
        font-size: 24px;
        line-height: 24px;
        margin-left: 80px;
      }
    }
  }
  &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    content: '';
    z-index: 0;
  }
`
export const Culinaria = styled.h2`
  font-weight: 100;
  padding-top: 32px;
`

export const Título = styled.h2`
  font-weight: 900;
  padding: 144px 0 8px;
`
