import React, { useState } from "react";
import { FaRupeeSign, FaEquals, FaUniversity, FaTrain, FaUsers, FaSatelliteDish, FaShoppingCart } from "react-icons/fa";
import axis from "../../../../assets/upload_1_638811635039160031-axis cdm.jpeg";
import airtel from "../../../../assets/upload_1_638545633414347738-Airtel HD 1.jpg";
import printer from "../../../../assets/upload_1_637459704613886810-Print Device Images.png";
import mantra from "../../../../assets/upload_1_638866022219776632-mantra.jpg";
import startek from "../../../../assets/upload_1_638851402424451391-Startek.jpg";
import branding from "../../../../assets/upload_1_638652612946646436-Branding kit.jpeg";
import boxsd from "../../../../assets/upload_1_638525695107296980-HD-Box-for-Multi.png";
import boxhd from "../../../../assets/upload_1_638525695107296980-HD-Box-for-Multi.png";
import bizMan from "../../../../assets/biz-boost-rocket.png";
import { GiMoneyStack } from "react-icons/gi";
import { MdOutlineAccountBalance, MdPrint } from "react-icons/md";
import { BsCreditCard2Back } from "react-icons/bs";

const tabs = [
  "Service",
  "Product",
  "Combo Product",
  "Bulk Buying",
  "Gold Biz-Boost",
  "Platinum Biz-Boost",
  "Already Purchased",
];

const services = [
  {
    id: 1,
    icon: <FaRupeeSign size={28} className="text-blue-600" />,
    title: "Courier",
    subtitle: "Courier",
    price: 1499,
  },
  {
    id: 2,
    icon: <FaEquals size={28} className="text-blue-600" />,
    title: "Ayushman Bharat",
    subtitle: "Ayushman Bharat",
    price: 1180,
  },
  {
    id: 3,
    icon: <FaUniversity size={28} className="text-blue-600" />,
    title: "Digi Khata",
    subtitle: "Wallet Money",
    price: 0,
  },
  {
    id: 4,
    icon: <FaTrain size={28} className="text-blue-600" />,
    title: "IRCTC",
    subtitle: "Train",
    price: 1999,
  },
  {
    id: 5,
    icon: <FaTrain size={28} className="text-blue-600" />,
    title: "PAN",
    subtitle: "E-pan",
    price: 1999,
  },
  {
    id: 6,
    icon: <FaTrain size={28} className="text-blue-600" />,
    title: "Solar Connection",
    subtitle: "Solar Connection",
    price: 1999,
  },
  {
    id: 7,
    icon: <FaTrain size={28} className="text-blue-600" />,
    title: "Bank Account",
    subtitle: "Bank Account",
    price: 1999,
  },
];

const products = [
  { id: 1, image: axis, title: "AXIS CDM Card", price: 49 },
  { id: 2, image: airtel, title: "Airtel HD BOX With Installation", price: 1399 },
  { id: 3, image: printer, title: "Bluetooth Thermal Printer", price: 3299 },
  { id: 4, image: mantra, title: "Mantra MFS 110 L1", price: 2999 },
  { id: 5, image: startek, title: "Startek Biometric L1", price: 2800 },
  { id: 6, image: branding, title: "Store Branding Kit", price: 599 },
  { id: 7, image: boxsd, title: "Airtel Bachat Box SD", price: 1200 },
  { id: 8, image: boxhd, title: "Airtel Bachat Box HD", price: 1499 },
  { id: 9, image: boxhd, title: "Airtel Bachat Box HD", price: 1499 },
  { id: 10, image: boxhd, title: "Airtel Bachat Box HD", price: 1499 },
];

const services1 = [
  {
    id: 1,
    icon: <FaUniversity className="text-4xl text-blue-700 mx-auto" />,
    title: "AyushPay",
    subtitle: "AyushPay",
    amount: "0",
    status: "Already Purchased",
  },
  {
    id: 2,
    icon: <MdPrint className="text-4xl text-blue-700 mx-auto" />,
    title: "Physical Product",
    subtitle: "MATM Pro",
    amount: "0",
    status: "Already Purchased",
  },
  {
    id: 3,
    icon: <MdPrint className="text-4xl text-blue-700 mx-auto" />,
    title: "Physical Product",
    subtitle: "MATM Lite",
    amount: "0",
    status: "Already Purchased",
  },
  {
    id: 4,
    icon: <MdOutlineAccountBalance className="text-4xl text-blue-700 mx-auto" />,
    title: "Bank CSP",
    subtitle: "Bank CSP",
    amount: "0",
    status: "Already Purchased",
  },
  {
    id: 5,
    icon: <FaRupeeSign className="text-4xl text-blue-700 mx-auto" />,
    title: "MATM",
    subtitle: "Mini ATM",
    amount: "0",
    status: "Already Purchased",
  },
  {
    id: 6,
    icon: <FaRupeeSign className="text-4xl text-blue-700 mx-auto" />,
    title: "Money Transfer",
    subtitle: "Channel 2",
    amount: "0",
    status: "Already Purchased",
  },
  {
    id: 7,
    icon: <GiMoneyStack className="text-4xl text-blue-700 mx-auto" />,
    title: "Loan",
    subtitle: "Loan",
    amount: "0",
    status: "Already Purchased",
  },
  {
    id: 8,
    icon: <FaUsers className="text-4xl text-blue-700 mx-auto" />,
    title: "Sell & Earn",
    subtitle: "Lead Generation",
    amount: "0",
    status: "Already Purchased",
  },
];


