import styled from 'styled-components'

export const HeroBar = styled.header`
  width: 100vw;
  height: 384px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 900;
  font-size: 32px;
  line-height: 40px;
  text-align: center;
  background-size: cover;
  background-repeat: no-repeat;

  li {
    margin: 40px 0;
    max-width: 32ch;
    img {
      margin-bottom: 120px;
    }
  }
`
