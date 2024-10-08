import React from 'react';
import { Link } from 'react-router-dom';

const CancelPayment = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-lg w-full text-center">
        <svg
          className="w-24 h-24 mx-auto mb-6 text-red-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4m0 4h.01M19.293 4.707a1 1 0 0 0-1.414 0L12 10.586 6.121 4.707a1 1 0 0 0-1.414 1.414L10.586 12l-5.879 5.879a1 1 0 1 0 1.414 1.414L12 13.414l5.879 5.879a1 1 0 1 0 1.414-1.414L13.414 12l5.879-5.879a1 1 0 0 0 0-1.414z"
          />
        </svg>
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Payment Cancelled</h1>
        <p className="text-gray-600 mb-6">
          Your payment was not successful. Please try again or contact support if you continue to experience issues.
        </p>
        <Link
          to="/"
          className="inline-block bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default CancelPayment;