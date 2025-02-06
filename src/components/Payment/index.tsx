import Button from '../Button'
import * as S from './style'
export type Props = {
  price: string
  Back: () => void
  Next: () => void
}
const Payment = ({ Back, Next, price }: Props) => {
  return (
    <S.PaymentContainer>
      <h3>Pagamento - Valor a pagar {price}</h3>
      <S.FormContainer>
        <S.InputGroup>
          <label htmlFor="fullName">Nome no cartão</label>
          <input id="fullName" type="text" required />
        </S.InputGroup>
        <S.GroupContainer>
          <S.InputGroup>
            <label htmlFor="cardNumber">Número do Cartão</label>
            <input className="long" id="cardNumber" type="number" required />
          </S.InputGroup>
          <S.InputGroup>
            <label htmlFor="cardCode">CVV</label>
            <input className="short" id="cardCode" type="number" required />
          </S.InputGroup>
        </S.GroupContainer>
        <S.GroupContainer>
          <S.InputGroup>
            <label htmlFor="expireMonth">Mês de Vencimento</label>
            <input className="medium" id="expireMonth" type="number" required />
          </S.InputGroup>
          <S.InputGroup>
            <label htmlFor="expireYear">Número</label>
            <input className="medium" id="expireYear" type="number" required />
          </S.InputGroup>
        </S.GroupContainer>
      </S.FormContainer>
      <Button type={'button'} title={'Finalizar pagamento'} onClick={Next}>
        Finalizar pagamento
      </Button>
      <Button
        type={'button'}
        title={'Voltar para a edição de endereço'}
        onClick={Back}
      >
        Voltar para a edição de endereço
      </Button>
    </S.PaymentContainer>
  )
}
export default Payment
