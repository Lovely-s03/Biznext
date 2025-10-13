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
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";
import moto from "../../assets/payment.webp";
import logo from "../../assets/hariflyicon.svg";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";

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

  const { auth, login } = useAuth();
  const navigate = useNavigate();

  // Redirect if already logged in
  useEffect(() => {
    if (auth.isAuthenticated) {
      if (auth.role === "admin") navigate("/admin");
      else if (auth.role === "user") navigate("/user/dashboard");
    }
  }, [auth, navigate]);

  // --- LOGIN FUNCTIONALITY ---
  const handleLogin = (e) => {
    e.preventDefault();

    if (email === "admin" && password === "admin123" && pin === "1234") {
      login("admin");
      navigate("/admin");
    } else if (email === "user" && password === "user123" && pin === "1234") {
      login("user");
      navigate("/user/dashboard");
    } else {
      setError("Invalid credentials. Please try again.");
    }
  };

  // --- FORGOT PIN FLOW ---
  const handleSendOtp = (e) => {
    e.preventDefault();
    if (!mobile || mobile.length < 10) {
      setError("Please enter a valid mobile number.");
      return;
    }

    const randomOtp = Math.floor(100000 + Math.random() * 900000);
    setGeneratedOtp(randomOtp);
    console.log("📲 OTP sent to", mobile, "→", randomOtp); // 👈 OTP appears in console
    setError("");
  };

  const handleVerifyOtp = (e) => {
    e.preventDefault();
    if (parseInt(otp) === generatedOtp) {
      setOtpVerified(true);
      setError("");
      console.log("✅ OTP verified successfully!");
    } else {
      setError("Invalid OTP. Please try again.");
    }
  };

  const handleResetPin = (e) => {
    e.preventDefault();
    console.log("🎉 PIN reset successful for mobile:", mobile);
    alert("PIN reset successfully! (simulated)");
    setIsForgotPin(false);
    setOtpVerified(false);
    setOtp("");
    setMobile("");
    setGeneratedOtp(null);
  };
  const [location, setLocation] = useState("Fetching location...");

  useEffect(() => {
    // Use browser geolocation
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;

          try {
            // Reverse geocode to get readable city
            const res = await fetch(
              `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
            );
            const data = await res.json();
            const city =
              data.address.city ||
              data.address.town ||
              data.address.village ||
              data.address.state ||
              "Unknown location";
            setLocation(city);
          } catch (error) {
            console.error("Location fetch error:", error);
            setLocation("Location unavailable");
          }
        },
        (error) => {
          console.warn("Geolocation denied or unavailable:", error);
          setLocation("Location permission denied");
        }
      );
    } else {
      setLocation("Geolocation not supported");
    }
  }, []);

  return (
    <>
      <div className="flex items-center justify-between w-full p-4 bg-white shadow">
        {/* Logo */}
        <div>
          <img src={logo} alt="Logo" className="w-24" />
        </div>

        {/* Contact + Location */}
        <div className="flex justify-end items-center gap-4 text-right text-gray-700">
          <p className="text-sm font-medium">
            <span className="inline-flex items-center text-orange-600">
              <MdLocationOn className="mr-1" />
              {location}
            </span>
          </p>
          <p className="text-sm font-medium flex items-center gap-1">
            <MdPhone className="text-gray-700" />
            +1 234 567 890
          </p>
          <p className="text-sm font-medium flex items-center gap-1">
            <MdEmail className="text-gray-700" />
            example@email.com
          </p>
        </div>
      </div>
      <div className=" flex flex-col md:flex-row bg-gradient-to-br text-gray-900">
        {/* LEFT SECTION */}

        <div className=" bg-white text-gray-900  flex flex-col justify-center relative overflow-hidden">
          <div className="mt-1 w-full pt-3 p-2 bg-white">
            <img
              src={moto}
              alt="AyushPay"
              className="w-full h-[700px] object-cover "
            />
          </div>

          <div className="absolute bottom-4 right-4 text-sm text-gray-600">
            <p>Download Application Today!</p>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="md:w-1/2 bg-white flex flex-col justify-center items-center ">
          <h2 className="text-2xl font-bold mb-6">
            Welcome To <span className="text-green-600">Hariyfly</span>
          </h2>

          {error && (
            <p className="text-red-500 text-sm mb-4 font-semibold">{error}</p>
          )}

          {!isForgotPin ? (
            // --- NORMAL LOGIN FORM ---
            <form onSubmit={handleLogin} className="w-full max-w-sm space-y-4">
              <div className="relative">
                <FaEnvelope className="absolute top-3 left-3 text-gray-400" />
                <input
                  type="text"
                  placeholder="Enter your Email / Mobile*"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

              <div className="relative">
                <FaLock className="absolute top-3 left-3 text-gray-400" />
                <input
                  type="password"
                  placeholder="Enter your Password*"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

              <div className="relative">
                <FaKey className="absolute top-3 left-3 text-gray-400" />
                <input
                  type="password"
                  placeholder="Login PIN*"
                  value={pin}
                  onChange={(e) => setPin(e.target.value)}
                  required
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

              <div className="flex justify-between text-sm text-orange-500">
                <button
                  type="button"
                  onClick={() => setIsForgotPin(true)}
                  className="hover:underline"
                >
                  Forgot Pin?
                </button>
                <a href="#">Forgot Password?</a>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-600 to-purple-600 text-white py-3 rounded-lg shadow hover:opacity-90 transition"
              >
                LOG IN
              </button>
            </form>
          ) : (
            // --- FORGOT PIN FORM ---
            <div className="w-full max-w-sm space-y-4">
              {!generatedOtp && (
                <form onSubmit={handleSendOtp} className="space-y-4">
                  <div className="relative">
                    <FaPhoneAlt className="absolute top-3 left-3 text-gray-400" />
                    <input
                      type="tel"
                      placeholder="Enter your registered mobile*"
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value)}
                      required
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-orange-600 text-white py-3 rounded-lg shadow hover:opacity-90 transition"
                  >
                    Send OTP
                  </button>
                </form>
              )}

              {generatedOtp && !otpVerified && (
                <form onSubmit={handleVerifyOtp} className="space-y-4">
                  <input
                    type="number"
                    placeholder="Enter received OTP"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                  <button
                    type="submit"
                    className="w-full bg-orange-600 text-white py-3 rounded-lg shadow hover:opacity-90 transition"
                  >
                    Verify OTP
                  </button>
                </form>
              )}

              {otpVerified && (
                <form onSubmit={handleResetPin} className="space-y-4">
                  <input
                    type="password"
                    placeholder="Enter new PIN"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
                    required
                  />
                  <button
                    type="submit"
                    className="w-full bg-green-600 text-white py-3 rounded-lg shadow hover:opacity-90 transition"
                  >
                    Reset PIN
                  </button>
                </form>
              )}

              <button
                onClick={() => {
                  setIsForgotPin(false);
                  setError("");
                  setOtp("");
                  setMobile("");
                  setGeneratedOtp(null);
                  setOtpVerified(false);
                }}
                className="w-full text-center text-sm text-blue-600 mt-3 underline"
              >
                Back to Login
              </button>
            </div>
          )}

          {/* Footer */}
          {!isForgotPin && (
            <>
              <p className="mt-6 text-gray-600 text-sm">
                Create your free account{" "}
                <a href="#" className="text-orange-500 font-semibold">
                  Sign Up
                </a>
              </p>

              <div className="flex space-x-4 mt-6 text-xl text-gray-600">
                <FaFacebookF className="hover:text-blue-600 cursor-pointer" />
                <FaTwitter className="hover:text-sky-500 cursor-pointer" />
                <FaInstagram className="hover:text-pink-500 cursor-pointer" />
                <FaYoutube className="hover:text-red-600 cursor-pointer" />
                <FaWhatsapp className="hover:text-green-500 cursor-pointer" />
              </div>

              <div className="mt-6 text-xs text-gray-500">
                <a href="#" className="hover:text-blue-600">
                  Privacy Policy
                </a>{" "}
                |{" "}
                <a href="#" className="hover:text-blue-600">
                  Terms & Conditions
                </a>
              </div>

              <div className="mt-6 text-xs text-gray-400">
                <b>Try:</b> user/user123/1234 or admin/admin123/1234
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
