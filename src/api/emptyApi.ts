import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const emptySplitApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://hackathon.stg-prtimes.net/api/',
    prepareHeaders: (headers) => {
      headers.set('Authorization', `Bearer ${import.meta.env.VITE_API_KEY}`);
      return headers;
    },
  }),
  endpoints: () => ({}),
});
