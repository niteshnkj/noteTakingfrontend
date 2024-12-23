import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./appStore";


interface Note {
  title: string;
}


type NoteState = Note | null;

const initialState: NoteState = null;


const noteSlice = createSlice({
  name: "note",
  initialState,
  reducers: {
    
    addNote: (state, action: PayloadAction<Note>) => {
      return action.payload; 
    },
   
    removeNote: () => {
      return initialState;
    },
    clearNote:()=>{
        return initialState; 
    }
  },
});


export const { addNote, removeNote,clearNote } = noteSlice.actions;


export const noteSelector = (state: RootState): NoteState => state.note;


export default noteSlice.reducer;
