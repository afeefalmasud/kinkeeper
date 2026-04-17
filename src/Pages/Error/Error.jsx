import React from "react";
import { Link } from "react-router-dom";

export const Error = () => {
  return (
    <div>
      <div className="container mx-auto min-h-screen py-15 px-6 md:px-0">
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-7xl font-extrabold text-[#1F2937]">404</h2>
          <p className="mt-4 text-2xl font-semibold text-[#64748B]">Page Not Found</p>
          <img src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif" alt="" />
          <p className="my-4 text-[18px] font-semibold text-[#1F2937] text-center">The page you're looking for doesn't exist or has been moved.</p>
          <Link to="/" className="btn btn-success">Go Home</Link>
        </div>
      </div>
    </div>
  );
};