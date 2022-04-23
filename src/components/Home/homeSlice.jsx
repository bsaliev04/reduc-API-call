import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'

export const callToAPI = createAsyncThunk('api/products',async(obj,{state,error})=>{
    try{
          const req = await fetch(
            "https://mocki.io/v1/7af31a8c-156e-4de5-b306-00d76c34e274"
          );
          const res = await req.json()
          return res
    }catch(error){
        console.log(error)
        return []
    }
})

const recipiesSlice = createSlice({
    name:"products",
    initialState:[],
    reducers:{},
    extraReducers:{
        [callToAPI.pending]:(state,action)=>{
            return []
        },
        [callToAPI.fulfilled]:(state,action)=>{
            return action.payload
        },
        [callToAPI.rejected]:(state,action)=>{
            return []
        }
    }
})

export const actions = recipiesSlice.actions;
export default recipiesSlice ;