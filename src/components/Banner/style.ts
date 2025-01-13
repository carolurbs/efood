import styled from 'styled-components'
import { colors } from '../../styles'

export const Imagem = styled.div`
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: block;
  width: 100%;
  height: 280px;
  color: ${colors.white};

  h2 {
    font-size: 32px;
    line-height: 40px;
    margin-left: 256px;
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
