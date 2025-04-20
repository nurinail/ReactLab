import {createSlice} from "@reduxjs/toolkit";

const initialFruits=[
    {
        id:1,
        name:"Alma",
    },
    {
        id:2,
        name:"Banan",
    },
    {
        id:3,
        name:"Kivi",
    },
    {
        id:4,
        name:"Ananas",
    },
    {
        id:5,
        name:"Armud",
    },
    {
        id:6,
        name:"Üzüm",
    },
    {
        id:7,
        name:"Çiyələk",
    },
]
const fruitSlice=createSlice({
    name:"fruits",
    initialState:{
        fruits:initialFruits,
        selectedFruits:[],
    },
    reducers:{
       toggleFruits:(state,action)=>{
        const exists = state.selectedFruits.find(item => item.id === action.payload.id);
        if (exists) {
            state.selectedFruits = state.selectedFruits.filter(item => item.id !== action.payload.id);
        } else {
            state.selectedFruits.push(action.payload);

        }
       },
       selectAll:(state)=>{
        state.selectedFruits=state.fruits
       },
       deleteAll:(state)=>{
        state.selectedFruits=[]
       },
  
       
    }
})

export const {toggleFruits,selectAll,deleteAll}=fruitSlice.actions;
export default fruitSlice.reducer
