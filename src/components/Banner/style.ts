import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const Imagem = styled.div`
  width: 100%;
  min-height: 360px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  align-items: flex-end;
  color: ${colors.white};
  position: relative;
  overflow: hidden;

  .container {
    z-index: 1;
    position: relative;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 48px 24px;

    h2 {
      font-size: 32px;
      line-height: 40px;
      margin: 0;
      @media (max-width: ${breakpoints.desktop}) {
        font-size: 28px;
      }
      @media (max-width: ${breakpoints.tablet}) {
        font-size: 24px;
        line-height: 32px;
      }
    }
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.5);
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
  @media (max-width: ${breakpoints.tablet}) {
    padding: 96px 0 8px;
  }
`
