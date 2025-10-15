// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "../../Context/AuthContext";

// const createShards = (rows = 6, cols = 10) => {
//   const shards = [];
//   const pieceWidth = 100 / cols;
//   const pieceHeight = 100 / rows;

//   for (let r = 0; r < rows; r++) {
//     for (let c = 0; c < cols; c++) {
//       shards.push({
//         id: `${r}-${c}`,
//         clipPath: `polygon(
//           ${c * pieceWidth}% ${r * pieceHeight}%,
//           ${(c + 1) * pieceWidth}% ${r * pieceHeight}%,
//           ${(c + 1) * pieceWidth}% ${(r + 1) * pieceHeight}%,
//           ${c * pieceWidth}% ${(r + 1) * pieceHeight}%
//         )`,
//         delay: Math.random() * 0.6,
//         x: (Math.random() - 0.5) * 600,
//         y: (Math.random() - 0.5) * 400,
//         rotate: (Math.random() - 0.5) * 180,
//       });
//     }
//   }
//   return shards;
// };

// const shards = createShards(6, 10);

// const Login = () => {
//   const [showLogin, setShowLogin] = useState(false);
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const { auth, login } = useAuth();

//   const navigate = useNavigate();
//  useEffect(() => {
//     if (auth.isAuthenticated) {
//       if (auth.role === "admin") {
//         navigate("/admin");
//       } else if (auth.role === "user") {
//         navigate("/user/dashboard");
//       }
//       return;
//     }
//     const timer = setTimeout(() => setShowLogin(true), 2000);
//     return () => clearTimeout(timer);
//   }, [auth, navigate]);

//   const handleLogin = (e) => {
//     e.preventDefault();
//     if (username === "admin" && password === "admin123") {
//       login("admin");
//       navigate("/admin");
//     } else if (username === "user" && password === "user123") {
//       login("user");
//       navigate("/user/dashboard");
//     } else {
//       setError("Invalid credentials");
//     }
//   };

//   return (
//     <div className="relative flex h-screen items-center justify-center overflow-hidden bg-black">

//       <AnimatePresence>
//         {!showLogin &&
//           shards.map((shard) => (
//             <motion.div
//               key={shard.id}
//               initial={{ opacity: 1, scale: 1, x: 0, y: 0, rotate: 0 }}
//               animate={{
//                 opacity: 0,
//                 scale: 1.2,
//                 x: shard.x,
//                 y: shard.y,
//                 rotate: shard.rotate,
//               }}
//               transition={{
//                 duration: 1.2,
//                 delay: shard.delay,
//                 ease: "easeOut",
//               }}
//               className="absolute inset-0 bg-cover bg-center"
//               style={{
//                 backgroundImage:
//                   "url(https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1920&q=80)",
//                 clipPath: shard.clipPath,
//               }}
//             />
//           ))}
//       </AnimatePresence>

//       {showLogin && (
//         <motion.div
//           initial={{ scale: 0.8, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//           className="relative w-full max-w-md overflow-hidden rounded-3xl bg-white/10 p-8 shadow-2xl backdrop-blur-xl border border-white/20"
//         >

//           <div className="absolute inset-0 -z-10 overflow-hidden rounded-3xl">

//             {Array.from({ length: 20 }).map((_, i) => (
//               <motion.div
//                 key={i}
//                 className="absolute bg-blue-400 rounded-full"
//                 style={{
//                   width: 6,
//                   height: 6,
//                   top: `${Math.random() * 100}%`,
//                   left: `${Math.random() * 100}%`,
//                 }}
//                 animate={{
//                   x: [0, Math.random() * 20 - 10, 0],
//                   y: [0, Math.random() * 20 - 10, 0],
//                   opacity: [0.3, 1, 0.3],
//                 }}
//                 transition={{
//                   duration: 3 + Math.random() * 2,
//                   repeat: Infinity,
//                   ease: "easeInOut",
//                 }}
//               />
//             ))}

//             {Array.from({ length: 15 }).map((_, i) => (
//               <motion.div
//                 key={i}
//                 className="absolute bg-blue-400"
//                 style={{
//                   width: `${Math.random() * 60 + 40}px`,
//                   height: 1,
//                   top: `${Math.random() * 100}%`,
//                   left: `${Math.random() * 100}%`,
//                   opacity: 0.4,
//                 }}
//                 animate={{
//                   rotate: [0, 360],
//                   opacity: [0.2, 0.8, 0.2],
//                 }}
//                 transition={{
//                   duration: 8 + Math.random() * 5,
//                   repeat: Infinity,
//                   ease: "linear",
//                 }}
//               />
//             ))}
//           </div>

