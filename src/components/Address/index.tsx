import { useFormik } from 'formik'
import * as Yup from 'yup'
import Button from '../Button'
import * as S from './style'
export type Props = {
  Back: () => void
  Next: () => void
}
const Address = ({ Back, Next }: Props) => {
  const formAddress = useFormik({
    initialValues: {
      fullName: '',
      address: '',
      city: '',
      cep: '',
      addresssNumber: '',
      apartment: ''
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
      addressNumber: Yup.string().required('Campo Obrigatório'),
      apartment: Yup.string()
    }),
    onSubmit: (values) => {
      console.log(values)
    }
  })
  const getErrorMessage = (fieldName: string, message?: string) => {
    const isChanged = fieldName in formAddress.touched
    const isInvalid = fieldName in formAddress.errors
    if (isChanged && isInvalid) return message
    return ''
  }
  return (
    <S.AddressContainer>
      <h3>Entrega</h3>
      <S.FormContainer onSubmit={formAddress.handleSubmit}>
        <S.InputGroup>
          <label htmlFor="fullName">Quem irá receber</label>
          <input
            id="fullName"
            type="text"
            name="fullName"
            value={formAddress.values.fullName}
            onChange={formAddress.handleChange}
            onBlur={formAddress.handleBlur}
          />
          <small>
            {getErrorMessage('fullName', formAddress.errors.fullName)}
          </small>
        </S.InputGroup>
        <S.InputGroup>
          <label htmlFor="address">Endereço</label>
          <input
            id="address"
            type="text"
            name="address"
            value={formAddress.values.address}
            onChange={formAddress.handleChange}
            onBlur={formAddress.handleBlur}
          />
          <small>
            {getErrorMessage('address', formAddress.errors.address)}
          </small>
        </S.InputGroup>
        <S.InputGroup>
          <label htmlFor="city">Cidade</label>
          <input
            id="city"
            type="text"
            name="city"
            value={formAddress.values.city}
            onChange={formAddress.handleChange}
            onBlur={formAddress.handleBlur}
          />
          <small>{getErrorMessage('city', formAddress.errors.city)}</small>
        </S.InputGroup>
        <S.GroupContainer>
          <S.InputGroup>
            <label htmlFor="cep">CEP</label>
            <input
              className="short"
              id="cep"
              type="number"
              name="cep"
              value={formAddress.values.cep}
              onChange={formAddress.handleChange}
              onBlur={formAddress.handleBlur}
            />
            <small>{getErrorMessage('cep', formAddress.errors.cep)}</small>
          </S.InputGroup>
          <S.InputGroup>
            <label htmlFor="addressNumber">Número</label>
            <input
              className="short"
              id="addressNumber"
              type="number"
              name="addressNumber"
              value={formAddress.values.addresssNumber}
              onChange={formAddress.handleChange}
              onBlur={formAddress.handleBlur}
            />
            <small>
              {getErrorMessage(
                'addressNumber',
                formAddress.errors.addresssNumber
              )}
            </small>
          </S.InputGroup>
        </S.GroupContainer>
        <S.InputGroup>
          <label htmlFor="apartment">Complemento (opicional)</label>
          <input
            id="apartment"
            type="number"
            name="apartment"
            value={formAddress.values.apartment}
            onChange={formAddress.handleChange}
            onBlur={formAddress.handleBlur}
          />
          <small>
            {getErrorMessage('apartment', formAddress.errors.apartment)}
          </small>
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
