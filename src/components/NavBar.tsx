import axios from "axios";
import logo from "../assets/logo.png";
import { useDispatch } from "react-redux";
import { removeUser } from "@/utils/userSlice";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { useSelector } from "react-redux";
import { clearNote } from "@/utils/noteSlice";

const NavBar = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { toast } = useToast()
  const user = useSelector((store) => store.user);
  const handlelogout = async () => {

    try {
      await axios.post("http://localhost:4000/api/auth/logout", {}, { withCredentials: true })
      dispatch(removeUser())
      dispatch(clearNote())
      navigate("/signin")
    } catch (error) {
      console.log(error)
      toast({
        title: `${error.message}`,
      })
    }
  }

  return (
    <div className="flex justify-between items-center bg-gray-50 relative md:absolute md:top-8 md:left-12 md:z-10 md:max-h-screen md:bg-transparent">
      <div className="flex gap-2 items-center transform translate-y-40 translate-x-36 md:translate-x-20  md:translate-y-0 ">
        <img src={logo} alt="logo" className="lg:h-8 lg:w-8 h-12 w-12" />
        <h1 className="text-black font-bold md:text-2xl text-4xl">{user && user.isVerified ? "Dashboard" : "HD"}</h1>
      </div>
      <div className="absolute right-4 top-4">
        {user && user.isVerified && <p className="  text-blue-500 underline cursor-pointer font-semibold" onClick={handlelogout}>Sign Out</p>}
      </div>
    </div>
  );
};

export default NavBar;
