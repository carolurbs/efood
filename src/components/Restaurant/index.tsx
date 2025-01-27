import * as S from './style'
import Star from '../Star'
import { TagContainer } from '../Tag/styles'
import Button from '../Button'
export type Props = {
  title: string
  description: string
  featured?: boolean
  category: string
  image: string
  rating: number
  id: number
}

const Restaurant = ({
  title,
  description,
  featured,
  category,
  image,
  rating,
  id
}: Props) => {
  const getDescription = (descricao: string) => {
    if (descricao.length > 86) {
      return descricao.slice(0, 83) + '...'
    }
    return descricao
  }
  return (
    <S.Card>
      <img src={image} alt={title} />
      <S.Infos>
        {featured && (
          <>
            <TagContainer>Destaque da Semana</TagContainer>
          </>
        )}
        <TagContainer>{category}</TagContainer>
      </S.Infos>
      <S.Content>
        <S.TitleContainer>
          <h3>{title}</h3>
          <Star>{rating}</Star>
        </S.TitleContainer>
        <S.Description>{getDescription(description)}</S.Description>
        <Button to={`profile/${id}`} type={'link'} title={'Saiba Mais'}>
          {'Saiba Mais'}
        </Button>
      </S.Content>
    </S.Card>
  )
}

export default Restaurant
