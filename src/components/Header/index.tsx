import { HeaderBar, Links, Items } from './styles'
import headerBackground from '../../assets/header.png'
import logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom'
const Header = () => (
  <HeaderBar style={{ backgroundImage: `url(${headerBackground})` }}>
    <div className="container">
      <nav>
        <Links>
          <Items>
            <Link to="/"> Restaurantes</Link>
          </Items>
          <Items>
            <a href="#">
              <img src={logo} alt="Efood" />
            </a>
          </Items>
          <Items>
            <a href="#">0 produto(s) no carrinho</a>
          </Items>
        </Links>
      </nav>
    </div>
  </HeaderBar>
)
export default Header
