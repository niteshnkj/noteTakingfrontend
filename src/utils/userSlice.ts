import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./appStore";

// Define the shape of the user state or allow it to be null
interface User {
  id: string;
  name: string;
  dob: Date;
  emailId: string;
}

type UserState = User | null;



const userSlice = createSlice({
  name: "user",
  initialState:"",
  reducers: {
    addUser: (state, action: PayloadAction<User>) => {
        return action.payload;
      },
      removeUser: (state: UserState): UserState => {
        return null;
      },
  },
});

export const { addUser,removeUser } =
  userSlice.actions;
export const userSelector = (state: RootState) => state.userReducer;
export default userSlice.reducer;
