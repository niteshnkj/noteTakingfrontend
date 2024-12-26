import { useState } from "react";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { CalendarIcon, CheckIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { Separator } from "@/components/ui/separator";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { GoEye, GoEyeClosed } from "react-icons/go";
import { Checkbox } from "@radix-ui/react-checkbox";
import GoogleIcon from "../assets/googlebtn.png"
import axios from "axios"
import { useDispatch } from "react-redux";
import { addUser } from "@/utils/userSlice";
import { useToast } from "@/hooks/use-toast"
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "@/utils/constants";



const SignIn: React.FC = () => {
    const [date, setDate] = useState<Date | undefined>(new Date())
    const [showOtp, setShowOtp] = useState<boolean>(false);
    const [isSignUp, setSignUp] = useState<boolean>(false);
    const [emailId, setEmailId] = useState<string | null>(null);
    const [name, setName] = useState<string | null>(null);
    const [otp, setOtp] = useState<string>("");
    const { toast } = useToast()
    const dispatch = useDispatch()
    const [disabled, setDisabled] = useState<boolean>(false);
    const [disabledotp, setDisabledotp] = useState<boolean>(true);
    const navigate = useNavigate()
    const toggleOtpVisibility = () => {
        setShowOtp((prev) => !prev);
    };
    // console.log(date)
    //sign up and navigate to notemaking page

    const handleSignUp = async () => {

        if (!emailId || !name || !date) {
            toast({
                title: "All fields are required.",
            })
        }
        try {
            await axios.post(BASE_URL + "/api/auth/signup", { name, dob: date, emailId }, { withCredentials: true })
            // dispatch(addUser(res.data.data))
            toast({
                title: "An otp has been sent to your Email.",
            })
            setDisabled(true);
            setDisabledotp(false);
        } catch (error) {

            if (
                typeof error === "object" &&
                error &&
                "status" in error &&
                typeof error.status === "number"
            ) {
                if (error.status === 400) {
                    toast({
                        title: "User already registered. Please SignIn.",
                    })
                    setSignUp(false)
                }
            }
        }

    }
    const handleSignupOtpVerify = async () => {
        if (!otp) {
            toast({
                title: "otp is required.",
            })
        }

        try {
            const res = await axios.post(BASE_URL + "/api/auth/verify-otp", { emailId, otp }, { withCredentials: true })
            dispatch(addUser(res.data.data))
            toast({
                title: "Sign Up sucessful",
            })
            navigate("/note")
        } catch (error) {
            if (
                typeof error === "object" &&
                error &&
                "message" in error &&
                typeof error.message === "string"
            ) {
                toast({
                    title: `Invalid otp.`,
                })
            }
        }
    }
    //sign in and navigate to notemaking page
    const handleSignIn = async () => {

        if (!emailId) {
            toast({
                title: "email is required.",
            })
        }
        try {
            await axios.post(BASE_URL + "/api/auth/signin", { emailId }, { withCredentials: true })
            toast({
                title: "An otp has been sent to your Email.",
            })
            setDisabled(true);
            setDisabledotp(false);
        } catch (error) {
            if (
                typeof error === "object" &&
                error &&
                "message" in error &&
                typeof error.message === "string"
            ) {
                toast({
                    title: `Invalid Email.`,
                })
            }
        }

    }
    const handleVerify = async () => {
        setDisabled(true);
        setDisabledotp(false)
        if (!otp) {
            toast({
                title: "otp is required.",
            })
        }

        try {
            const res = await axios.post(BASE_URL + "/api/auth/verify-signInotp", { emailId, otp }, { withCredentials: true })
            dispatch(addUser(res.data.data))
            toast({
                title: "login sucessful",
            })
            navigate("/note")
        } catch (error) {
            if (
                typeof error === "object" &&
                error &&
                "message" in error &&
                typeof error.message === "string"
            ) {
                toast({
                    title: `Invalid otp`,
                })
            }
        }



    }
    return (
        <div className="flex justify-center items-center w-full h-screen font-inter">
            <div className="w-full max-w-md p-6 text-center lg:text-left">
                <h1 className="text-3xl font-semibold mb-4">
                    {isSignUp ? "Sign up" : "Sign In"}
                </h1>
                <p className="text-gray-600 mb-6">
                    {isSignUp
                        ? "Sign up to enjoy the features of HD"
                        : "Please login to continue to your account."}
                </p>

                {/* Name Input */}
                {isSignUp && (
                    <div className="relative mb-4">
                        <input
                            type="text"
                            id="name"
                            required
                            value={name || ""}
                            onChange={(e) => setName(e.target.value)}
                            disabled={disabled}
                            className={`peer w-full px-4 py-3 rounded-md border-2 bg-transparent border-gray-300  placeholder-transparent focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 ${disabled ? 'text-gray-500' : 'text-gray-900'}`}
                        />
                        <label
                            htmlFor="name"
                            className="absolute left-4 top-0 bg-gray-50 text-gray-500 text-sm transform -translate-y-1/2 z-10  px-1"
                        >
                            Your Name
                        </label>
                    </div>
                )}

                {/* Date Picker */}
                {isSignUp && (
                    <div className="relative mb-4">
                        <Popover>
                            <PopoverTrigger asChild>
                                <button
                                    className={`
                                        peer w-full px-4 py-3 rounded-md border-2 border-gray-300 placeholder-transparent text-left font-normal focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500
                                        ${!date ? 'text-muted-foreground' : ''}
                                        ${disabled ? 'text-gray-500' : 'text-gray-900'}
                                      `}
                                    id="dob"
                                >
                                    <CalendarIcon className={`mr-2 h-4 w-4 inline-block ${disabled ? 'text-gray-500' : 'text-gray-900'}`} />
                                    {date ? format(date, "PPP") : ""}
                                </button>
                            </PopoverTrigger>
                            <PopoverContent className={`w-auto p-0 ${disabled ? 'text-gray-500' : 'text-gray-900'}`} align="start">
                                <Calendar
                                    mode="single"
                                    selected={date}
                                    onSelect={setDate}
                                    initialFocus
                                    disabled={(date) =>
                                        date > new Date() || date < new Date("1900-01-01")
                                    }
                                    required
                                    className={`${disabled ? 'text-gray-500' : 'text-gray-900'}`}
                                />
                            </PopoverContent>
                        </Popover>
                        <label
                            htmlFor="dob"
                            className="absolute left-4 top-0 text-gray-500 text-sm transform -translate-y-1/2 z-10 bg-gray-50 px-1"
                        >
                            Date of Birth
                        </label>
                    </div>
                )}


                {/* Email Input */}
                <div className="relative mb-4">
                    <input
                        type="email"
                        id="email"
                        required
                        className={`peer w-full px-4 py-3 rounded-md border-2 bg-transparent border-gray-300  placeholder-transparent focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 ${disabled ? 'text-gray-500' : 'text-gray-900'}`}
                        placeholder="Email Address"
                        value={emailId || ""}
                        onChange={(e) => { setEmailId(e.target.value) }}
                        disabled={disabled}
                    />
                    <label
                        htmlFor="email"
                        className="absolute left-4 top-0 text-gray-500 text-sm transform -translate-y-1/2 z-10 bg-gray-50 px-1"
                    >
                        Email
                    </label>

                </div>

                {/* OTP Input */}
                <div className="relative mb-6">
                    <input
                        type={showOtp ? "text" : "password"} // Toggle between text and password
                        id="otp"
                        className="peer w-full px-4 py-3 rounded-md border-2 bg-transparent border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="OTP"
                        value={otp}
                        disabled={disabledotp}
                        onChange={(e) => setOtp(e.target.value)}
                    />
                    <label
                        htmlFor="otp"
                        className="absolute left-4 top-0 text-gray-500 text-sm transform -translate-y-1/2 z-10 bg-gray-50 px-1"
                    >
                        OTP
                    </label>
                    {otp && (
                        <button
                            className="absolute right-12 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white text-sm px-3 py-1 rounded-md focus:outline-none hover:bg-blue-600"
                            onClick={isSignUp ? handleSignupOtpVerify : handleVerify}
                        >
                            Verify
                        </button>
                    )}
                    {/* Icon to toggle OTP visibility */}
                    <div
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
                        onClick={toggleOtpVisibility}
                    >
                        {showOtp ? <GoEye size={24} /> : <GoEyeClosed size={24} />}
                    </div>
                </div>
                {/* forgot password */}
                {!isSignUp && <p className=" mb-4  text-sm text-blue-500 underline cursor-pointer font-semibold">
                    Forgot Password ?
                </p>
                }
                {/* checkbox */}
                {!isSignUp && <div className="flex items-center space-x-2 mb-4">
                    <Checkbox
                        id="terms"
                        className="flex h-4 w-4 items-center justify-center rounded border-2 border-gray-300 bg-white focus:outline-none focus:ring-1 focus:ring-blue-500"
                    >
                        <CheckIcon className="h-3 w-3 text-blue-500" />
                    </Checkbox>
                    <label
                        htmlFor="terms"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                        Keep me logged in
                    </label>
                </div>}
                {/* Submit Button */}
                <Button className="w-full mb-4 bg-[#367AFF] text-white rounded-[10px] hover:bg-[#367AFF]" onClick={isSignUp ? handleSignUp : handleSignIn} disabled={disabled}>
                    {isSignUp ? "Sign Up" : "Sign In"}
                </Button>
                {/* Separator */}
                <div className="flex items-center my-4">
                    <Separator className="flex-1 bg-gray-300" />
                    <span className="mx-3 text-sm text-gray-500">or</span>
                    <Separator className="flex-1 bg-gray-300" />
                </div>

                {/* Google Login */}
                <Button
                    className="w-full bg-gray-100 text-gray-600 hover:bg-gray-200"
                    type="button" disabled={disabled}
                >
                    {isSignUp ? "Continue with Google" : "Sign in with Google"}
                    <img src={GoogleIcon} alt="google icon" className="h-6 w-6" />
                </Button>

                {/* Footer */}
                <p className="text-center mt-4 text-sm text-gray-500">
                    {isSignUp ? "Already have an account? " : "Need an account? "}
                    <a
                        className="text-blue-500 underline cursor-pointer font-semibold"
                        onClick={() => setSignUp((prev) => !prev)}
                    >
                        {isSignUp ? "Sign in" : "Create one"}
                    </a>
                </p>
            </div>
        </div>
    );
};

export default SignIn;
