import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import { RiDeleteBin6Line } from "react-icons/ri";

const TaskDashboard = () => {
  return (
    <div className="flex justify-center items-center w-full h-screen font-inter">
      <div className="w-full max-w-3xl p-6 text-center lg:text-left space-y-6">
        {/* Welcome Section */}
        <Card>
          <CardHeader>
            <CardTitle>Welcome User</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Test@gmail.com</p>
          </CardContent>
        </Card>

        {/* Create Note Button */}
        <div>
          <button className="mb-4 p-4 w-full bg-[#367AFF] text-white rounded-[10px] hover:bg-blue-600">
            Create Note
          </button>
        </div>

        {/* Notes Section */}
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
      </div>
    </div>
  );
};

export default TaskDashboard;
