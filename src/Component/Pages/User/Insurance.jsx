import React, { useState } from "react";
import {
  FaCheckCircle,
  FaExclamationCircle,
  FaIdCard,
  FaPlus,
  FaReceipt,
  FaShieldAlt,
} from "react-icons/fa";
import moto from "../../../assets/motorins.webp";
import DateFormate from "./DateFormate";
const Insurance = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (!file) {
      alert("Please upload your 10th or above mark sheet.");
      return;
    }
    alert(`Uploaded file: ${file.name}`);
  };

  const insuranceData = [
    {
      id: 1,
      customerMobile: "+91 9876543210",
      amount: "₹5,000",
      premiumAmount: "₹4,750",
      transactionId: "INS001234567",
      date: "2024-10-09",
      customerName: "Ravi Kumar",
      insuranceType: "Health Insurance",
      policyNo: "POL12345678",
      source: "Web",
      status: "Completed",
      complain: "No",
    },
    {
      id: 2,
      customerMobile: "+91 9123456789",
      amount: "₹2,500",
      premiumAmount: "₹2,350",
      transactionId: "INS001234568",
      date: "2024-10-08",
      customerName: "Anita Sharma",
      insuranceType: "Life Insurance",
      policyNo: "POL98765432",
      source: "Mobile",
      status: "Pending",
      complain: "No",
    },
    {
      id: 3,
      customerMobile: "+91 9988776655",
      amount: "₹3,200",
      premiumAmount: "₹3,100",
      transactionId: "INS001234569",
      date: "2024-10-07",
      customerName: "Arjun Singh",
      insuranceType: "Vehicle Insurance",
      policyNo: "POL55566677",
      source: "POS",
      status: "Failed",
      complain: "Yes",
    },
  ];
  return (
    <div>
      <div className="w-full mx-auto mt-[45px] bg-white shadow-sm">
        <div className="flex items-center gap-3 p-4 border-b border-gray-200">
          <FaIdCard className="text-2xl text-gray-700" />
          <h2 className="text-lg md:text-xl font-semibold text-gray-800">
            Insurance
          </h2>
          <div className="w-10 border-b-2 border-blue-500 ml-2"></div>
        </div>
      </div>

      {/* Tax Filing Form Section */}
      <div className="w-full mx-auto mt-5 bg-white rounded-md shadow p-5">
        <div className="mt-1 w-full  pt-3  p-2 bg-white">
          <img
            src={moto}
            alt="AyushPay"
            className="w-full h-auto rounded-lg shadow-md object-cover"
          />

          <div className="flex flex-col md:flex-row gap-0 items-center md:gap-4 w-full lg:max-w-md pb-2"></div>
        </div>

        <div className="  flex items-center justify-center p-4">
          <div className=" w-full rounded-lg ">
            {/* Header */}

            {/* Content Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              {/* Left Column */}
              <div>
                <p className="text-gray-700 text-base leading-relaxed">
                  Become an Insurance Sales Executive at <b>₹0 charges</b> today
                  and get the opportunity to:
                </p>

                <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
                  <li>Become POSP Agent</li>
                  <li>Sell Insurance Products</li>
                  <li>Earn Agent Commission</li>
                </ul>

                <h3 className="font-semibold text-gray-800 mt-6">Note:</h3>
                <ul className="list-disc list-inside text-gray-600 mt-2 space-y-2">
                  <li>
                    Minimum education qualification for an insurance POS agent
                    is 10th Standard.
                  </li>
                  <li>Age eligibility is 18 years and above.</li>
                </ul>

                <p className="text-gray-700 mt-6">
                  To register – kindly upload your 10th or above mark sheet.
                </p>
              </div>

              {/* Right Column */}
              <div className="flex flex-col items-center justify-center w-full">
                <h3 className="text-gray-800 font-medium mb-3">
                  Upload 10th or above mark sheet
                </h3>

                <label
                  htmlFor="file-upload"
                  className="border-2 border-dashed border-blue-400 rounded-lg w-full max-w-sm h-48 flex flex-col items-center justify-center cursor-pointer hover:bg-blue-50 transition"
                >
                  <div className="flex flex-col items-center">
                    <div className="border border-gray-300 rounded-full p-4">
                      <FaPlus className="text-gray-500 text-xl" />
                    </div>
                    <p className="text-gray-500 mt-2">
                      Drag files to upload /{" "}
                      <span className="text-blue-600 font-semibold">
                        Browse
                      </span>
                    </p>
                  </div>
                  <input
                    id="file-upload"
                    type="file"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                </label>

                {file && (
                  <p className="mt-2 text-sm text-gray-700">
                    Selected File:{" "}
                    <span className="font-medium">{file.name}</span>
                  </p>
                )}

                <button
                  onClick={handleUpload}
                  className="mt-4 text-blue-600 font-semibold hover:text-blue-800"
                >
                  Upload
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center mt-6">
          <button className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-10 rounded-full shadow-lg transition w-full sm:w-auto">
            Recharge
          </button>
        </div>
      </div>
      <div className="bg-white rounded-lg mt-8 shadow">
        <DateFormate />
      </div>

      <div className="flex flex-col  bg-gray-50">
        {/* Header */}
        

        {/* Table */}
        <div className="bg-white rounded-lg mt-4 mx-2 md:mx-6 shadow-sm">
          <div className="overflow-x-auto">
            <table className="border border-gray-200 text-sm text-gray-700">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200 text-left text-xs font-semibold text-black uppercase tracking-wider">
                  <th className="px-6 py-3">Customer Mobile</th>
                  <th className="px-6 py-3">Amount</th>
                  <th className="px-6 py-3">Premium Amount</th>
                  <th className="px-6 py-3">Transaction ID</th>
                  <th className="px-6 py-3">Date</th>
                  <th className="px-6 py-3">Customer Name</th>
                  <th className="px-6 py-3">Insurance Type</th>
                  <th className="px-6 py-3">Policy No.</th>
                  <th className="px-6 py-3">Source</th>
                  <th className="px-6 py-3">Status</th>
                  <th className="px-6 py-3">Complain</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-200">
                {insuranceData.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      {item.customerMobile}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {item.amount}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {item.premiumAmount}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {item.transactionId}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">{item.date}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {item.customerName}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {item.insuranceType}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {item.policyNo}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {item.source}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                          item.status === "Completed"
                            ? "bg-green-100 text-green-800"
                            : item.status === "Pending"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {item.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`text-sm font-medium ${
                          item.complain === "Yes"
                            ? "text-red-600"
                            : "text-gray-600"
                        }`}
                      >
                        {item.complain}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex justify-between items-center p-3">
            <div className="text-sm text-gray-700">
              Showing {insuranceData.length} of {insuranceData.length} records
            </div>
            <div className="flex gap-2">
              <button className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50">
                Previous
              </button>
              <button className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Insurance;
