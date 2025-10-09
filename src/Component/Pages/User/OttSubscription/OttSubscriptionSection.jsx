// import React, { useState } from "react";
// import Alt from '../../../../assets/alt balaji.svg'
// import Eros from '../../../../assets/erosnow.svg'
// import Hungama from '../../../../assets/hungama music.svg'
// import play from '../../../../assets/hungamaplay.svg'
// import Shemaro from '../../../../assets/shemaroo.svg'
// import sony from '../../../../assets/sonyliv.svg'
// import sun from '../../../../assets/sunnxt.svg'
// import zee from '../../../../assets/zee5.svg'
// const ottPlatforms = [
//   { id: 1, name: "ALT Balaji", img: Alt },
//   { id: 2, name: "Eros Now", img: Eros },
//   { id: 3, name: "Hungama", img: Hungama },
//   { id: 4, name: "Play", img: play },
//   { id: 5, name: "Shemaroo", img: Shemaro },
//   { id: 6, name: "Sony Liv", img: sony },
//   { id: 7, name: "Sun NXT", img: sun },
//   { id: 8, name: "ZEE5", img: zee },
// ];

// const plans = [
//   { id: 1, name: "1 month", amount: 99 },
//   { id: 2, name: "12 months", amount: 699 },
// ];

// const OttSubscriptionSection = () => {
//   const [selectedPlatform, setSelectedPlatform] = useState(null);

//   return (
//     <div className="w-full max-w-7xl mx-auto bg-white px-5 py-3 shadow rounded-lg mt-5">
//       {/* OTT Icons */}
//       <div className="flex flex-wrap justify-start  mb-6">
//         {ottPlatforms.map((item) => (
//           <div
//             key={item.id}
//             onClick={() => setSelectedPlatform(item.id)}
//             className={`cursor-pointer p-2 border-2 rounded-lg transition-all duration-200 ${
//               selectedPlatform === item.id ? "border-blue-500" : "border-transparent"
//             }`}
//           >
//             <img
//               src={item.img}
//               alt={item.name}
//               className="w-24 h-24 object-contain"
//             />
//           </div>
//         ))}
//       </div>

//       {/* Inputs */}
//       <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
//         <div className="flex items-center border rounded-md px-3 py-2 w-full sm:w-1/2">
//           <i className="fa fa-phone text-gray-400 mr-2" />
//           <input
//             type="text"
//             placeholder="Mobile"
//             className="w-full outline-none text-gray-600"
//           />
//         </div>
//         <div className="flex items-center border rounded-md px-3 py-2 w-full sm:w-1/2">
//           <i className="fa fa-envelope text-gray-400 mr-2" />
//           <input
//             type="email"
//             placeholder="Email Id"
//             className="w-full outline-none text-gray-600"
//           />
//         </div>
//       </div>

//       {/* Plans Table */}
//       <div className="overflow-x-auto">
//         <table className="w-full text-center border-collapse">
//           <thead>
//             <tr className="bg-gray-100 text-gray-700">
//               <th className="py-3 px-2 border">Plan Name</th>
//               <th className="py-3 px-2 border">Amount</th>
//               <th className="py-3 px-2 border">Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {plans.map((plan) => (
//               <tr key={plan.id} className="border">
//                 <td className="py-3 border">{plan.name}</td>
//                 <td className="py-3 border">{plan.amount}</td>
//                 <td className="py-3 border">
//                   <button
//                     onClick={() => alert(`Buying ${plan.name}`)}
//                     className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition-all"
//                   >
//                     BUY
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Cancel Button */}
//       <div className="flex justify-center mt-6">
//         <button
//           onClick={() => alert("Cancelled")}
//           className="bg-blue-600 text-white font-semibold px-8 py-3 rounded-full hover:bg-blue-700 transition-all"
//         >
//           CANCEL
//         </button>
//       </div>
//     </div>
//   );
// };

// export default OttSubscriptionSection;


