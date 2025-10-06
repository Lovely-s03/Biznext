import React from "react";
import { motion } from "framer-motion";
import rewardImg from "../../../../assets/Widget_Reward_Library.svg";
import targetImg from "../../../../assets/Widget_Target_Incentive.svg";
import referImg from "../../../../assets/Widget_Referral.svg";
import calcImg from "../../../../assets/calculator.svg";
import firstImg from "../../../../assets/Widget_First_Transaction.svg";

const RewardsSection = () => {
  const cards = [
    {
      title: "REWARD LIBRARY",
      desc: "Redeem your coins and get free products and gift cards",
      highlight: "50+ Products",
      img: rewardImg,
    },
    {
      title: "TARGET BONUS",
      desc: "Achieve service targets and earn",
      highlight: "Everymonth",
      img: targetImg,
    },
    {
      title: "REFER & EARN",
      desc: "Refer your friends and families, get rewarded",
      highlight: "250 Coins",
      img: referImg,
    },
    {
      title: "CALCULATOR",
      desc: "Calculate your income based on transactions & network",
      highlight: "Check Now",
      img: calcImg,
    },
    {
      title: "1st TRANSACTION",
      desc: "Get daily and monthly rewards with your transaction",
      highlight: "Earn Rewards",
      img: firstImg,
    },
  ];

  return (
    <section className="w-full mt-5">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-white shadow-md rounded-xl text-center py-4 font-semibold text-gray-700 mb-8"
        >
          No Data Available For Chart
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white shadow-lg hover:shadow-xl rounded-xl p-6 flex items-center justify-between transition-all duration-300 cursor-pointer overflow-hidden"
            >
              <div>
                <h2 className="text-xl font-extrabold text-gray-900 mb-3">
                  {card.title}
                </h2>
                <p className="text-gray-600 text-sm mb-4">{card.desc}</p>
                <p className="text-lg font-semibold text-[#367da5]">
                  {card.highlight}
                </p>
              </div>

             
              <div className="relative h-40 w-40 flex-shrink-0 overflow-hidden">
                <motion.img
                  src={card.img}
                  alt={card.title}
                  className="absolute top-0 left-0 w-full h-full object-contain"
                  animate={{
                    y: [0, -6, 0],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RewardsSection;
