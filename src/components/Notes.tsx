import {
  Card,
  CardContent,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useToast } from "@/hooks/use-toast"

const Notes = () => {

  
  return (
    <div>
      <CardTitle className="text-3xl font-bold">Notes</CardTitle>
      <Card className="flex items-center justify-between p-4 space-x-4">
        <CardContent>
          <p>Note 1</p>
        </CardContent>
        <Button className="bg-white">
          <RiDeleteBin6Line size={20} className="text-black" />
        </Button>
      </Card>
    </div>
  )
}

export default Notes