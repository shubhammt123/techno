import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const SuccessPayment = () => {
    useEffect(()=>{
        localStorage.removeItem("cart");
    },[])
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-lg w-full text-center">
        <svg
          className="w-24 h-24 mx-auto mb-6 text-green-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2l4 -4m0 0a9 9 0 1 1 -4 0"
          />
        </svg>
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Payment Successful!</h1>
        <p className="text-gray-600 mb-6">
          Thank you for your purchase. Your payment was successful and your order is being processed.
        </p>
        <Link
          to="/"
          className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
};

export default SuccessPayment;