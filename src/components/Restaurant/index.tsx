import Star from '../Star'
import { TagContainer } from '../Tag/styles'
import sushi from '../../assets/Sushi.png'
import Button from '../Button'
export type Props = {
  featured?: boolean
}

const Restaurant = ({ featured }: Props) => {
  if (featured === true) {
    return (
      <div>
        <img src={sushi} />
        <h3>Sushi</h3>
        <Star>4.9</Star>
        <TagContainer>Destaque da Semana</TagContainer>
        <TagContainer>Japonesa</TagContainer>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae
          laboriosam perspiciatis, dolorem explicabo voluptatibus dicta corporis
          nesciunt odio sit? Quidem ea officia rem non mollitia eveniet qui odio
          veniam sunt.
        </p>
        <Button type={'link'} title={'Saiba Mais'}>
          {'Saiba Mais'}
        </Button>
      </div>
    )
  }
  return (
    <div>
      <img src={sushi} />
      <h3>Sushi</h3>
      <Star>4.9</Star>
      <TagContainer>Japonesa</TagContainer>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae
        laboriosam perspiciatis, dolorem explicabo voluptatibus dicta corporis
        nesciunt odio sit? Quidem ea officia rem non mollitia eveniet qui odio
        veniam sunt.
      </p>
      <Button type={'link'} title={'Saiba Mais'}>
        {'Saiba Mais'}
      </Button>
    </div>
  )
}

export default Restaurant
