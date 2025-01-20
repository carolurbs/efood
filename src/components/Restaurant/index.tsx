import * as S from './style'
import Star from '../Star'
import { TagContainer } from '../Tag/styles'
import Button from '../Button'
export type Props = {
  title: string
  description: string
  featured?: boolean
  special?: string
  category: string
  image: string
  rating: number
}

const Restaurant = ({
  title,
  description,
  featured,
  special,
  category,
  image,
  rating
}: Props) => (
  <S.Card>
    <img src={image} alt={title} />
    <S.Infos>
      {featured ? (
        <>
          <TagContainer>{special}</TagContainer>
          <TagContainer>{category}</TagContainer>
        </>
      ) : (
        <TagContainer>{category}</TagContainer>
      )}
    </S.Infos>
    <S.Content>
      <S.TitleContainer>
        <h3>{title}</h3>
        <Star>{rating}</Star>
      </S.TitleContainer>
      <S.Description>{description}</S.Description>
      <Button to={'/profile'} type={'link'} title={'Saiba Mais'}>
        {'Saiba Mais'}
      </Button>
    </S.Content>
  </S.Card>
)

export default Restaurant