//           <h2 className="mb-6 text-center text-3xl font-bold text-white drop-shadow-lg relative z-10">
//             Welcome Back 👋
//           </h2>

//           {error && (
//             <p className="mb-4 text-center text-sm text-red-400 font-semibold relative z-10">
//               {error}
//             </p>
//           )}

//           <form onSubmit={handleLogin} className="space-y-5 relative z-10">

//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, ease: "easeOut" }}
//             >
//               <input
//                 type="text"
//                 placeholder="👤 Username"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//                 required
//                 className="w-full rounded-2xl border border-gray-300 bg-white/80 p-3 text-sm text-gray-900 shadow-md focus:border-blue-500 focus:ring-2 focus:ring-blue-400 outline-none transition-all duration-300"
//               />
//             </motion.div>

//             {username && (
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, ease: "easeOut" }}
//               >
//                 <input
//                   type="password"
//                   placeholder="🔒 Password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   required
//                   className="w-full rounded-2xl border border-gray-300 bg-white/80 p-3 text-sm text-gray-900 shadow-md focus:border-purple-500 focus:ring-2 focus:ring-purple-400 outline-none transition-all duration-300"
//                 />
//               </motion.div>
//             )}

//             {password && (
//               <motion.div
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.5, ease: "easeOut" }}
//               >
//                 <motion.button
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   type="submit"
//                   className="w-full rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-3 text-white font-semibold shadow-lg hover:shadow-indigo-500/50 transition-all duration-300"
//                 >
//                   Login
//                 </motion.button>
//               </motion.div>
//             )}
//           </form>

//           <p className="mt-6 text-center text-sm text-gray-300 relative z-10">
//             <b>Try:</b>{" "}
//             <span className="text-blue-400">user/user123</span> OR{" "}
//             <span className="text-purple-400">admin/admin123</span>
//           </p>
//         </motion.div>
//       )}
//     </div>
//   );
// };

// export default Login;

