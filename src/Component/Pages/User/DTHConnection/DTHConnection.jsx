import React from "react";
import { FaSatelliteDish } from "react-icons/fa";

const DTHConnection = () => {
  return (
    <div className="w-full  mx-auto  mt-[45px] ">
      <div className="flex items-center gap-3 p-4 bg-white border-gray-300 ">
        <FaSatelliteDish className="text-2xl text-gray-700" />
        <h2 className="text-lg md:text-xl font-semibold text-gray-800">
          DTH Connection
        </h2>
        <div className="w-10 border-b-2 border-blue-500 ml-2"></div>
      </div>

     
    </div>
  );
};

export default DTHConnection;
