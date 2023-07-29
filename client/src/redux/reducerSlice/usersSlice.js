import { createSlice } from "@reduxjs/toolkit";

export const initialState = { //setting initial state 
fullName: 'Rozen',
token:'',
isLoggedIn:false,
phoneNumber: '',
email: '',
mode: '',
age: '',
gender: '',
city:''
};

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
      setUserDetails(state) {
        //code here
      },
    },
  })

export const { setUserDetails } = usersSlice.actions;
export default usersSlice.reducer;