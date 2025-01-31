import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { open } from '../../store/reducers/cart'
import { HeaderBar, Links, Items } from './styles'
import headerBackground from '../../assets/header.png'
import logo from '../../assets/logo.svg'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'
const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)
  const openCart = () => {
    dispatch(open())
  }
  return (
    <HeaderBar style={{ backgroundImage: `url(${headerBackground})` }}>
      <div className="container">
        <nav>
          <Links>
            <Items>
              <Link to="/"> Restaurantes</Link>
            </Items>
            <Items>
              <a href="/">
                <img src={logo} alt="Efood" />
              </a>
            </Items>
            <Items>
              <a onClick={openCart}>{items.length} produto(s) no carrinho</a>
            </Items>
          </Links>
        </nav>
      </div>
    </HeaderBar>
  )
}
export default Header
