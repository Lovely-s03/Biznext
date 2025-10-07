import React, { useState } from "react";
import ayushpay from "../../../assets/ayushpay_banner (1).webp";

const AyushPay = () => {
    const [filters, setFilters] = useState({
    searchTerm: '',
    fromDate: '',
    toDate: '',
    status: '',
    source: ''
  });

  // Sample data - replace with your actual data
  const transactions = [
    {
      id: 1,
      txnDate: '2024-01-15',
      transactionId: 'TXN001234567',
      customerName: 'John Doe',
      mobile: '+1234567890',
      status: 'Completed',
      source: 'Web'
    },
    {
      id: 2,
      txnDate: '2024-01-15',
      transactionId: 'TXN001234568',
      customerName: 'Jane Smith',
      mobile: '+1234567891',
      status: 'Pending',
      source: 'Mobile'
    },
    {
      id: 3,
      txnDate: '2024-01-14',
      transactionId: 'TXN001234569',
      customerName: 'Mike Johnson',
      mobile: '+1234567892',
      status: 'Failed',
      source: 'POS'
    },
    // Add more transactions as needed
  ];

  // Handle filter changes
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle search/filter
  const handleSearch = () => {
    // Implement your search/filter logic here
    console.log('Applying filters:', filters);
    // You would typically filter the transactions data based on the filters
  };

  // Handle reset filters
  const handleReset = () => {
    setFilters({
      searchTerm: '',
      fromDate: '',
      toDate: '',
      status: '',
      
    });
  };
  return (
    <div className="flex flex-col  min-h-screen p-6 bg-gray-50">
      {/* Image Section */}
      <div className="mb-8 w-full shadow">
        <img
          src={ayushpay}
          alt="AyushPay"
          className="w-full h-auto rounded-lg shadow-md object-cover"
        />
      </div>


      <div className="flex flex-col md:flex-row items-center gap-4 w-full max-w-xs">
  <div className="w-full">
    <input
      type="tel"
      placeholder="Enter your phone number"
      className="w-full md:w-[250px] px-6 py-3 text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-center"
    />
  </div>
  <div className="w-full mt-4 pb-4">
    <button className="px-3 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-200 shadow-md">
      Register
    </button>
  </div>
</div>


<div className="p-6 bg-white rounded-lg shadow-md">
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6 gap-4">
        <h1 className="text-xl font-semibold text-gray-800">View Latest Transactions</h1>
      </div>

      {/* Filters Section */}
      <div className="bg-gray-50 p-4 rounded-lg mb-6">
       <div className="bg-gray-50 p-4 rounded-lg mb-6">
  {/* Single row of filters */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 mb-4">
    {/* Search Input */}
    <div className="lg:col-span-2">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Transaction ID or Mobile
      </label>
      <input
        type="text"
        name="searchTerm"
        value={filters.searchTerm}
        onChange={handleFilterChange}
        placeholder="Transaction Id or Mobile Number"
        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
    </div>

    {/* From Date */}
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        From Date
      </label>
      <input
        type="date"
        name="fromDate"
        value={filters.fromDate}
        onChange={handleFilterChange}
        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
    </div>

    {/* To Date */}
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        To Date
      </label>
      <input
        type="date"
        name="toDate"
        value={filters.toDate}
        onChange={handleFilterChange}
        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
    </div>

    {/* Status Filter */}
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Status
      </label>
      <select
        name="status"
        value={filters.status}
        onChange={handleFilterChange}
        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      >
        <option value="">All Status</option>
        <option value="Completed">Completed</option>
        <option value="Pending">Pending</option>
        <option value="Failed">Failed</option>
      </select>
    </div>

    {/* Source Filter */}
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Source
      </label>
      <select
        name="source"
        value={filters.source}
        onChange={handleFilterChange}
        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      >
        <option value="">All Sources</option>
        <option value="Web">Web</option>
        <option value="Mobile">Mobile</option>
        <option value="POS">POS</option>
      </select>
    </div>
  </div>

  {/* Action Buttons */}
  <div className="flex flex-col sm:flex-row gap-3 justify-end">
    <button
      onClick={handleReset}
      className="px-6 py-2 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition duration-200 whitespace-nowrap"
    >
      RESET
    </button>
    <button
      onClick={handleSearch}
      className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-200 whitespace-nowrap"
    >
      SEARCH
    </button>
  </div>
</div>

       
      
      </div>

      {/* Table Section */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                TXN Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Transaction ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Customer Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Mobile
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Source
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
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                    transaction.status === 'Completed' 
                      ? 'bg-green-100 text-green-800'
                      : transaction.status === 'Pending'
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {transaction.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {transaction.source}
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
      <div className="flex justify-between items-center mt-6">
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
  );
};

export default AyushPay;
