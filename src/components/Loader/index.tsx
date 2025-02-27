import { CircleLoader } from 'react-spinners'
import { Container } from './style'
export type Props = {
  color: string
}
const Loader = ({ color }: Props) => {
  return (
    <Container>
      <CircleLoader color={color} />
    </Container>
  )
}
export default Loader
