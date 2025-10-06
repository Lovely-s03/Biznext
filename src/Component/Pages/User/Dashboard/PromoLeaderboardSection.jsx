import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bannerTop1 from "../../../../assets/banner.jpeg";
import bannerBottom1 from "../../../../assets/banner1.jpeg";
import bannerTop2 from "../../../../assets/banner1.jpeg";
import bannerBottom2 from "../../../../assets/banner.jpeg";
import bantop3 from '../../../../assets/ban.jpeg'
import banbottom3 from '../../../../assets/ban.jpeg'
const PromoLeaderboardSection = () => {
  // Each slide has two different images
  const sliderImages = [
    {
      topImg: bantop3,
      bottomImg: bannerBottom1,
      altTop: "AEPS Printer Banner",
      altBottom: "Kotak Bank Banner",
    },
    {
      topImg: bannerTop2,
      bottomImg: banbottom3,
      altTop: "Kotak Bank Banner",
      altBottom: "AEPS Printer Banner",
    },
    {
      topImg: bantop3,
      bottomImg: bannerBottom1,
      altTop: "Kotak Bank Banner",
      altBottom: "AEPS Printer Banner",
    },
  ];

  const leaders = [
    { name: "Rajendra Prasad", rank: 1, diff: "+0" },
    { name: "Chandrajeet Singh", rank: 2, diff: "+0" },
    { name: "Mohd Rais", rank: 3, diff: "+0" },
    { name: "Diwakar Kumar Singh", rank: 4, diff: "+0" },
    { name: "Rishabh Rajan", rank: 5, diff: "+0" },
    { name: "Kishor Kumar", rank: 6, diff: "+0" },
    { name: "Vikram Kumar", rank: 7, diff: "+0" },
    { name: "Imran Ansari", rank: 8, diff: "+0" },
    { name: "Rohit Balasaheb Patil", rank: 9, diff: "+0" },
    { name: "Jai Prakash Singh", rank: 10, diff: "+0" },
  ];

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="w-full max-w-7xl mx-auto py-6 flex flex-col items-center lg:flex-row gap-6 ">
      {/* Left Slider Section */}
      <div className="w-full lg:w-2/3 overflow-hidden ">
        <Slider {...settings}>
          {sliderImages.map((slide, index) => (
            <div key={index} className="flex flex-col ">
              <img
                src={slide.topImg}
                alt={slide.altTop}
                className="w-full object-cover rounded-lg"
              />
              <img
                src={slide.bottomImg}
                alt={slide.altBottom}
                className="w-full object-cover rounded-lg mt-5"
              />
            </div>
          ))}
        </Slider>
      </div>

      {/* Right Leaderboard Section */}
      <div className="w-full lg:w-1/3 bg-white rounded-xl shadow-md p-4">
        <h2 className="text-xl font-semibold border-b pb-2 mb-4">
          Leader Board
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b text-gray-700">
                <th className="py-2">Name</th>
                <th className="py-2">Current Rank</th>
                <th className="py-2">Rank Diff</th>
              </tr>
            </thead>
            <tbody>
              {leaders.map((leader, i) => (
                <tr key={i} className="border-b hover:bg-gray-50">
                  <td className="py-2 text-gray-800">{leader.name}</td>
                  <td className="py-2 text-gray-600">{leader.rank}</td>
                  <td className="py-2 text-gray-600">{leader.diff}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default PromoLeaderboardSection;
