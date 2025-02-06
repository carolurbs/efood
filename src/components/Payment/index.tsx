import { useFormik } from 'formik'
import * as Yup from 'yup'
import Button from '../Button'
import * as S from './style'
export type Props = {
  price: string
  Back: () => void
  Next: () => void
}
const Payment = ({ Back, Next, price }: Props) => {
  const formPayment = useFormik({
    initialValues: {
      fullName: '',
      cardNumber: '',
      cardCode: '',
      expireMonth: '',
      expireYear: ''
    },
    validationSchema: {
      fullName: Yup.string()
        .min(5, 'O nome precisa ter pelo menos cinco caracteres')
        .required('O campo é obrigatório'),
      cardNumber: Yup.number
    },
    onSubmit: (values) => {
      console.log(values)
    }
  })
  return (
    <S.PaymentContainer>
      <h3>Pagamento - Valor a pagar {price}</h3>
      <S.FormContainer onSubmit={formPayment.handleSubmit}>
        <S.InputGroup>
          <label htmlFor="fullName">Nome no cartão</label>
          <input
            id="fullName"
            type="text"
            name="fullName"
            value={formPayment.values.fullName}
            onChange={formPayment.handleChange}
            onBlur={formPayment.handleBlur}
          />
        </S.InputGroup>
        <S.GroupContainer>
          <S.InputGroup>
            <label htmlFor="cardNumber">Número do Cartão</label>
            <input
              className="long"
              id="cardNumber"
              type="number"
              name="cardNumber"
              value={formPayment.values.cardNumber}
              onChange={formPayment.handleChange}
              onBlur={formPayment.handleBlur}
              required
            />
          </S.InputGroup>
          <S.InputGroup>
            <label htmlFor="cardCode">CVV</label>
            <input
              className="short"
              id="cardCode"
              type="number"
              name="cardCode"
              value={formPayment.values.cardCode}
              onChange={formPayment.handleChange}
              onBlur={formPayment.handleBlur}
              required
            />
          </S.InputGroup>
        </S.GroupContainer>
        <S.GroupContainer>
          <S.InputGroup>
            <label htmlFor="expireMonth">Mês de Vencimento</label>
            <input
              className="medium"
              id="expireMonth"
              type="number"
              name="expireMonth"
              value={formPayment.values.expireMonth}
              onChange={formPayment.handleChange}
              onBlur={formPayment.handleBlur}
              required
            />
          </S.InputGroup>
          <S.InputGroup>
            <label htmlFor="expireYear">Número</label>
            <input
              className="medium"
              id="expireYear"
              type="number"
              name="expireYear"
              value={formPayment.values.expireYear}
              onChange={formPayment.handleChange}
              onBlur={formPayment.handleBlur}
              required
            />
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
