import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "./ui/button";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useToast } from "@/hooks/use-toast";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addNote, removeNote } from "@/utils/noteSlice";
import { FC, useEffect } from "react";
import { useSelector } from "react-redux";
import { BASE_URL } from "@/utils/constants";
import { RootState } from "@/utils/appStore";

type NotesProps = {
  refreshNotes: boolean;
};
const Notes: FC<NotesProps> = ({ refreshNotes }) => {
  const dispatch = useDispatch();
  const note = useSelector((state: RootState) => state.note.notes);

  const { toast } = useToast()
  // get notes
  const fetchNotes = async () => {
    try {
      const res = await axios.get(BASE_URL + "/api/note/getNotes", {
        withCredentials: true,
      });
      dispatch(addNote(res?.data.note))
      toast({
        title: "Notes fetched sucessfully",
      })
    } catch (error) {
      console.log(error)
      toast({
        title: "Start writing a note today",
      })
    }
  };
  const handleDeleteNote = async (_id: string) => {
    try {
      await axios.delete(BASE_URL + "/api/note/deleteNote/" + _id, { withCredentials: true, });
      dispatch(removeNote(_id))
      toast({
        title: "Note deleted sucessfully",
      })
    } catch (error) {
      console.log(error)
      toast({
        title: "Note deleted sucessfully",
      })
    }
  }


  useEffect(() => {
    fetchNotes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refreshNotes])
  if (note.length === 0) return <p> "Transform your fleeting thoughts into lasting treasures—start writing your notes today!" </p>
  return (
    <div>
      <CardTitle className="text:xl md:text-3xl font-bold">Notes</CardTitle>
      {note.map((notes) => {
        return (<Card className="flex items-center justify-between p-4 space-x-4" key={notes._id}>
          <CardContent >
            <p >{notes?.title}</p>
          </CardContent>
          <Button className="bg-white" onClick={() => handleDeleteNote(notes._id)}>
            <RiDeleteBin6Line size={20} className="text-black" />
          </Button>
        </Card>)
      })}
    </div>
  )
};

export default Notes;
