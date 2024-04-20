import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: "https://jsonplaceholder.typicode.com",
    }),
    endpoints: (builder) => ({
        getPosts: builder.query({
            query: () => "/posts",
        }),
        getPostsById: builder.query({
            query: (id) => `/posts/${id}`
        }),
        setPost: builder.mutation({
            query: () => ({
                url: "/posts",
                method: "POST",
                
            })
        })
    }),
});

export const { useGetPostsQuery, useGetPostsByIdQuery } = baseApi;

export default baseApi;