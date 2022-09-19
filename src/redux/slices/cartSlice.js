import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        list: [],
    },
    reducers: {
        "vareAdd": (state, action) => {
            const vare = state.list.find(item => item.id === action.payload.info.id)
            if (!vare) {
                const temp = {...action.payload.info, quantity: {s: 0, m: 0}}
                temp.quantity[action.payload.size]++
                state.list.push(temp)
            } else {
                vare.quantity[action.payload.size]++
            }
        },
        "vareIncrease": (state, action) => {
            const vare = state.list.find(item => item.id === action.payload.id)
            vare.quantity[action.payload.size]++
        },
        "vareDecrease": (state, action) => {
            const vare = state.list.find(item => item.id === action.payload.id)
            if (vare.quantity[action.payload.size] > 0) {
                vare.quantity[action.payload.size]--
            }
        },
        "vareRemove": (state, action) => {
            const remove = state.list.filter(item => item.id !== action.payload)
            state.list = remove
        }
    }
})

export const { vareAdd, vareIncrease, vareDecrease, vareRemove } = cartSlice.actions
export default cartSlice.reducer