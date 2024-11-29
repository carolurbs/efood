import { HeaderBar } from './styles'
import headerBackground from '../../assets/header.png'
import logo from '../../assets/logo.svg'
const Header = () => (
  <HeaderBar style={{ backgroundImage: `url(${headerBackground})` }}>
    <nav>
      <ul>
        <li>
          <a href="#"> Restaurantes</a>
        </li>
        <li>
          <a href="#">
            <img src={logo} alt="Efood" />
          </a>
        </li>
        <li>
          <a href="#">0 produto(s) no carrinho</a>
        </li>
      </ul>
    </nav>
  </HeaderBar>
)
export default Header
