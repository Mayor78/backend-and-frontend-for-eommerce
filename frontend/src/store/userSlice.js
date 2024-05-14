import { createSlice } from '@reduxjs/toolkit'



const initialState = {
   user: null, // Initial state when the user is not logged in
   loading: false, // Indicates whether user data is being fetched
   error: null, // Stores any error that occurs during data fetching
 };
 
  
  // The function below is called a thunk and allows us to perform async logic. It
   const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
     setUserDetails : (state, action)=>{
        state.user = action.payload
        
     }
    },
  })
  
  // Action creators are generated for each case reducer function
  export const {  setUserDetails } = userSlice.actions
  
  export default userSlice.reducer