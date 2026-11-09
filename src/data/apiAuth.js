import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",

  baseQuery: fetchBaseQuery({
    baseUrl: "https://6af180fe11a6aa866e804b03.mockapi.io/api/",
  }),

  endpoints: (builder) => ({
    register: builder.mutation({
      query: (newUser) => ({
        url: "favorites",
        method: "POST",
        body: newUser,
      }),
    }),

    login: builder.query({
      query: ({ email, password }) => ({
        url: "favorites",
        method: "GET",
        params: { email, password },
      }),
    }),
  }),
});

export const { useRegisterMutation, useLazyLoginQuery } = authApi;
