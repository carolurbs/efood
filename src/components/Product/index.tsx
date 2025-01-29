import Button from '../Button'
import { Card, Content, Description } from './styles'
import { getDescription } from '../Restaurant'
export type Props = {
  id: number
  title: string
  description: string
  image: string
  portion: string
  price: number
  onButtonClick: () => void
}

const Product = ({ title, description, image, onButtonClick }: Props) => (
  <Card>
    <Content>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <Description>{getDescription(description)}</Description>
      <Button type={'button'} title={'Saiba Mais'} onClick={onButtonClick}>
        {'Saiba Mais'}
      </Button>
    </Content>
  </Card>
)

export default Product
