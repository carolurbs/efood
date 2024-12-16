import * as S from './style'
import bannerBackground from '../../assets/banner.png'
const Banner = () => (
  <S.Imagem style={{ backgroundImage: `url(${bannerBackground})` }}>
    <div className="container">
      <S.Culinaria>Italiana</S.Culinaria>
      <S.Título>La Dolce Vita Trattoria</S.Título>
    </div>
  </S.Imagem>
)
export default Banner
