import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Restaurants } from '../pages/Home'

type Product = {
  id: number
  price: number
}
type Address = {
  receiver: string
  address: {
    description: string
    city: string
    zipCode: string
    number: number
    complement?: string
  }
}
type PurchasePayload = {
  products: Product[]
  delivery: Address[]
  payment: {
    card: {
      name: string
      number: string
      code: number
      expires: {
        month: number
        year: number
      }
    }
  }
}
const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getLocals: builder.query<Restaurants[], void>({
      query: () => 'restaurantes'
    }),
    getMenu: builder.query<Restaurants, string>({
      query: (id) => `restaurantes/${id}`
    }),
    purchase: builder.mutation<any, PurchasePayload>({
      query: (body) => ({
        url: 'checkout',
        method: 'POST',
        body
      })
    }),
    location: builder.mutation<any, Address>({
      query: (body) => ({
        url: 'checkout',
        method: 'POST',
        body
      })
    })
  })
})
export const {
  useGetLocalsQuery,
  useGetMenuQuery,
  usePurchaseMutation,
  useLocationMutation
} = api
export default api
