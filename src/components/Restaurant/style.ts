import styled from 'styled-components'
import { colors } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Card = styled.div`
  max-width: 436px;
  background-color: ${colors.white};
  border: 1px solid ${colors.salmon};
  position: relative;
  img {
    width: 100%;
  }
  ${TagContainer} {
    margin: 16px 8px;
  }
`
export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
export const Content = styled.div`
  padding: 8px;
`
export const Description = styled.p`
  font-weight: 400;
  line-height: 24px;
  font-size: 16px;
  margin-bottom: 8px;
`
export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
`
