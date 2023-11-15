import { createSlice } from "@reduxjs/toolkit";


 export const counterSlice = createSlice({//used to create slice - use this method
    name:'counterApp',
    initialState:{
    value:0//state name can be any

    },
//actions are mentioned here(actions are created inside this reducers key as object)
    reducers:{
        //logics to update state
        //function to increment number
        increment:(state,action)=>{
     //if its a argument function then it can only be accessed by action and value in payload

            state.value +=action.payload
        },
        //function to decrement number
        decrement:(state,action)=>{
    //if its a argument function then it can only be accessed by action and value in payload
            state.value -=action.payload
        },
        //function to reset
        reset:(state)=>{
            state.value=0
        }
    }

})
//action is required by component inorder to update state

export const{increment,decrement,reset} = counterSlice.actions

//reducer is required to store to change the state value

export default counterSlice.reducer