import counterSlice from "./counterSlice";

const { configureStore } = require("@reduxjs/toolkit");


export const store = configureStore({//to create store - use method configurestore() - it is inside reduxtoolkit
    //reducer can only update value of state in store
    // "reducer" key is predefined(it is an object which can hold more than one reducer)
    reducer:{
        //reducer is coming from counterSlice since we are export reducer as export default
              counter:counterSlice
    }
}

) 
