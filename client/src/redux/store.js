import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import { combineReducers, configureStore } from '@reduxjs/toolkit'
import cartReducer from './cartSlice.js'
import productReducer from './productSlice.js'

const persistConfig = {
	key: 'root',
	version: 1,
	storage,
}

const rootReducer = combineReducers({ cart: cartReducer, product: productReducer, })
const persistedReducer = persistReducer(persistConfig, rootReducer)

// export default configureStore({
// 	reducer: {
// 		cart: cartReducer,
// 		product: productReducer,
// 	}
// })

export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
})

export let persistor = persistStore(store)