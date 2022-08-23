import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './slices/cartSlice'
import vareSlice from './slices/vareSlice'

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        vares: vareSlice
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: ["vares/fetchVares/fulfilled", "vares/fetchVares/pending", "vares/fetchVares/rejected"]
        },
    }),
})