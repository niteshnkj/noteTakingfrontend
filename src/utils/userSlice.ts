import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./appStore";

interface User {
  id: string;
  name: string;
  dob: Date;
  emailId: string;
  isVerified: boolean;
}


interface UserState {
  user: User | null; 
}

const initialState: UserState = {
  user: null, 
};

const userSlice = createSlice({
  name: "user",
  initialState, 
  reducers: {
   
    addUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload; 
    },
    removeUser: (state) => {
      state.user = null; 
    },
  },
});


export const { addUser, removeUser } = userSlice.actions;


export const userSelector = (state: RootState): UserState => state.user;

export default userSlice.reducer;
