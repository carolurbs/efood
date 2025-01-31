import Button from '../Button'
import * as S from './styles'
import pizza from '../../assets/pizza.png'
import trash from '../../assets/lixeira.svg'

const Cart = () => (
  <S.CartContainer>
    <S.Overlay />
    <S.SideBar>
      <ul>
        <S.CartItem>
          <img src={pizza} />
          <div>
            <h3>Nome do Produto</h3>
            <span>Preço</span>
          </div>
          <img className="icon" src={trash} />
        </S.CartItem>
        <S.CartItem>
          <img src={pizza} />
          <div>
            <h3>Nome do Produto</h3>
            <span>Preço</span>
          </div>
          <img className="icon" src={trash} />
        </S.CartItem>{' '}
        <S.CartItem>
          <img src={pizza} />
          <div>
            <h3>Nome do Produto</h3>
            <span>Preço</span>
          </div>
          <img className="icon" src={trash} />
        </S.CartItem>
      </ul>
      <S.Infos>
        <li>Valor Total</li>
        <li>R$ 182,70</li>
      </S.Infos>
      <Button type={'button'} title={'Continuar com a entrega'}>
        Continuar com a entrega
      </Button>
    </S.SideBar>
  </S.CartContainer>
)
export default Cart
