import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./appStore";


interface User {
  id: string;
  name: string;
  dob: Date;
  emailId: string;
}

type UserState = User | null;


const initialState: UserState = null;

const userSlice = createSlice({
  name: "user",
  initialState, 
  reducers: {
    addUser: (state, action: PayloadAction<User>) => {
      return action.payload; 
    },
    removeUser: () => {
      return initialState; 
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;
export const userSelector = (state: RootState): UserState => state.user;
export default userSlice.reducer;
