import React from "react";

const WaitingApproval = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="text-center bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-semibold text-gray-800">Waiting for Approval</h1>
        <p className="text-xl text-gray-600 mt-4">Your request is under review. Please wait for approval.</p>
        <p className="text-lg text-gray-500 mt-2">We will notify you once the approval process is complete.</p>
      </div>
    </div>
  );
};

export default WaitingApproval;
