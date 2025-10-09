import React from 'react'
import loan from "../../../assets/loan.webp"
import DateFormate from './DateFormate'
import { FaMoneyCheckAlt } from "react-icons/fa";

const Loan = () => {


    const transactions = [
    {
      id: 1,
      txnDate: "2024-01-15",
      transactionId: "TXN001234567",
      customerName: "John Doe",
      mobile: "+1234567890",
      loanAmount: "$5,000",
      productType: "Personal Loan",
      source: "Web",
      status: "Completed",
      checkStatus: "Verified",
      offers: "5% Cashback",
    },
    {
      id: 2,
      txnDate: "2024-01-15",
      transactionId: "TXN001234568",
      customerName: "Jane Smith",
      mobile: "+1234567891",
      loanAmount: "$10,000",
      productType: "Home Loan",
      source: "Mobile",
      status: "Pending",
      checkStatus: "In Progress",
      offers: "Free Insurance",
    },
    {
      id: 3,
      txnDate: "2024-01-14",
      transactionId: "TXN001234569",
      customerName: "Mike Johnson",
      mobile: "+1234567892",
      loanAmount: "$8,000",
      productType: "Car Loan",
      source: "POS",
      status: "Failed",
      checkStatus: "Rejected",
      offers: "None",
    },
  ];
  return (
    <div>

         <div className="w-full  mx-auto  mt-[45px] bg-white ">
                <div className="flex items-center gap-3 p-4 border-gray-300 ">
                  <FaMoneyCheckAlt className="text-2xl text-gray-700" />
                  <h2 className="text-lg md:text-xl font-semibold text-gray-800">
                    Loan
                  </h2>
                  <div className="w-10 border-b-2 border-blue-500 ml-2"></div>
                </div>
              </div>
       <div className="mt-5 flex flex-col items-center justify-center bg-white p-5">
              
            {/* Banner Section */}
            <div className="relative w-full max-w-6xl overflow-hidden rounded-2xl shadow-lg ">
              <img
                src={loan} // Make sure this image is in your public folder
                alt="Buy 24K 999 Pure Gold Online"
                className="w-full h-auto object-cover"
              />
      
              {/* Overlay Text Section */}
             
            </div>
      
            {/* Form Section */}
            <div className="flex flex-col md:flex-row gap-4 mt-8 w-full max-w-3xl justify-center">
              <input
                type="tel"
                placeholder="mobile no"
                className="border rounded-xl px-4 py-3 w-full md:w-1/2 focus:ring-2 focus:ring-yellow-400"
              />
              <input
                type="text"
                placeholder="PAN no"
                className="border rounded-xl px-4 py-3 w-full md:w-1/2 focus:ring-2 focus:ring-yellow-400"
              />
            </div>
      
            {/* Buttons */}
            <div className="flex gap-6 mt-6">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition">
                CHECK LEAD
              </button>
              {/* <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition">
                OPEN LINK
              </button> */}
            </div>
            
            
          </div>
          <div className=" bg-white rounded-lg  mt-8  ">
        <DateFormate />
        <div className="overflow-x-auto">
         <table className="min-w-full bg-white border border-gray-200">
  <thead>
    <tr className="bg-gray-50 border-b border-gray-200">
      <th className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">
        TXN Date
      </th>
      <th className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">
        Transaction ID
      </th>
      <th className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">
        Customer
      </th>
      <th className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">
        Mobile
      </th>
      <th className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">
        Loan Amount
      </th>
      <th className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">
        Customer Name
      </th>
      <th className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">
        Product Type
      </th>
      <th className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">
        Source
      </th>
      <th className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">
        Status
      </th>
      <th className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">
        Check Status
      </th>
      <th className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">
        Offers
      </th>
    </tr>
  </thead>
  <tbody className="divide-y divide-gray-200">
    {transactions.map((transaction) => (
      <tr key={transaction.id} className="hover:bg-gray-50">
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
          {transaction.txnDate}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
          {transaction.transactionId}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
          {transaction.customerName}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
          {transaction.mobile}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
          {transaction.loanAmount}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
          {transaction.customerName}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
          {transaction.productType}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
          {transaction.source}
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <span
            className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
              transaction.status === "Completed"
                ? "bg-green-100 text-green-800"
                : transaction.status === "Pending"
                ? "bg-yellow-100 text-yellow-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {transaction.status}
          </span>
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
          {transaction.checkStatus}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
          {transaction.offers}
        </td>
      </tr>
    ))}
  </tbody>
</table>

        </div>

        {/* Empty State */}
        {transactions.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            No transactions found
          </div>
        )}

        {/* Pagination (optional) */}
        <div className="flex justify-between items-center p-2">
          <div className="text-sm text-gray-700">
            Showing {transactions.length} of {transactions.length} transactions
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
  )
}

export default Loan
