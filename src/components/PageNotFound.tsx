import { Link } from "react-router-dom";


const PageNotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-gray-800">
            <h1 className="text-6xl font-bold mb-4">404</h1>
            <p className="text-2xl mb-6">Oops! Page Not Found</p>
            <Link to="/"

                className="px-6 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
            >
                Go Back Home
            </Link>
        </div>
    );
};

export default PageNotFound;