import React, { useState } from "react";
import Alt from "../../../../assets/alt balaji.svg";
import Eros from "../../../../assets/erosnow.svg";
import Hungama from "../../../../assets/hungama music.svg";
import Play from "../../../../assets/hungamaplay.svg";
import Shemaro from "../../../../assets/shemaroo.svg";
import Sony from "../../../../assets/sonyliv.svg";
import Sun from "../../../../assets/sunnxt.svg";
import Zee from "../../../../assets/zee5.svg";
import { MdOutlinePhonelinkRing } from "react-icons/md";
import { BsFillPhoneFill } from "react-icons/bs";
import { RiMailFill } from "react-icons/ri";

const ottPlatforms = [
  { id: 1, name: "ALT Balaji", img: Alt },
  { id: 2, name: "Eros Now", img: Eros },
  { id: 3, name: "Hungama", img: Hungama },
  { id: 4, name: "Play", img: Play },
  { id: 5, name: "Shemaroo", img: Shemaro },
  { id: 6, name: "Sony Liv", img: Sony },
  { id: 7, name: "Sun NXT", img: Sun },
  { id: 8, name: "ZEE5", img: Zee },
];

const plans = [
  { id: 1, name: "1 month", amount: 99 },
  { id: 2, name: "12 months", amount: 699 },
];

const OttSubscriptionSection = () => {
  const [selectedPlatform, setSelectedPlatform] = useState(null);
  const [showContent, setShowContent] = useState(false);

  const handlePlatformClick = (id) => {
    setSelectedPlatform(id);
    setShowContent(true);
  };

  const handleCancel = () => {
    setSelectedPlatform(null);
    setShowContent(false);
  };
  const [mobile, setMobile] = useState("");

  const handleChange = (e) => {
 
    const value = e.target.value.replace(/\D/g, ""); 
    if (value.length <= 10) {
      setMobile(value);
    }
  };
  return (
    <div className="w-full max-w-7xl mx-auto bg-white px-5 py-5 shadow rounded-lg mt-5 transition-all duration-300">
      {/* OTT Icons */}
      <div className="flex flex-wrap justify-start gap-4 mb-6">
        {ottPlatforms.map((item) => (
          <div
            key={item.id}
            onClick={() => handlePlatformClick(item.id)}
            className={`cursor-pointer p-2 border-2 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md ${
              selectedPlatform === item.id ? "border-blue-500" : "border-transparent"
            }`}
          >
            <img
              src={item.img}
              alt={item.name}
              className="w-20 h-20 sm:w-24 sm:h-24 object-contain"
            />
          </div>
        ))}
      </div>

      {/* Conditional Section */}
      {showContent && (
        <div className="transition-all duration-300">
          {/* Inputs */}
          <div className="flex flex-col sm:flex-row justify-start gap-3 mb-6">
            <div className="flex items-center border rounded-md px-3 py-2 w-full md:w-[420px]">
            <BsFillPhoneFill className="w-10 h-4 text-gray-600 "/>
              <input
      type="text"
      placeholder="Mobile"
      value={mobile}
      onChange={handleChange}
      className="w-full outline-none text-gray-600"
    />
            </div>
            <div className="flex items-center border rounded-md px-3 py-2 w-full md:w-[420px]">
            <RiMailFill className="w-10 h-4 text-gray-600 "/>
              <input
                type="email"
                placeholder="Email Id"
                className="w-full outline-none text-gray-600"
              />
            </div>
          </div>

          {/* Plans Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-center border-collapse ">
              <thead>
                <tr className="bg-gray-200 text-gray-700 text-sm">
                  <th className="py-3 px-2 border">Plan Name</th>
                  <th className="py-3 px-2 border">Amount</th>
                  <th className="py-3 px-2 border">Action</th>
                </tr>
              </thead>
              <tbody>
                {plans.map((plan) => (
                  <tr key={plan.id} className="border text-sm">
                    <td className="py-3 border">{plan.name}</td>
                    <td className="py-3 border">{plan.amount}</td>
                    <td className="py-3 border">
                      <button
                        onClick={() => alert(`Buying ${plan.name}`)}
                        className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition-all"
                      >
                        BUY
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Cancel Button */}
          <div className="flex justify-center mt-6">
            <button
              onClick={handleCancel}
              className="bg-blue-600 text-white text-sm font-semibold px-8 py-3 rounded-full hover:bg-blue-700 transition-all shadow-md"
            >
              CANCEL
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default OttSubscriptionSection;
