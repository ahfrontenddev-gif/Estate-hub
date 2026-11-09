import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const propertyApi = createApi({
  reducerPath: "propertyApi",

  baseQuery: fetchBaseQuery({
    baseUrl: "https://6af180fe11a6aa866e804b03.mockapi.io/api/",
  }),

  endpoints: (builder) => ({
    getProperties: builder.query({
      query: () => "properties",
    }),

    getPropertyById: builder.query({
      query: (id) => `properties/${id}`,
    }),
  }),
});

export const { useGetPropertiesQuery, useGetPropertyByIdQuery } = propertyApi;
