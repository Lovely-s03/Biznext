import React from "react";
import hdBox from "../../../../assets/AirtelDigitalTV_HD.png"; 

const plans = [
  {
    title: "Airtel HD Box",
    features: ["Free Standard Installation", "Free Delivery", "1 Month Pack"],
    image: hdBox,
    bestSeller: true,
  },
  {
    title: "Airtel Xstream Box",
    features: ["Free Standard Installation", "Free Delivery", "1 Month Pack"],
    image: hdBox,
    bestSeller: true,
  },
];

const DTHPlansSection = () => {
  return (
    <div className="bg-gray-100 py-5">
      <div className="max-w-7xl mx-auto">
        <div className="grid gap-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          {plans.map((plan, index) => (
            <div
              key={index}  >
           <img src={plan.image} alt={plan.title} className="mt-auto w-full object-contain" />
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition">
            VIEW ALL PLANS
          </button>
        </div>
      </div>
    </div>
  );
};

export default DTHPlansSection;
