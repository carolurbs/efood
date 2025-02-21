import { useFormik } from 'formik'
import * as Yup from 'yup'
import Button from '../Button'
import * as S from './style'
import { usePurchaseMutation } from '../../services/api'
export type Props = {
  price: string
}
const Payment = ({ price }: Props) => {
  const [purchase, { isLoading, isError, data }] = usePurchaseMutation()
  const formPayment = useFormik({
    initialValues: {
      fullName: '',
      cardNumber: '',
      cardCode: '',
      expireMonth: '',
      expireYear: ''
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(5, 'O nome precisa ter pelo menos cinco caracteres')
        .required('O campo é obrigatório'),
      cardNumber: Yup.string()
        .min(13, 'Número inválido')
        .max(20, 'Número inválido')
        .required('O campo é obrigatório'),
      cardCode: Yup.string()
        .min(3, 'Número inválido')
        .max(3, 'Número inválido')
        .required('O campo é obrigatório'),
      expireMonth: Yup.string()
        .min(2, 'Data inválida')
        .max(2, 'Data inválida')
        .required('O campo é obrigatório'),
      expireYear: Yup.string()
        .min(2, 'Data inválida')
        .max(4, 'Data inválida')
        .required('O campo é obrigatório')
    }),
    onSubmit: (values) => {
      purchase({
        payment: {
          card: {
            name: values.fullName,
            number: values.cardNumber,
            code: Number(values.cardCode),
            expires: {
              month: Number(values.expireMonth),
              year: Number(values.expireYear)
            }
          }
        },
        products: [],
        delivery: []
      })
    }
  })

  const getErrorMessage = (fieldName: string, message?: string) => {
    const isChanged = fieldName in formPayment.touched
    const isInvalid = fieldName in formPayment.errors
    if (isChanged && isInvalid) return message
    return ''
  }
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
          <S.Small>
            {getErrorMessage('fullName', formPayment.errors.fullName)}
          </S.Small>
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
            />
            <S.Small>
              {getErrorMessage('cardNumber', formPayment.errors.cardNumber)}
            </S.Small>
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
            />
            <S.Small>
              {getErrorMessage('cardCode', formPayment.errors.cardCode)}
            </S.Small>
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
            />
            <S.Small>
              {getErrorMessage('expireMonth', formPayment.errors.expireMonth)}
            </S.Small>
          </S.InputGroup>
          <S.InputGroup>
            <label htmlFor="expireYear">Ano de Vencimento</label>
            <input
              className="medium"
              id="expireYear"
              type="number"
              name="expireYear"
              value={formPayment.values.expireYear}
              onChange={formPayment.handleChange}
              onBlur={formPayment.handleBlur}
            />
            <S.Small>
              {getErrorMessage('expireYear', formPayment.errors.expireYear)}
            </S.Small>
          </S.InputGroup>
        </S.GroupContainer>
      </S.FormContainer>
      <Button type={'button'} title={'Finalizar pagamento'}>
        Finalizar pagamento
      </Button>
      <Button type={'button'} title={'Voltar para a edição de endereço'}>
        Voltar para a edição de endereço
      </Button>
    </S.PaymentContainer>
  )
}
export default Payment
