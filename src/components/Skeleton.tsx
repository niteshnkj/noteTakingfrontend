const Skeleton = () => {
    return (
      <div className="flex h-screen bg-gray-50 animate-pulse">
        {/* Left Section */}
        <div className="w-full h-full lg:w-2/4 flex flex-col justify-center items-center px-2 lg:px-10">
          <div className="flex justify-center items-center w-full h-screen font-inter">
            <div className="w-full max-w-md p-6">
              {/* Title */}
              <div aria-hidden="true" className="h-8 w-32 bg-gray-300 rounded mb-4"> </div>
              {/* Subtitle */}
              <div aria-hidden="true" className="h-4 w-64 bg-gray-300 rounded mb-6"></div>
  
              {/* Name Input */}
              <div aria-hidden="true" className="h-12 w-full bg-gray-300 rounded mb-4"></div>
              {/* Date Picker */}
              <div aria-hidden="true" className="h-12 w-full bg-gray-300 rounded mb-4"></div>
              {/* Email Input */}
              <div aria-hidden="true" className="h-12 w-full bg-gray-300 rounded mb-4"></div>
              {/* OTP Input */}
              <div aria-hidden="true" className="h-12 w-full bg-gray-300 rounded mb-6"></div>
  
              {/* Forgot Password */}
              <div aria-hidden="true" className="h-4 w-32 bg-gray-300 rounded mb-4"></div>
  
              {/* Checkbox */}
              <div className="flex items-center space-x-2 mb-4">
                <div aria-hidden="true" className="h-4 w-4 bg-gray-300 rounded"></div>
                <div aria-hidden="true" className="h-4 w-24 bg-gray-300 rounded"></div>
              </div>
  
              {/* Submit Button */}
              <div aria-hidden="true" className="h-12 w-full bg-gray-300 rounded mb-4"></div>
  
              {/* Separator */}
              <div className="flex items-center my-4">
                <div aria-hidden="true" className="flex-1 h-px bg-gray-300"></div>
                <div aria-hidden="true" className="h-4 w-8 bg-gray-300 mx-3 rounded"></div>
                <div aria-hidden="true" className="flex-1 h-px bg-gray-300"></div>
              </div>
  
              {/* Google Login */}
              <div aria-hidden="true" className="h-12 w-full bg-gray-300 rounded mb-4"></div>
  
              {/* Footer */}
              <div aria-hidden="true" className="h-4 w-64 bg-gray-300 rounded mt-4"></div>
            </div>
          </div>
        </div>
  
        {/* Right Section */}
        <div className="w-1/2 h-full hidden lg:block p-4 rounded-lg">
          <div aria-hidden="true" className="w-full h-full bg-gray-300 rounded-2xl"></div>
        </div>
      </div>
    );
  };
  
  export default Skeleton;
  