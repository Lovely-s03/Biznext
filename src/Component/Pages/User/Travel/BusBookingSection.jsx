import React from "react";
import { MapPin, Calendar } from "lucide-react";
import bus from "../../../../assets/busbanner.png";
const BusBookingSection = () => {
  return (
    <section
      className="relative w-full bg-center bg-no-repeat bg-cover mt-5 p-20"
      style={{
        backgroundImage: `url(${bus})`,
      }}
    >
      <div className="absolute inset-0 "></div>

      <div className="relative flex flex-col items-center min-h-[70vh] px-0 lg:px-4 py-10 space-y-6">
        <h2 className="text-2xl md:text-2xl font-semibold text-gray-700 text-center">
          Book Bus Tickets
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 items-center justify-center mt-4 w-full ">
     
          <div className="relative w-full ">
            <MapPin className="absolute left-3 top-3 text-gray-500" size={18} />
            <input
              type="text"
              placeholder="From"
              className="w-full border border-gray-300 rounded-lg pl-9 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          <div className="relative w-full">
            <MapPin className="absolute left-3 top-3 text-gray-500" size={18} />
            <input
              type="text"
              placeholder="To"
              className="w-full border border-gray-300 rounded-lg pl-9 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          <div className="relative w-full ">
            <Calendar className="absolute left-3 top-3 text-gray-500" size={18} />
            <input
              type="date"
              className="w-full border border-gray-300 rounded-lg pl-9 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          <button className="bg-blue-600 whitespace-nowrap text-white font-medium rounded-lg px-6 py-2 hover:bg-blue-700 transition">
            Search Buses
          </button>
        </div>
      </div>
    </section>
  );
};

export default BusBookingSection;
