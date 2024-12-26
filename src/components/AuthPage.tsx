import SignIn from "./SignIn"

const AuthPage = () => {
 
  return (
    
      <div className="flex h-screen bg-gray-50">
        <div className="w-full h-full lg:w-2/4 flex flex-col justify-center items-center px:2 lg:px-10">
          <SignIn />
        </div>
        <div className="w-1/2 h-full hidden lg:block p-4 rounded-lg">
          <img
            src="https://res.cloudinary.com/do9s5cxxl/image/upload/v1735205815/image_qehov0.png"
            alt="Banner"
            className="w-full h-full object-cover  rounded-2xl"
          />
        </div>
      </div>
   
  )
}

export default AuthPage