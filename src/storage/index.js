import {
    configureStore,
    combineReducers
} from '@reduxjs/toolkit'

import storage from 'redux-persist/lib/storage'
import {
    persistReducer,
    persistStore
} from 'redux-persist';
import thunk from 'redux-thunk';

//* REDUCERS
import {
    mainReducer
} from './reducers/main';

//* PERSIST CONFIG
const persistConfig = {
    key: "root",
    // blacklist: [""],
    storage
}

const allReducers = combineReducers({
    main: mainReducer.reducer
})

const persistedReducer = persistReducer(persistConfig, allReducers)

export const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production' ? true : false,
    middleware: [thunk]
});

export const persistor = persistStore(store)