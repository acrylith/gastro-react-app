import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        list: [],
        isLoading: false
    },
    reducers: {
        "vareAdd": (state, action) => {
            if(!state.list.includes(action.payload)) {
                state.list.push(action.payload)
            }
        },
        // vareLoading: (state, action) => {
        //     return {
        //         ...state,
        //         isLoading: true
        //     }
        // }
    }
})

export const { vareAdd } = cartSlice.actions
export default cartSlice.reducer