import React, { useState, useEffect } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
  FaEnvelope,
  FaLock,
  FaKey,
  FaPhoneAlt,
} from "react-icons/fa";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";
import moto from "../../assets/pngtree-online-bill-payment-icon-orange-template-png-image_6936709.png";
import logo from "../../assets/hariflyicon.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import back from "../../assets/360_F_1698353616_Xa27cGnE2JGXGvg0ZoQOW1qgpa4zVsB9.jpg";
export default function BiznextIRCTCLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [pin, setPin] = useState("");
  const [error, setError] = useState("");
  const [isForgotPin, setIsForgotPin] = useState(false);
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [generatedOtp, setGeneratedOtp] = useState(null);
  const [otpVerified, setOtpVerified] = useState(false);
  const [showOtp, setShowOtp] = useState(false);
  const [currentIP, setCurrentIP] = useState(null);
  const [loggedInIPs, setLoggedInIPs] = useState(new Set());
  const [location, setLocation] = useState("Fetching location...");

  const { auth, login } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (auth.isAuthenticated) {
      if (auth.role === "admin") navigate("/admin");
      else if (auth.role === "user") navigate("/user/dashboard");
    }
  }, [auth, navigate]);

  useEffect(() => {
    // Fetch IP address
    fetch('https://api.ipify.org?format=json')
      .then(res => res.json())
      .then(data => setCurrentIP(data.ip))
      .catch(() => setCurrentIP(null));

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          try {
            const res = await fetch(
              `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
            );
            const data = await res.json();
            const city =
              data.address.city ||
              data.address.town ||
              data.address.village ||
              data.address.state ||
              "Unknown";
            setLocation(city);
          } catch {
            setLocation("Unavailable");
          }
        },
        () => setLocation("Permission denied")
      );
    } else {
      setLocation("Not supported");
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password || !pin) {
      setError("Please fill all fields.");
      return;
    }
    // Check if IP has already logged in
    if (currentIP && loggedInIPs.has(currentIP)) {
      // Direct login without OTP
      if (email === "admin" && password === "admin123" && pin === "1234") {
        login("admin");
        navigate("/admin");
      } else if (email === "user" && password === "user123" && pin === "1234") {
        login("user");
        navigate("/user/dashboard");
      } else {
        setError("Invalid credentials. Please try again.");
      }
    } else {
      // Generate OTP and show OTP field
      const otp = Math.floor(100000 + Math.random() * 900000);
      setGeneratedOtp(otp);
      console.log("OTP sent to email:", email, "OTP:", otp);
      setShowOtp(true);
      setError("");
    }
  };

  const handleVerifyOtp = (e) => {
    e.preventDefault();
    if (parseInt(otp) === generatedOtp) {
      // Add IP to logged in IPs for future direct login
      if (currentIP) {
        setLoggedInIPs(prev => new Set([...prev, currentIP]));
      }
      // Proceed with login after OTP verification
      if (email === "admin" && password === "admin123" && pin === "1234") {
        login("admin");
        navigate("/admin");
      } else if (email === "user" && password === "user123" && pin === "1234") {
        login("user");
        navigate("/user/dashboard");
      } else {
        setError("Invalid credentials. Please try again.");
      }
    } else {
      setError("Invalid OTP. Try again.");
    }
  };

  const handleSendOtp = (e) => {
    e.preventDefault();
    if (!mobile || mobile.length < 10) {
      setError("Please enter a valid mobile number.");
      return;
    }
    const otp = Math.floor(100000 + Math.random() * 900000);
    setGeneratedOtp(otp);
    console.log("OTP Sent:", otp);
    setError("");
  };



  const handleResetPin = (e) => {
    e.preventDefault();
    alert("PIN reset successfully!");
    setIsForgotPin(false);
    setOtpVerified(false);
    setOtp("");
    setMobile("");
    setGeneratedOtp(null);
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  const promoImages = [
    moto,
    "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1620207418302-439b387441b0?auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1600&q=80",
  ];

  // Reusable Header/Footer
  const HeaderFooter = (
    <div className="flex flex-col sm:flex-row items-center justify-between w-full p-3 sm:p-4 bg-gradient-to-r  text-black gap-2 sm:gap-4 rounded-lg shadow-2xl">
      <div className="flex items-center justify-center sm:justify-start mb-2 sm:mb-0">
        <img src={logo} alt="Logo" className="w-20 sm:w-24" />
      </div>
      <div className="flex flex-col sm:flex-row justify-center sm:justify-end items-center sm:items-center gap-2 sm:gap-4 text-sm sm:text-base text-center sm:text-right">
        <p className="font-medium flex items-center ">
          <MdLocationOn className="mr-1" /> {location}
        </p>
        <p className="font-medium flex items-center gap-1">
          <MdPhone className="" /> +1 234 567 890
        </p>
        <p className="font-medium flex items-center gap-1">
          <MdEmail className="" /> Harifly@gmail.com
        </p>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col min-h-screen">
      {/* ---------- HEADER ---------- */}
      {HeaderFooter}

      <div className="w-full overflow-hidden bg-blue-100 border  rounded-lg py-2">
        <marquee className="animate-marquee whitespace-nowrap inline-block text-orange-500 font-semibold">
          ⚡ Payment Reminder: Your payment is due by 20th Oct.
          &nbsp;&nbsp;&nbsp; ⚡ Payment Successful: Order #12345 has been
          confirmed. &nbsp;&nbsp;&nbsp; ⚡ New Offer: Get 10% cashback on your
          next payment. &nbsp;&nbsp;&nbsp;
        </marquee>
      </div>

      {/* ---------- MAIN SECTION ---------- */}
      <div className="flex flex-col md:flex-row flex-1 bg-gradient-to-br from-white via-gray-50 to-gray-100">
        {/* LEFT IMAGE SECTION */}
        {/* LEFT IMAGE SECTION */}

        {/* LEFT IMAGE SLIDER SECTION */}
        {/* LEFT IMAGE SLIDER SECTION */}
        <div className="md:w-2/3 relative flex items-center justify-center p-4 md:p-8 max-h-[600px]">
          <Slider {...sliderSettings} className="w-full rounded-xl ">
            {promoImages.map((img, index) => (
              <div key={index}>
                <img
                  src={img}
                  alt={`Promo ${index + 1}`}
                  className="w-full h-96 md:h-[550px] object-cover rounded-xl"
                />
              </div>
            ))}
          </Slider>
        </div>

        {/* <div className="md:w-2/3 relative flex items-center justify-center p-4 md:p-8">
          <img
            src={moto}
            alt="Promo"
            className="w-full h-auto object-cover rounded-xl shadow-2xl"
          />
        </div> */}

        {/* RIGHT LOGIN SECTION */}
        <div className="md:w-1/2 flex flex-col justify-center items-center p-4 sm:p-8 relative">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src={back} 
              alt="Background"
              className="w-full h-full object-cover opacity-5" 
            />
          </div>

          {/* Login content */}
          <div className="relative w-full z-10">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-center">
              Welcome To <span className="text-green-600">Harifly</span>
            </h2>

            {error && (
              <p className="text-red-500 text-sm mb-3 font-semibold bg-red-50 border border-red-200 p-2 rounded w-full max-w-sm text-center">
                {error}
              </p>
            )}

            {!isForgotPin ? (
              !showOtp ? (
                <form
                  onSubmit={handleLogin}
                  className="w-full max-w-sm bg-white/90 shadow-2xl p-6 rounded-lg space-y-5"
                >
                  <div className="relative">
                    <FaEnvelope className="absolute top-3 left-3 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Enter your Email / Mobile*"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-orange-400 outline-none"
                      required
                    />
                  </div>

                  <div className="relative">
                    <FaLock className="absolute top-3 left-3 text-gray-400" />
                    <input
                      type="password"
                      placeholder="Enter your Password*"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-orange-400 outline-none"
                      required
                    />
                  </div>

                  <div className="relative">
                    <FaKey className="absolute top-3 left-3 text-gray-400" />
                    <input
                      type="password"
                      placeholder="Login PIN*"
                      value={pin}
                      onChange={(e) => setPin(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-orange-400 outline-none"
                      required
                    />
                  </div>

                  <div className="flex justify-between text-xs sm:text-sm text-blue-500">
                    <button
                      type="button"
                      onClick={() => setIsForgotPin(true)}
                      className="hover:underline"
                    >
                      Forgot Pin?
                    </button>
                    <a href="#" className="hover:underline">
                      Forgot Password?
                    </a>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 py-3 rounded-lg shadow hover:opacity-90 transition"
                  >
                    LOG IN
                  </button>
                </form>
              ) : (
                <form
                  onSubmit={handleVerifyOtp}
                  className="w-full max-w-sm bg-white/90 shadow-2xl p-6 rounded-lg space-y-5"
                >
                  <div className="relative">
                    <FaKey className="absolute top-3 left-3 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Enter OTP*"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-orange-400 outline-none"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-green-600 py-3 rounded-lg shadow hover:opacity-90 transition"
                  >
                    VERIFY OTP
                  </button>
                </form>
              )
            ) : (
              <div className="w-full max-w-sm bg-white/90 shadow-lg p-6 rounded-lg space-y-4">
                {/* OTP / Reset PIN forms here */}
              </div>
            )}

            <div className="mt-6 text-xs text-gray-500 text-center">
              <a href="#" className="hover:text-blue-600">
                {" "}
                Privacy Policy{" "}
              </a>{" "}
              |{" "}
              <a href="#" className="hover:text-blue-600">
                {" "}
                Terms & Conditions{" "}
              </a>{" "}
            </div>

            {!isForgotPin && (
              <div className="mt-4 text-xs text-gray-400 text-center">
                <b>Try:</b> user/user123/1234 or admin/admin123/1234
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ---------- FOOTER ---------- */}
      <footer className="w-full bg-white py-4">
        <div className="flex items-center justify-between max-w-6xl mx-auto px-4">
          {/* Center: Company */}
          <div className="text-xs sm:text-sm text-gray-400 text-center">
            © Copyright 2025, All Rights Reserved By Harifly Technologies Private Limited 
          </div>

          {/* Right: Social Icons */}
          <div className="flex space-x-4 text-lg text-gray-600">
            <FaFacebookF className="hover:text-blue-600 cursor-pointer" />
            <FaTwitter className="hover:text-sky-500 cursor-pointer" />
            <FaInstagram className="hover:text-pink-500 cursor-pointer" />
            <FaYoutube className="hover:text-red-600 cursor-pointer" />
            <FaWhatsapp className="hover:text-green-500 cursor-pointer" />
          </div>
        </div>
      </footer>
    </div>
  );
}
