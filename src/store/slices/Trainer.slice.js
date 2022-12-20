import { createSlice } from "@reduxjs/toolkit";

const  trainerSlice = createSlice({
    name:'trainer',
    initialState:'hola papa',
    reducers:{
        setTrainerGlobal:(state, action) => action.payload
    }
})

export const { setTrainerGlobal } = trainerSlice.actions

export default trainerSlice.reducer