import React from "react";
import { FaIdCard } from "react-icons/fa";
import DateFormate from "./DateFormate";
import master from "../../../assets/mastercard.svg"

export default function CardPaymentForm() {
  return (
    <>
      <div className="w-full mx-auto mt-[45px] bg-white shadow-sm">
              <div className="flex items-center gap-3 p-4 border-b border-gray-200">
                <FaIdCard className="text-2xl text-gray-700" />
                <h2 className="text-lg md:text-xl font-semibold text-gray-800">
                  Credit Card
                </h2>
                <div className="w-10 border-b-2 border-blue-500 ml-2"></div>
              </div>
            </div>
      <div className=" flex items-center justify-center pt-8">
        <div className="w-full  bg-white shadow-xl rounded-2xl p-8">
          {/* Card Logos */}
          <div className="flex justify-center gap-6 mb-6">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg"
              alt="Visa"
              className="h-12"
            />
            <img
              src={master}
              alt="Mastercard"
              className="h-12 object-contain"
            />
          </div>

          {/* Form */}
          <form className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card Number */}
            <div className="col-span-1 md:col-span-3">
              <label className="block text-gray-700 font-medium mb-2">
                Card Number <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter card number"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Mobile */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Mobile <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter mobile number"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Name */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Amount */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Amount <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                placeholder="Enter amount"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Payee Name */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Payee Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter payee name"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Remarks */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Remarks <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter remarks"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Note */}
            <div className="col-span-1 md:col-span-3 mt-4">
              <p className="text-gray-600 text-sm font-semibold text-center">
                Note: Kindly cross-check the card number before proceeding with
                the transaction. If deposited in the wrong card, we will not be
                responsible for the retrieval of the amount.
              </p>
            </div>

            {/* Button */}
            <div className="col-span-1 md:col-span-3 flex justify-center mt-6">
              <button
                type="button"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-10 py-3 rounded-full transition duration-200"
              >
                GET OTP
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="bg-white rounded-lg mt-8 shadow"> 
        <DateFormate/>
      </div>
    </>
  );
}
