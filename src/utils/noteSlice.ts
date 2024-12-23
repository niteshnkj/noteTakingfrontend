import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./appStore";

// Define the Note type
export interface Note {
  _id: string;
  title: string;
}

const initialState: Array<Note> = []

const noteSlice = createSlice({
  name: "note",
  initialState,
  reducers: {
    addNote: (state, action: PayloadAction<Note[]>) => {
      const uniqueNotes = [
        ...state,
        ...action.payload.filter(
          (newNote) => !state.find((existingNote) => existingNote._id === newNote._id)
        ),
      ];
      return uniqueNotes;
    },
    
    removeNote: (state, action: PayloadAction<string>) => {
     
      return state.filter((note) => note._id !== action.payload);
    },
    clearNote: () => {
      return []; 
    }
  },
});

export const { addNote, removeNote, clearNote } = noteSlice.actions;

// Selector to get notes from the state
export const userSelector = (state: RootState) => state.note;

export default noteSlice.reducer;
