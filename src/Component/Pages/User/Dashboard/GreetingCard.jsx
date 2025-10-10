import React from "react";

const GreetingCard = () => {
  return (
    <div className="w-full bg-gray-100 mt-[55px]">
      <div className=" flex gap-16 bg-white shadow-md rounded-lg p-5 max-w-7xl w-full border border-gray-100">
        <p className="text-gray-800 text-md whitespace-nowrap">
          <span className="font-semibold text-black">Hi, Ajeet Kumar!</span>{" "}
          यदि जीवन में सफल होना है तो हमारी नजरे सदैव हमारे लक्ष्य पर होनी चाहिए।
        </p>

        <marquee className="text-sm font-semibold text-orange-500">Aapko dekh kar seekha hai ki asli saksharthata sirf number ya profit nahi, balki apni poori team ko saath le kar chalne mein hai. </marquee>
      </div>
    </div>
  );
};

export default GreetingCard;
