import React from "react";

const Aadhar = () => {
  return (
    <>
      <div className="w-full  mx-auto  mt-[45px] bg-white mb-5">
        <div className="flex items-center gap-3 p-4 border-gray-300 ">
          <h2 className="text-lg md:text-xl font-semibold text-gray-800">
            E-KYC using OTP and Aadhaar
          </h2>
          <div className="w-10 border-b-2 border-blue-500 ml-2"></div>
        </div>
      </div>
      <div className="p-5 bg-white rounded shadow-md  mx-auto ">
        {/* Aadhaar/VID Input and Button */}
        <div className="flex items-center space-x-4 mb-8">
          <div className="relative flex-1">
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2">
              {/* Aadhaar icon placeholder */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <rect x="3" y="7" width="18" height="10" rx="2" />
                <rect x="7" y="10" width="2" height="2" />
                <rect x="15" y="10" width="2" height="2" />
              </svg>
            </span>
            <input
              type="text"
              className="pl-10 pr-10 py-3 border rounded w-full focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Aadhaar Number / VID"
            />
            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer">
              {/* Eye icon placeholder */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  d="M1.5 12a10.5 10.5 0 0 1 21 0c-1.5 3.5-6 6-10.5 6S3 15.5 1.5 12z"
                  strokeWidth="2"
                />
                <circle cx="12" cy="12" r="3" />
              </svg>
            </span>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded shadow">
            SEND OTP
          </button>
        </div>
        {/* Checkbox and Consent Text */}
        <div className="flex items-start space-x-3">
          <input
            type="checkbox"
            className="mt-1 h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          />
          <label className="text-sm font-semibold text-gray-500 leading-6">
            I the undersigned, the holder of the AADHAAR Number hereby give my
            consent to obtain my Aadhaar Number & biometrics for authentication
            with the Unique Identification Authority of India (UIDAI). I have
            been informed that my identity information will be used only for
            AEPS(Aadhaar Enabled Payment System) Balance Enquiry purposes and
            that my biometrics will not be stored/shared and will be submitted
            to Central Identity Data Repository (CIDR) only for purpose of
            authenticating my identity.
          </label>
        </div>
      </div>
    </>
  );
};

export default Aadhar;
