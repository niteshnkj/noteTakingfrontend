import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Notes from "./Notes";
import { useSelector } from "react-redux";


import CreateNote from "./CreateNote";
import { RootState } from "@/utils/appStore";
import { useState } from "react";

const TaskDashboard = () => {


  const user = useSelector((store: RootState) => store.user.user)
  const [refreshNotes, setRefreshNotes] = useState(false);

  const triggerRefresh = () => {
    setRefreshNotes((prev) => !prev);
  };
  if (!user) return;
  return (
    <div className="flex justify-center items-center w-full h-screen font-inter">
      <div className="w-full max-w-3xl p-6 text-center lg:text-left space-y-6">
        {/* Welcome Section */}
        <Card>
          <CardHeader>
            <CardTitle>
              <h1>Welcome {user.name}</h1></CardTitle>
          </CardHeader>
          <CardContent>
            <p>{user.emailId}</p>
          </CardContent>
        </Card>

        {/* Create Note Button */}
        <CreateNote onNoteCreated={triggerRefresh} />

        {/* Notes Section */}
        <div>
          <Notes refreshNotes={refreshNotes} />
        </div>
      </div>
    </div>
  );
};

export default TaskDashboard;
