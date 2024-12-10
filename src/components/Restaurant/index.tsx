import * as S from './style'
import Star from '../Star'
import { TagContainer } from '../Tag/styles'
import Button from '../Button'
export type Props = {
  title: string
  description: string
  infos: string[]
  image: string
  rating: string
}

const Restaurant = ({ title, description, infos, image, rating }: Props) => (
  <S.Card>
    <img src={image} alt={title} />
    <S.Infos>
      {infos.map((info) => (
        <TagContainer key={info}>{info}</TagContainer>
      ))}
    </S.Infos>
    <S.Content>
      <S.TitleContainer>
        <h3>{title}</h3>
        <Star>{rating}</Star>
      </S.TitleContainer>
      <S.Description>{description}</S.Description>
      <Button type={'link'} title={'Saiba Mais'}>
        {'Saiba Mais'}
      </Button>
    </S.Content>
  </S.Card>
)

export default Restaurant
