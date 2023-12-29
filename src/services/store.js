import {configureStore} from '@reduxjs/toolkit';

import {translationApi} from './translation';

 const store=configureStore({
    reducer:{
        [translationApi.reducerPath]: translationApi.reducer 
    },
    middleware:(getDefaultMiddleware)=> getDefaultMiddleware().concat(translationApi.middleware)
})
export default store;
