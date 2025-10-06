import React from "react";

const GreetingCard = () => {
  return (
    <div className="w-full bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-5 max-w-7xl w-full border border-gray-100">
        <p className="text-gray-800 text-md">
          <span className="font-semibold text-black">Hi, Ajeet Kumar!</span>{" "}
          यदि जीवन में सफल होना है तो हमारी नजरे सदैव हमारे लक्ष्य पर होनी चाहिए।
        </p>
      </div>
    </div>
  );
};

export default GreetingCard;
