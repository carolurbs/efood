import { useFormik } from 'formik'
import * as Yup from 'yup'
import { usePurchaseMutation } from '../../services/api'
import { useState } from 'react'
import { formatPrice } from '../ProductsList'
import Button from '../Button'
import * as S from './style'

export type Props = {
  Exit: () => void
  price: number
  Cart: () => void
}
const Checkout = ({ Exit, price, Cart }: Props) => {
  const [step, setStep] = useState(0)
  const [purchase, { isSuccess, data }] = usePurchaseMutation()
  const Advance = () => {
    setStep((step) => step + 1)
  }
  const Back = () => {
    setStep((step) => step - 1)
  }
  const CheckStatus = () => {
    if (isSuccess) Advance
    else {
      alert('Desculpe, ocorreu um erro')
    }
  }
  const form = useFormik({
    initialValues: {
      fullName: '',
      address: '',
      city: '',
      cep: '',
      addresssNumber: '',
      apartment: '',
      cardOwner: '',
      cardNumber: '',
      cardCode: '',
      expireMonth: '',
      expireYear: ''
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(5, 'O nome precisa ter pelo menos cinco caracteres')
        .required('O campo é obrigatório'),
      address: Yup.string()
        .min(10, 'Endereço inválido')
        .required('Campo obrigatório'),
      city: Yup.string()
        .min(5, 'Cidade inválida')
        .required('Campo Obrigatório'),
      cep: Yup.string()
        .min(9, 'CEP inválido')
        .max(9, 'CEP inválido')
        .required('Campo Obrigatório'),
      addressNumber: Yup.string()
        .min(2, 'Número Inválido')
        .max(2, 'Número Inválido')
        .required('Campo Obrigatório'),
      apartment: Yup.string(),
      cardOwnerName: Yup.string()
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
        delivery: {
          receiver: values.fullName,
          address: {
            description: values.address,
            city: values.city,
            zipCode: values.cep,
            number: Number(values.addresssNumber),
            complement: values.apartment
          }
        },
        payment: {
          card: {
            name: values.cardOwner,
            number: values.cardNumber,
            code: Number(values.cardCode),
            expires: {
              month: Number(values.expireMonth),
              year: Number(values.expireYear)
            }
          }
        },
        products: []
      })
    }
  })
  const getErrorMessage = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasError = isTouched && isInvalid
    return hasError
  }
  switch (step) {
    case 0:
      return (
        <S.CheckoutContainer>
          <h3>Entrega</h3>
          <S.FormContainer onSubmit={form.handleSubmit}>
            <S.InputGroup>
              <label htmlFor="fullName">Quem irá receber</label>
              <input
                className={getErrorMessage('fullName') ? 'error' : ''}
                id="fullName"
                type="text"
                name="fullName"
                value={form.values.fullName}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
            </S.InputGroup>
            <S.InputGroup>
              <label htmlFor="address">Endereço</label>
              <input
                className={getErrorMessage('address') ? 'error' : ''}
                id="address"
                type="text"
                name="address"
                value={form.values.address}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
            </S.InputGroup>
            <S.InputGroup>
              <label htmlFor="city">Cidade</label>
              <input
                className={getErrorMessage('city') ? 'error' : ''}
                id="city"
                type="text"
                name="city"
                value={form.values.city}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
            </S.InputGroup>
            <S.GroupContainer>
              <S.InputGroup>
                <label htmlFor="cep">CEP</label>
                <input
                  className={getErrorMessage('cep') ? 'error medium' : 'medium'}
                  id="cep"
                  type="number"
                  name="cep"
                  value={form.values.cep}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
              </S.InputGroup>
              <S.InputGroup>
                <label htmlFor="addressNumber">Número</label>
                <input
                  className={
                    getErrorMessage('addressNumber') ? 'error medium' : 'medium'
                  }
                  id="addressNumber"
                  type="number"
                  name="addressNumber"
                  value={form.values.addresssNumber}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
              </S.InputGroup>
            </S.GroupContainer>
            <S.InputGroup>
              <label htmlFor="apartment">Complemento (opicional)</label>
              <input
                className={getErrorMessage('apartment') ? 'error' : ''}
                id="apartment"
                type="number"
                name="apartment"
                value={form.values.apartment}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
            </S.InputGroup>
          </S.FormContainer>
          <Button
            type={'button'}
            title={'Continuar com o pagamento'}
            onClick={CheckStatus}
          >
            Continuar com o pagamento
          </Button>
          <Button
            type={'button'}
            title={'Voltar para o carrinho'}
            onClick={Cart}
          >
            Voltar para o carrinho
          </Button>
        </S.CheckoutContainer>
      )
    case 1:
      return (
        <S.CheckoutContainer>
          <h3>Pagamento - Valor a pagar ${formatPrice(price)}</h3>
          <S.FormContainer onSubmit={form.handleSubmit}>
            <S.InputGroup>
              <label htmlFor="cardOwner">Nome no cartão</label>
              <input
                className={getErrorMessage('cardOwner') ? 'error long' : 'long'}
                id="cardOwner"
                type="text"
                name="cardOwner"
                value={form.values.cardOwner}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
            </S.InputGroup>
            <S.GroupContainer>
              <S.InputGroup>
                <label htmlFor="cardNumber">Número do Cartão</label>
                <input
                  className={
                    getErrorMessage('cardNumber') ? 'error long' : 'long'
                  }
                  id="cardNumber"
                  type="number"
                  name="cardNumber"
                  value={form.values.cardNumber}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
              </S.InputGroup>
              <S.InputGroup>
                <label htmlFor="cardCode">CVV</label>
                <input
                  className={
                    getErrorMessage('cardCode') ? 'error short' : 'short'
                  }
                  id="cardCode"
                  type="number"
                  name="cardCode"
                  value={form.values.cardCode}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
              </S.InputGroup>
            </S.GroupContainer>
            <S.GroupContainer>
              <S.InputGroup>
                <label htmlFor="expireMonth">Mês de Vencimento</label>
                <input
                  className={
                    getErrorMessage('expireMonth') ? 'error medium' : 'medium'
                  }
                  id="expireMonth"
                  type="number"
                  name="expireMonth"
                  value={form.values.expireMonth}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
              </S.InputGroup>
              <S.InputGroup>
                <label htmlFor="expireYear">Ano de Vencimento</label>
                <input
                  className={
                    getErrorMessage('expireYear') ? 'error medium' : 'medium'
                  }
                  id="expireYear"
                  type="number"
                  name="expireYear"
                  value={form.values.expireYear}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
              </S.InputGroup>
            </S.GroupContainer>
          </S.FormContainer>
          <Button
            type={'button'}
            title={'Finalizar pagamento'}
            onClick={CheckStatus}
          >
            Finalizar pagamento
          </Button>
          <Button
            type={'button'}
            title={'Voltar para a edição de endereço'}
            onClick={Back}
          >
            Voltar para a edição de endereço
          </Button>
        </S.CheckoutContainer>
      )
    case 2:
      return (
        <S.CheckoutContainer>
          <h3>Pedido realizado - {data.orderId} </h3>
          <p>
            Estamos felizes em informar que seu pedido já está em processo de
            preparação e, em breve, será entregue no endereço fornecido.
          </p>
          <p>
            Gostaríamos de ressaltar que nossos entregadores não estão
            autorizados a realizar cobranças extras.
          </p>
          <p>
            Lembre-se da importância de higienizar as mãos após o recebimento do
            pedido, garantindo assim sua segurança e bem-estar durante a
            refeição.
          </p>
          <p>
            Esperamos que desfrute de uma deliciosa e agradável experiência
            gastronômica. Bom apetite!
          </p>
          <Button type={'button'} title={'Concluir'} onClick={Exit}>
            Concluir
          </Button>
        </S.CheckoutContainer>
      )
    default:
      return (
        <S.CheckoutContainer>
          <h3>Entrega</h3>
          <S.FormContainer onSubmit={form.handleSubmit}>
            <S.InputGroup>
              <label htmlFor="fullName">Quem irá receber</label>
              <input
                className={getErrorMessage('fullName') ? 'error' : ''}
                id="fullName"
                type="text"
                name="fullName"
                value={form.values.fullName}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
            </S.InputGroup>
            <S.InputGroup>
              <label htmlFor="address">Endereço</label>
              <input
                className={getErrorMessage('address') ? 'error' : ''}
                id="address"
                type="text"
                name="address"
                value={form.values.address}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
            </S.InputGroup>
            <S.InputGroup>
              <label htmlFor="city">Cidade</label>
              <input
                className={getErrorMessage('city') ? 'error' : ''}
                id="city"
                type="text"
                name="city"
                value={form.values.city}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
            </S.InputGroup>
            <S.GroupContainer>
              <S.InputGroup>
                <label htmlFor="cep">CEP</label>
                <input
                  className={getErrorMessage('cep') ? 'error medium' : 'medium'}
                  id="cep"
                  type="number"
                  name="cep"
                  value={form.values.cep}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
              </S.InputGroup>
              <S.InputGroup>
                <label htmlFor="addressNumber">Número</label>
                <input
                  className={
                    getErrorMessage('addressNumber') ? 'error medium' : 'medium'
                  }
                  id="addressNumber"
                  type="number"
                  name="addressNumber"
                  value={form.values.addresssNumber}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
              </S.InputGroup>
            </S.GroupContainer>
            <S.InputGroup>
              <label htmlFor="apartment">Complemento (opicional)</label>
              <input
                className={getErrorMessage('apartment') ? 'error' : ''}
                id="apartment"
                type="number"
                name="apartment"
                value={form.values.apartment}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
            </S.InputGroup>
          </S.FormContainer>
          <Button
            type={'button'}
            title={'Continuar com o pagamento'}
            onClick={CheckStatus}
          >
            Continuar com o pagamento
          </Button>
          <Button
            type={'button'}
            title={'Voltar para o carrinho'}
            onClick={Exit}
          >
            Voltar para o carrinho
          </Button>
        </S.CheckoutContainer>
      )
  }
}
export default Checkout
