import Button from '../Button'
import * as S from './style'
export type Props = {
  Next: () => void
}
const Checkout = ({ Next }: Props) => {
  return (
    <S.CheckoutContainer>
      <h3>Pedido realizado - ORDER_ID </h3>
      <p>
        Estamos felizes em informar que seu pedido já está em processo de
        preparação e, em breve, será entregue no endereço fornecido.
      </p>
      <p>
        Gostaríamos de ressaltar que nossos entregadores não estão autorizados a
        realizar cobranças extras.
      </p>
      <p>
        Lembre-se da importância de higienizar as mãos após o recebimento do
        pedido, garantindo assim sua segurança e bem-estar durante a refeição.
      </p>
      <p>
        Esperamos que desfrute de uma deliciosa e agradável experiência
        gastronômica. Bom apetite!
      </p>
      <Button type={'button'} title={'Concluir'} onClick={Next}>
        Concluir
      </Button>
    </S.CheckoutContainer>
  )
}
export default Checkout
