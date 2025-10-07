import React from "react";
import kiosk from "../../../assets/Kiosk Banking.svg";
import baroda from "../../../assets/Bank Of Baroda.svg";
import jana from "../../../assets/Jana Small Finance Bank (1).svg";
import nsdl from "../../../assets/NSDL Payments Bank.svg";
import sbi from "../../../assets/State Bank Of India.svg";

const BankCSP = () => {
  return (
    <div className="p-6 border bg-gray-50 rounded-lg">
      {/* Title */}
      <div className="pb-4 font-semibold text-gray-800">Bank CSP</div>

      {/* Top Banner */}
      <div className="mb-8 w-full shadow">
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
