import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800">
      <h1 className="text-4xl font-bold text-red-600 mb-4">Oops! Something went wrong.</h1>
      <p className="text-lg">
        We couldn't find the page you're looking for or an unexpected error occurred.
      </p>
      {error && (
        <div className="mt-4 text-center bg-white p-6 rounded shadow-lg">
          <h2 className="text-xl font-semibold">Error Details:</h2>
          <p className="text-red-500 mt-2">Status: {error.status}</p>
          <p className="text-gray-600 mt-1">{error.statusText || "Unknown Error"}</p>
        </div>
      )}
      <button
        onClick={() => (window.location.href = "/")}
        className="mt-6 px-6 py-3 bg-blue-600 text-white text-lg font-medium rounded hover:bg-blue-700"
      >
        Back to Home
      </button>
    </div>
  );
};

export default ErrorPage;

