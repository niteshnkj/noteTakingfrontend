import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"

import { useState } from "react"

import axios from "axios"
import { useToast } from "@/hooks/use-toast"
import { BASE_URL } from "@/utils/constants"

const CreateNote = () => {
    const [note, setNote] = useState("")
    const { toast } = useToast()

    // create note api call
    const handleCreateNote = async () => {
        try {
            if (!note) return;
            await axios.post(BASE_URL + "/note/createNote", { title: note }, { withCredentials: true });
            toast({
                title: "Note Created Sucessfully",
            })
            setNote("");
        } catch (error) {
            console.log(error)

        }
    }
    return (
        <div><AlertDialog>
            <AlertDialogTrigger asChild>
                <Button variant="outline" className="mb-4 p-4 w-full bg-[#367AFF] text-white rounded-[10px]">Create Note</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle><div className="relative mb-4">
                        <textarea
                            required
                            value={note}
                            placeholder="Type your Note here."
                            onChange={(e) => setNote(e.target.value)}
                            className={`peer w-full px-4 py-3 rounded-md border-2 bg-transparent border-gray-300  placeholder-transparent focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-gray-900`}
                        />
                        <label
                            htmlFor="name"
                            className="absolute left-4 top-0 bg-gray-50 text-gray-500 text-sm transform -translate-y-1/2 z-10  px-1"
                        >
                            Write a note
                        </label>
                    </div></AlertDialogTitle>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogAction onClick={handleCreateNote}>Save</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog></div>
    )
}

export default CreateNote