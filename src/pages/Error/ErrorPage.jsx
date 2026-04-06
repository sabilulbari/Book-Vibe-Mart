import { House } from "lucide-react";
import React from "react";
import { Link } from "react-router";


const ErrorPage = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Full Screen Image */}
      <img src="/404.png" alt="404 Illustration" className="absolute inset-0 w-full h-full object-cover" />

      {/* Overlay (dark gradient for readability) */}
      <div className="absolute inset-0 "></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 pt-96 text-gray-600">
        <h1 className="text-4xl md:text-5xl font-bold drop-shadow-lg">Oops! Page not found</h1>

        <p className="mt-4 max-w-md text-sm md:text-lg text-gray-600 ">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>

        <div className="mt-6">
          <Link to="/" className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full shadow-lg transition duration-300 text-white">
            <House></House> Go Back Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
