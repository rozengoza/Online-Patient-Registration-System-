import { createSlice } from "@reduxjs/toolkit";

export const initialState = { //setting initial state 
token:'',
userDetails:{},
};

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
      setUserDetails:(state,actions)=> {
        debugger;
      },
    },
  })

export const { setUserDetails } = usersSlice.actions;
// export default usersSlice.reducers;