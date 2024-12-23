import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "./ui/button";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useToast } from "@/hooks/use-toast";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addNote, removeNote } from "@/utils/noteSlice";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const Notes = () => {
  const dispatch = useDispatch();
  const note = useSelector((store) => store.note);
  const { toast } = useToast()
  //get notes
  const fetchNotes = async () => {
    try {
      const res = await axios.get("http://localhost:4000/api/note/getNotes", {
        withCredentials: true,
      });
      console.log(res?.data.noteData)
      dispatch(addNote(res?.data.noteData));
      toast({
        title: "Notes fetched sucessfully",
      })
    } catch (error) {

      toast({
        title: `${error?.message}`,
      })
    }
  };
  const handleDeleteNote = async (_id) => {
    try {
      const res = await axios.delete("http://localhost:4000/api/note/deleteNote/" + _id, { withCredentials: true, });
      dispatch(removeNote(_id))

    } catch (error) {
      console.log(error)
    }
  }


  useEffect(() => {
    fetchNotes();
  }, [])
  if (!note) return <p> "Transform your fleeting thoughts into lasting treasures—start writing your notes today!" </p>
  // console.log(note.noteData)
  return (
    <div>
      <CardTitle className="text-3xl font-bold">Notes</CardTitle>
      {note.map((note) => {
        return (<Card className="flex items-center justify-between p-4 space-x-4" key={note?._id}>
          <CardContent>
            <p >{note?.title}</p>
          </CardContent>
          <Button className="bg-white" onClick={() => handleDeleteNote(note._id)}>
            <RiDeleteBin6Line size={20} className="text-black" />
          </Button>
        </Card>)
      })}
    </div>
  )
};

export default Notes;
