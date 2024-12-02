import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-100 to-blue-50 text-gray-800 p-6">
      <div className="text-center">
        <h1 className="text-5xl font-extrabold text-red-600 mb-4">Oops!</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">
          Something went wrong.
        </h2>
        <p className="text-gray-600 text-lg">
          We couldn't find the page you're looking for or an unexpected error occurred.
        </p>
      </div>

      {error && (
        <div className="mt-8 max-w-md w-full bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold text-gray-800">Error Details</h2>
          <p className="text-red-500 mt-2 text-sm">
            Status: {error.status || "N/A"}
          </p>
          <p className="text-gray-600 mt-1 text-sm">
            {error.statusText || "An unknown error occurred."}
          </p>
        </div>
      )}

      <button
        onClick={() => (window.location.href = "/")}
        className="mt-10 px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-lg font-medium rounded-md shadow-lg hover:from-blue-500 hover:to-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300 transition duration-300"
      >
        Back to Home
      </button>
    </div>
  );
};

export default ErrorPage;
