import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight, ChevronLeft } from "lucide-react";
import aeps from "../../../../assets/aeps.png";
import money from "../../../../assets/money_transfer.png";
import recharge from "../../../../assets/recharge.png";
import bill from "../../../../assets/bill_payments.png";
import aadhar from "../../../../assets/aadhaar_pay.png";
import bank from "../../../../assets/bank_account.png";
import deposit from "../../../../assets/deposit.png";
import wallet from "../../../../assets/wallet_settlement.png";
import pan from "../../../../assets/pan_card.png";
import cash from "../../../../assets/cash_collection.png";
import lic from "../../../../assets/lic_premium.png";
import insurance from "../../../../assets/insurance.png";
import ott from "../../../../assets/ott_subscription.png";
import eGift from "../../../../assets/e_gift_card.png";
import sell from "../../../../assets/sell_n_earn.png";
import dth from "../../../../assets/dth_connection.png";
import irctc from "../../../../assets/irctc.png";
import bus from "../../../../assets/bus.png";
import digigold from "../../../../assets/digigold.png";
import creditCard from "../../../../assets/credit_card_payment.png";
import ayushman from "../../../../assets/ayushman_bharat.png";
import bankCsp from "../../../../assets/bank_csp.png";

const services = [
  { title: "Aeps", icon: aeps },
  { title: "Money Transfer", icon: money },
  { title: "Recharge", icon: recharge },
  { title: "Bill Payments", icon: bill },
  { title: "Aadhaar Pay", icon: aadhar },
  { title: "Bank Account", icon: bank },
  { title: "Deposit Money", icon: deposit },
  { title: "Wallet Settlement", icon: wallet },
  { title: "Pan card", icon: pan },
  { title: "Cash", icon: cash },
  { title: "LIC", icon: lic },
  { title: "Insurance", icon: insurance },
  { title: "OTT", icon: ott },
  { title: "E-Gift", icon: eGift },
  { title: "Sell", icon: sell },
  { title: "DTH", icon: dth },
  { title: "IRCTC", icon: irctc },
  { title: "Bus", icon: bus },
  { title: "Digi Gold", icon: digigold },
  { title: "Credit Card", icon: creditCard },
  { title: "Ayushman", icon: ayushman },
  { title: "Bank CSP", icon: bankCsp },
];

const ServicesSection = () => {
  const [visibleCount, setVisibleCount] = useState(8);

  const toggleMore = () => {
    setVisibleCount(visibleCount === 8 ? services.length : 8);
  };

  return (
    <div className="bg-white shadow-md rounded-xl p-4 overflow-hidden mt-5">
      <div className="flex flex-wrap justify-center sm:justify-start gap-4 transition-all duration-500">
        {services.slice(0, visibleCount).map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 6px 15px rgba(0,0,0,0.1)",
            }}
            className="flex items-center justify-center w-[130px] h-[120px] rounded-lg shadow-sm cursor-pointer overflow-hidden transition-all"
          >
            <motion.img
              src={service.icon}
              alt={service.title}
              className="w-full h-full  "
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        ))}

        {/* Toggle Arrow */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={toggleMore}
          className="flex items-center justify-center w-[50px] h-[120px] rounded-lg bg-gray-50 shadow-sm hover:bg-gray-100 transition"
        >
          {visibleCount === 8 ? (
            <ChevronRight className="text-gray-700" />
          ) : (
            <ChevronLeft className="text-gray-700" />
          )}
        </motion.button>
      </div>
    </div>
  );
};

export default ServicesSection;
