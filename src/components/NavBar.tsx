import axios from "axios";
import logo from "../assets/logo.png";
import { useDispatch } from "react-redux";
import { removeUser } from "@/utils/userSlice";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { clearNote } from "@/utils/noteSlice";
import { BASE_URL } from "@/utils/constants";
import { RootState } from "@/utils/appStore";
import { useToast } from "@/hooks/use-toast";

const NavBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { toast } = useToast()
  const user = useSelector((store: RootState) => store.user.user);
  const handlelogout = async () => {
    try {
      await axios.post(
        BASE_URL + "/auth/logout",
        {},
        { withCredentials: true }
      );
      dispatch(removeUser());
      dispatch(clearNote());
      navigate("/signin");
    } catch (error) {
      console.log(error);
      toast({
        title: "error while logout",
      })

    }
  };


  return (
    <div className={`flex justify-between items-center relative ${user && user ? "bg-transparent" : "bg-gray-50"
      }`}>

      <div className="flex gap-2 items-center transform translate-y-40 translate-x-36 md:translate-x-28  md:translate-y-16 ">
        <img src={logo} alt="logo" className="lg:h-8 lg:w-8 h-12 w-12" />
        <p className="text-black font-bold md:text-2xl text-xl">
          {user && user.isVerified ? "Dashboard" : "HD"}
        </p>
      </div>

      <div className="absolute right-8 top-6">
        {user && user.isVerified && (
          <p
            className="  text-blue-500 underline cursor-pointer font-semibold"
            onClick={handlelogout}
          >
            Sign Out
          </p>
        )}
      </div>
    </div>
  );
};

export default NavBar;