const AddService = () => {
  const [activeTab, setActiveTab] = useState("Service");
   const [activePlan, setActivePlan] = useState("Monthly");

  const plans = [
    { label: "Monthly", price: "₹499" },
    { label: "Quarterly", price: "₹1299" },
    { label: "Yearly", price: "₹2999" },
  ];

  const dataTables = [
    {
      title: "AEPS",
      rows: [
        ["0.00 - 100.00", "₹0.00", "₹0.00"],
        ["101.00 - 1499.00", "0.20%", "0.25%"],
        ["1500.00 - 2999.00", "0.23%", "0.28%"],
        ["3000.00 - 6999.00", "₹9.00", "₹11.00"],
        ["7000.00 - 10000.00", "₹10.50", "₹13.00"],
      ],
    },
    {
      title: "Money Transfer",
      rows: [
        ["2.0 - 1000.0", "₹5", "₹6"],
        ["1001.0 - 1500.0", "48%", "52%"],
        ["1501.0 - 2000.0", "50%", "55%"],
        ["2001.0 - 3000.0", "53%", "58%"],
        ["3001.0 - 4000.0", "54%", "60%"],
        ["4001.0 - 5000.0", "60%", "65%"],
      ],
    },
    {
      title: "Micro ATM",
      rows: [
        ["0.00 - 100.00", "₹0.00", "₹0.00"],
        ["101.00 - 1499.00", "0.20%", "0.25%"],
        ["1500.00 - 2999.00", "0.23%", "0.28%"],
        ["3000.00 - 6999.00", "₹9.00", "₹10.00"],
        ["7000.00 - 10000.00", "₹10.00", "₹12.00"],
      ],
    },
    {
      title: "DISCOUNT BOOSTER",
      rows: [
        ["IRCTC", "₹1999.00", "₹1599.00"],
        ["Courier", "₹1499.00", "₹1199.00"],
        ["MATM Pro", "₹1769.00", "₹1399.00"],
        ["Bluetooth Thermal Printer", "₹3299.00", "₹2799.00"],
        ["Bank Account", "₹1180.00", "₹1180.00"],
      ],
    },
  ];

  return (
    <section className="w-full mt-16">
      <div className="flex items-center gap-3 p-4 bg-white border-gray-300 ">
              <FaShoppingCart className="text-2xl text-gray-700" />
              <h2 className="text-lg md:text-xl font-semibold text-gray-800">
               Service Packs
              </h2>
              <div className="w-10 border-b-2 border-[#000080] ml-2"></div>
            </div>
      {/* TAB BAR */}
      <div className="w-full flex justify-center items-center bg-gray-100 py-4">
        <div className="w-full  bg-white shadow-md rounded-md overflow-x-auto">
          <div className="flex justify-start  bg-white">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-4 font-medium text-sm md:text-base border whitespace-nowrap border-gray-200 transition-all duration-300 
                ${
                  activeTab === tab
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* CONDITIONAL CONTENT */}
      <div className="max-w-7xl mx-auto mt-8">
        {/* Service Tab */}
        {activeTab === "Service" && (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white shadow-md rounded-2xl flex flex-col items-center justify-between p-6 text-center transition-transform hover:scale-105"
              >
                <div className="flex flex-col items-center space-y-4">
                  {service.icon}
                  <h3 className="text-lg font-semibold">{service.title}</h3>
                  <p className="text-gray-500">{service.subtitle}</p>
                  <p className="text-black font-semibold flex items-center justify-center gap-1">
                    💰 {service.price}
                  </p>
                </div>
                <button className="mt-6 bg-blue-600 text-white rounded-full px-8 py-2 font-medium hover:bg-blue-700 transition">
                  BUY
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Product & Bulk Buying Tabs */}
        {(activeTab === "Product" || activeTab === "Bulk Buying") && (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((item) => (
              <div
                key={item.id}
                className="bg-white shadow-md rounded-2xl flex flex-col items-center justify-between p-6 text-center transition-transform hover:scale-105"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-24 h-24 object-contain"
                />
                <h3 className="mt-4 text-gray-600 font-medium">Physical Product</h3>
                <p className="text-black font-semibold">{item.title}</p>
                <p className="flex items-center justify-center gap-1 mt-2">
                  💰 {item.price}
                </p>
                <button className="mt-4 bg-blue-600 text-white rounded-full px-8 py-2 font-medium hover:bg-blue-700 transition">
                  BUY
                </button>
              </div>
            ))}
          </div>
        )}

 {activeTab === "Combo Product" && (
          <div className="flex justify-center items-center">
            <p className="text-lg font-semibold text-blue-700">
              Coming Soon: Combo Product ✨
            </p>
          </div>
        )}
        {/* Gold Biz-Boost Tab */}
        {activeTab === "Gold Biz-Boost" && (
         <section className="bg-[#0A2AA3] py-10 px-4 flex justify-center">
      <div className="w-full max-w-6xl bg-white rounded-xl shadow-lg p-6 border-4 border-[#0A2AA3]">
        
        <div className="flex flex-col items-center text-center mb-4">
          <div className="flex items-center justify-center gap-3">
            <img src={bizMan} alt="Biz Man" className="w-12 h-12 object-contain" />
            <h1 className="text-3xl md:text-4xl font-bold text-[#0A2AA3]">
              BIZNEXT BIZ-BOOST PLAN
            </h1>
          </div>
        </div>

        <div className="bg-[#0A2AA3] rounded-lg overflow-hidden mb-6">
          <div className="flex flex-col md:flex-row">
            {/* Left Red Box */}
            <div className="bg-red-600 text-white font-bold text-lg md:text-xl py-4 px-10 text-center w-full md:w-1/5">
              BIZ-BOOST <br /> GOLD
            </div>

            {/* Right Plans */}
            <div className="flex flex-1 text-white text-center">
              {plans.map((plan) => (
                <div
                  key={plan.label}
                  onClick={() => setActivePlan(plan.label)}
                  className={`flex-1 cursor-pointer py-4 border-l border-white transition-all ${
                    activePlan === plan.label
                      ? "bg-white text-[#0A2AA3] font-semibold"
                      : "bg-[#0A2AA3] hover:bg-blue-900"
                  }`}
                >
                  <p className="uppercase font-semibold">{plan.label}</p>
                  <p className="text-lg">{plan.price}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Commission Booster Button */}
        <div className="flex justify-center mb-6">
          <button className="bg-red-600 text-white font-semibold text-lg rounded-md px-8 py-2 hover:bg-red-700 transition">
            COMMISSION BOOSTER
          </button>
        </div>

        {/* Tables Section */}
        <div className="space-y-8">
          {dataTables.map((table, index) => (
            <div
              key={index}
              className="bg-[#E8F0FE] border-2 border-[#0A2AA3] rounded-lg overflow-hidden"
            >
              <div className="bg-[#0A2AA3] text-white font-semibold py-2 px-4 text-left rounded-t-lg">
                {table.title}
              </div>
              <table className="w-full border-collapse text-sm md:text-base">
                <thead>
                  <tr className="bg-[#0A2AA3] text-white text-left">
                    <th className="py-2 px-4">
                      {table.title === "DISCOUNT BOOSTER"
                        ? "Service/Product"
                        : "Transaction Slab (₹)"}
                    </th>
                    <th className="py-2 px-4">Regular Commission</th>
                    <th className="py-2 px-4">Biz-Boost Gold</th>
                  </tr>
                </thead>
                <tbody>
                  {table.rows.map((row, i) => (
                    <tr
                      key={i}
                      className={`text-center ${
                        i % 2 === 0 ? "bg-[#F1F6FF]" : "bg-[#DCE8FF]"
                      }`}
                    >
                      <td className="py-2 px-4">{row[0]}</td>
                      <td className="py-2 px-4">{row[1]}</td>
                      <td className="py-2 px-4">{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>

        {/* Bottom Plan Tabs */}
        <div className="flex justify-center mt-8 gap-4 flex-wrap">
          {plans.map((plan) => (
            <button
              key={plan.label}
              onClick={() => setActivePlan(plan.label)}
              className={`px-8 py-2 rounded-full font-semibold border-2 border-[#0A2AA3] transition-all ${
                activePlan === plan.label
                  ? "bg-[#0A2AA3] text-white"
                  : "bg-white text-[#0A2AA3] hover:bg-blue-100"
              }`}
            >
              {plan.label}
            </button>
          ))}
        </div>
      </div>
    </section>
        )}

        {/* Platinum Biz-Boost Tab (optional same layout or new image later) */}
        {activeTab === "Platinum Biz-Boost" && (
          <div className="flex justify-center items-center">
            <p className="text-lg font-semibold text-blue-700">
              Coming Soon: Platinum Biz-Boost Plans ✨
            </p>
          </div>
        )}
         {activeTab === "Already Purchased" && (
         <div>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services1.map((service) => (
            <div
              key={service.id}
              className="rounded-xl bg-white shadow-sm border border-gray-200 text-center p-6 hover:shadow-lg transition-all"
            >
              <div className="mb-3">{service.icon}</div>
              <h3 className="font-semibold text-gray-800">{service.title}</h3>
              <p className="text-gray-500 text-sm mb-4">{service.subtitle}</p>

              <div className="flex items-center justify-center text-gray-700 mb-2">
                <BsCreditCard2Back className="mr-2 text-lg" /> {service.amount}
              </div>

              <p className="text-sm font-semibold text-gray-800">
                {services1.status}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
        )}
      </div>
    </section>
  );
};

export default AddService;
