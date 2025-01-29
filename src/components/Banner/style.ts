import styled from 'styled-components'
import { colors } from '../../styles'

export const Imagem = styled.div`
  background-size: 100%;
  background-repeat: no-repeat;
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
      margin-left: 256px;
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
  padding-top: 144px;
`
