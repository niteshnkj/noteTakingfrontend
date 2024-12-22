import SignIn from "./SignIn"
import banner from "../assets/image.png"


const AuthPage = () => {
  return (
    <div className="flex h-screen bg-gray-50">
            <div className="w-full h-full lg:w-2/4 flex flex-col justify-center items-center px:2 lg:px-10">
                <SignIn />
            </div>
            <div className="w-1/2 h-full hidden lg:block p-4 rounded-lg">
            <img
                    src={banner}
                    alt="Banner"
                    className="w-full h-full object-cover  rounded-2xl"
                />
            </div>
        </div>
  )
}

export default AuthPage