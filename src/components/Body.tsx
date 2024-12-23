import { useDispatch } from "react-redux";
import NavBar from "./NavBar";
import { Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import { addUser } from "@/utils/userSlice";
import { useEffect } from "react";

const Body = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const user = useSelector((store) => store.user);
    const fetchUser = async () => {
        try {
            if (user) return;
            const res = await axios.get("http://localhost:4000/api/profile/view", {
                withCredentials: true,
            });
            dispatch(addUser(res?.data.data));
        } catch (error) {
            if (error.status === 401) {
                navigate("/signin");
            }
        }
    };
    useEffect(() => {
        fetchUser();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <div>
            <NavBar />
            <Outlet />
        </div>
    );
}

export default Body;
