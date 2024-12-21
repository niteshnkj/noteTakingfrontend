import logo from "../assets/logo.png";

const NavBar = () => {
  return (
    <div className="flex justify-center items-center bg-gray-50 relative lg:absolute lg:top-8 lg:left-12 lg:z-10 lg:max-h-screen lg:bg-transparent">
      <div className="flex gap-2 items-center transform translate-y-40 lg:translate-y-0 ">
        <img src={logo} alt="logo" className="lg:h-8 lg:w-8 h-12 w-12" />
        <h1 className="text-black font-bold lg:text-2xl text-4xl">Dashboard</h1>
      </div>
      {/* <p className="absolute top-4 right-4 text-blue-500 underline cursor-pointer font-semibold">Sign Out</p> */}
    </div>
  );
};

export default NavBar;
