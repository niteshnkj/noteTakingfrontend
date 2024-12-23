import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./appStore";

// Define the Note type
interface Note {
  _id: string;
  title: string;
}

// Define the state as an array of notes
type NoteState = Note[];

const initialState: NoteState = []; 

const noteSlice = createSlice({
  name: "note",
  initialState,
  reducers: {
   
    addNote: (state, action: PayloadAction<Note>) => {
      state.push(action.payload); // Add the new note to the array
    },
   
    // Remove a note based on the ID
    removeNote: (state, action: PayloadAction<string>) => {
      // Remove the note with the matching _id
      return state.filter((note) => note._id !== action.payload);
    },

    // Clear all notes from the state
    clearNote: () => {
      return []; // Simply return an empty array to clear the notes
    }
  },
});

export const { addNote, removeNote, clearNote } = noteSlice.actions;

// Selector to get notes from the state
export const noteSelector = (state: RootState): NoteState => state.note;

export default noteSlice.reducer;
