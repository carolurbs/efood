import * as S from './styles'
import logo from '../../assets/logo.svg'
import twiiter from '../../assets/twitter.svg'
import facebook from '../../assets/facebook.svg'
import instagram from '../../assets/instagram.svg'

const Footer = () => (
  <S.FooterBar>
    <div className="container">
      <img src={logo} alt="Efood" />
      <nav>
        <S.Links>
          <li>
            <a href="#">
              <img src={instagram} alt="Instagram" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={facebook} alt="Facebook" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={twiiter} alt="Twitter" />
            </a>
          </li>
        </S.Links>
      </nav>
    </div>
    <S.Disclaimer>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.{' '}
    </S.Disclaimer>
  </S.FooterBar>
)
export default Footer
