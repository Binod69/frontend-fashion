import apiEndpoints from '@/app/config/apiEndpoints';
import { apiSlice } from './apiSlice';

export const productsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => ({
        url: apiEndpoints.PRODUCTS,
      }),
      keepUnusedDataFor: 5, //second
    }),
  }),
});

export const { useGetProductsQuery } = productsApiSlice;
