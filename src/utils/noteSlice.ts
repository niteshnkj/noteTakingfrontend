import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the Note type
export type Note = {
  _id: string;
  title: string;
};

type NotesArray = {
  notes: Array<Note>;
};

const initialState: NotesArray = {
  notes: [],
};

const noteSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNote(state, action: PayloadAction<Array<Note>>) {
      state.notes = action.payload;
    },
    removeNote(state, action: PayloadAction<string>) {
      state.notes = state.notes.filter((note) => note._id !== action.payload);
    },
    clearNote(state) {
      state.notes = [];
    },
  },
});

export const { addNote, removeNote, clearNote } = noteSlice.actions;
export default noteSlice.reducer;
