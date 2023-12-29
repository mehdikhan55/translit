import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const rapidApiKey=import.meta.env.GPT3_KEY;

 

export const translationApi=createApi({
    reducerPath:'translationApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://article-extractor-and-summarizer.p.rapidapi.com/',
        prepareHeaders: (headers)=>{
            headers.set('X-RapidAPI-Key', '7761d722a1mshbf19392057a877dp1494cejsne94fca0c4b47');
            headers.set('X-RapidAPI-Host', 'article-extractor-and-summarizer.p.rapidapi.com');

            return headers; 
        }
    }),
    endpoints: (builder)=>(({
        getTranslation: builder.query({
            query: (params)=>`/summarize?url=${encodeURIComponent(params.articleUrl)}&length=3`
        })
    }))
})

export const {useLazyGetTranslationQuery}=translationApi;