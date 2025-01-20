import star from '../../assets/estrela.svg'
import { StarContainer } from './styles'
type Props = {
  children: number
}
const Star = ({ children }: Props) => (
  <StarContainer>
    {children}
    <span>
      <img src={star} alt="Estrela" />
    </span>
  </StarContainer>
)
export default Star
