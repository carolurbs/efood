import { Imagem } from './style'
import bannerBackground from '../../assets/banner.png'
const Banner = () => (
  <Imagem style={{ backgroundImage: `url(${bannerBackground})` }}></Imagem>
)
export default Banner
