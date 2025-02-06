import Button from '../Button'
import * as S from './style'
export type Props = {
  Back: () => void
  Next: () => void
}
const Address = ({ Back, Next }: Props) => {
  return (
    <S.AddressContainer>
      <h3>Entrega</h3>
      <S.FormContainer>
        <S.InputGroup>
          <label htmlFor="fullName">Quem irá receber</label>
          <input id="fullName" type="text" required />
        </S.InputGroup>
        <S.InputGroup>
          <label htmlFor="address">Endereço</label>
          <input id="address" type="text" required />
        </S.InputGroup>
        <S.InputGroup>
          <label htmlFor="city">Cidade</label>
          <input id="city" type="text" required />
        </S.InputGroup>
        <S.GroupContainer>
          <S.InputGroup>
            <label htmlFor="cep">CEP</label>
            <input className="short" id="cep" type="number" required />
          </S.InputGroup>
          <S.InputGroup>
            <label htmlFor="addressNumber">Número</label>
            <input
              className="short"
              id="addressNumber"
              type="number"
              required
            />
          </S.InputGroup>
        </S.GroupContainer>
        <S.InputGroup>
          <label htmlFor="apartment">Complemento (opicional)</label>
          <input id="apartment" type="number" />
        </S.InputGroup>
      </S.FormContainer>
      <Button
        type={'button'}
        title={'Continuar com o pagamento'}
        onClick={Next}
      >
        Continuar com o pagamento
      </Button>
      <Button type={'button'} title={'Voltar para o carrinho'} onClick={Back}>
        Voltar para o carrinho
      </Button>
    </S.AddressContainer>
  )
}
export default Address
