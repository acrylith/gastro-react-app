import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { collection, getDocs, query, where } from "firebase/firestore";
import { fstore } from "../../fbase"

export const fetchVares = createAsyncThunk('vares/fetchVares', async (type) => {
    const q = query(collection(fstore, "vares"), where("type", "==", type))
    const docSnap = await getDocs(q)
    return docSnap
})

const vareSlice = createSlice({
    name: "vares",
    initialState: {
        list: [],
        isLoading: false,
        error: null
    },
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchVares.pending, (state, action) => {
                state.isLoading = true
            })
            .addCase(fetchVares.fulfilled, (state, action) => {
                // console.log(action.payload)
                const perm = []
                action.payload.forEach(doc => {
                    perm.push(doc.data())
                })
                state.list = perm
                state.isLoading = false
            })
            .addCase(fetchVares.rejected, (state, action) => {
                state.error = action
            })
    }
})

export default vareSlice.reducer