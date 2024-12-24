import { useDispatch } from "react-redux";
import NavBar from "./NavBar";
import { Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import { addUser } from "@/utils/userSlice";
import { useEffect } from "react";
import { BASE_URL } from "@/utils/constants";
import { RootState } from "@/utils/appStore";
const Body = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const user = useSelector((store: RootState) => store.user.user);

    const fetchUser = async () => {
        // if (!user || user.isVerified === false) return;
        try {
            if (user) return;
            const res = await axios.get(BASE_URL + "/api/profile/view", {
                withCredentials: true,
            });
            dispatch(addUser(res?.data.data));
        } catch (error) {
            if (
                typeof error === "object" &&
                error &&
                "status" in error &&
                typeof error.status === "number"
            ) {
                if (error.status === 401) {
                    navigate("/signin");
                }
            }
        }
    }
    useEffect(() => {
        fetchUser();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user]); // Fetch only when the user state changes

    return (
        <div>
            <NavBar />
            <Outlet />
        </div>
    );
};

export default Body;
