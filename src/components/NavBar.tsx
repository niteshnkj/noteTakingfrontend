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
      toast({
        title: `${error.data.message}`,
      })
    }
  }
  if (!user) return;
  return (
    <div className="flex justify-center items-center bg-gray-50 relative lg:absolute lg:top-8 lg:left-12 lg:z-10 lg:max-h-screen lg:bg-transparent">
      <div className="flex gap-2 items-center transform translate-y-40 lg:translate-y-0 ">
        <img src={logo} alt="logo" className="lg:h-8 lg:w-8 h-12 w-12" />
        <h1 className="text-black font-bold lg:text-2xl text-4xl">Dashboard</h1>
      </div>
      {user.isVerified && <p className="absolute top-4 right-4 text-blue-500 underline cursor-pointer font-semibold" onClick={handlelogout}>Sign Out</p>}
    </div>
  );
};

export default NavBar;
