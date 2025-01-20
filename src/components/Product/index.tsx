import Button from '../Button'
import { Card, Content, Description } from './styles'
export type Props = {
  title: string
  description: string
  image: string
}

const Product = ({ title, description, image }: Props) => (
  <Card>
    <Content>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <Description>{description}</Description>
      <Button type={'button'} title={'Saiba Mais'}>
        {'Saiba Mais'}
      </Button>
    </Content>
  </Card>
)

export default Product
