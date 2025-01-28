import Button from '../Button'
import { Card, Content, Description } from './styles'
export type Props = {
  id: number
  title: string
  description: string
  image: string
  porcao?: string
  preco?: number
  onButtonClick: () => void
}

const Product = ({ title, description, image, onButtonClick }: Props) => (
  <Card>
    <Content>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <Description>{description}</Description>
      <Button type={'button'} title={'Saiba Mais'} onClick={onButtonClick}>
        {'Saiba Mais'}
      </Button>
    </Content>
  </Card>
)

export default Product
