import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export type User ={
  id: string;
  name: string;
  dob: Date;
  emailId: string;
  isVerified: boolean;
}


type UserState ={
  user: User|null ;
}

const initialState: UserState = {
  user: null, 
};

const userSlice = createSlice({
  name: "user",
  initialState, 
  reducers: {
   
    addUser(state, action: PayloadAction<User>){
      state.user = action.payload; 
    },
    removeUser(state){
      state.user = null; 
    },
  },
});


export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
