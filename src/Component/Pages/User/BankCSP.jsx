import React from "react";
import kiosk from "../../../assets/Kiosk Banking.svg";
import baroda from "../../../assets/Bank Of Baroda.svg";
import jana from "../../../assets/Jana Small Finance Bank (1).svg";
import nsdl from "../../../assets/NSDL Payments Bank.svg";
import sbi from "../../../assets/State Bank Of India.svg";
import { PiBankFill } from "react-icons/pi";

const BankCSP = () => {
  return (
    <div className="p-2 border bg-gray-50 rounded-lg">
      {/* Title */}
      <div className="w-full  mx-auto  mt-[45px] ">
        <div className="flex items-center gap-3 p-4 bg-white border-gray-300 ">
          <PiBankFill className="text-2xl text-gray-700" />
          <h2 className="text-lg md:text-xl font-semibold text-gray-800">
            Bank CSP
          </h2>
          <div className="w-10 border-b-2 border-blue-500 ml-2"></div>
        </div>
      </div>

      {/* Top Banner */}
      <div className="mb-8 w-full shadow pt-4">
        <img
          src={kiosk}
          alt="Kiosk Banking"
          className="w-full h-auto rounded-lg shadow-md object-cover"
        />
      </div>

      {/* Three Bank Logos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="flex ">
          <img
            src={baroda}
            alt="Bank of Baroda"
            className="w-full h-32 object-contain"
          />
        </div>

        <div className="flex ">
          <img
            src={jana}
            alt="Jana Small Finance Bank"
            className="w-full h-32 object-contain"
          />
        </div>

        <div className="flex ">
          <img
            src={nsdl}
            alt="NSDL Payments Bank"
            className="w-full h-32 object-contain"
          />
        </div>

        <div className="flex ">
          <img
            src={sbi}
            alt="SBI Bank"
            className="w-full h-32 object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default BankCSP;
