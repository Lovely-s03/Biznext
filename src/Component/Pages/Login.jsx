// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";
// import { useAuth } from "../../Context/AuthContext";

// const Login = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const { login } = useAuth();
//   const navigate = useNavigate();

//   const handleLogin = (e) => {
//     e.preventDefault();

//     if (username === "admin" && password === "admin123") {
//       login("admin");
//       navigate("/admin");
//     } else if (username === "user" && password === "user123") {
//       login("user");
//       navigate("/user");
//     } else {
//       setError("Invalid credentials");
//     }
//   };

//   return (
//     <div className="relative flex h-screen items-center justify-center overflow-hidden">
//       {/* 🖼️ Fullscreen Background Image */}
//       <div className="absolute inset-0 -z-10">
//         <img
//           src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1920&q=80"
//           alt="AI Background"
//           className="h-full w-full object-cover"
//         />
//         <div className="absolute inset-0 bg-black/60" /> {/* Dark overlay */}
//       </div>

//       {/* 💠 Login Card */}
//       <motion.div
//         initial={{ y: 50, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.8, ease: "easeOut" }}
//         className="w-full max-w-md rounded-2xl bg-white/10 p-8 shadow-2xl backdrop-blur-xl border border-white/20"
//       >
//         <h2 className="mb-6 text-center text-3xl font-bold text-white drop-shadow-lg">
//           Welcome Back 👋
//         </h2>

//         {error && (
//           <p className="mb-4 text-center text-sm text-red-400 font-semibold">
//             {error}
//           </p>
//         )}

//         <form onSubmit={handleLogin} className="space-y-5">
//           <div>
//             <input
//               type="text"
//               placeholder="👤 Username"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               required
//               className="w-full rounded-lg border border-gray-300 bg-white/80 p-3 text-sm text-gray-900 shadow-md focus:border-blue-500 focus:ring-2 focus:ring-blue-400 outline-none transition-all duration-300"
//             />
//           </div>

//           <div>
//             <input
//               type="password"
//               placeholder="🔒 Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//               className="w-full rounded-lg border border-gray-300 bg-white/80 p-3 text-sm text-gray-900 shadow-md focus:border-purple-500 focus:ring-2 focus:ring-purple-400 outline-none transition-all duration-300"
//             />
//           </div>

//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             type="submit"
//             className="w-full rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-3 text-white font-semibold shadow-lg hover:shadow-indigo-500/50 transition-all duration-300"
//           >
//             Login
//           </motion.button>
//         </form>

//         <p className="mt-6 text-center text-sm text-gray-300">
//           <b>Try:</b>{" "}
//           <span className="text-blue-400">user/user123</span> OR{" "}
//           <span className="text-purple-400">admin/admin123</span>
//         </p>
//       </motion.div>
//     </div>
//   );
// };

// export default Login;



import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";

// create shards (grid pieces of image)
const createShards = (rows = 6, cols = 10) => {
  const shards = [];
  const pieceWidth = 100 / cols;
  const pieceHeight = 100 / rows;

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      shards.push({
        id: `${r}-${c}`,
        clipPath: `polygon(
          ${c * pieceWidth}% ${r * pieceHeight}%,
          ${(c + 1) * pieceWidth}% ${r * pieceHeight}%,
          ${(c + 1) * pieceWidth}% ${(r + 1) * pieceHeight}%,
          ${c * pieceWidth}% ${(r + 1) * pieceHeight}%
        )`,
        delay: Math.random() * 0.6,
        x: (Math.random() - 0.5) * 600,
        y: (Math.random() - 0.5) * 400,
        rotate: (Math.random() - 0.5) * 180,
      });
    }
  }
  return shards;
};

const shards = createShards(6, 10);

const Login = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "admin123") {
      login("admin");
      navigate("/admin");
    } else if (username === "user" && password === "user123") {
      login("user");
      navigate("/user");
    } else {
      setError("Invalid credentials");
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => setShowLogin(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative flex h-screen items-center justify-center overflow-hidden bg-black">
      {/* 🔹 Shattered Glass Animation */}
      <AnimatePresence>
        {!showLogin &&
          shards.map((shard) => (
            <motion.div
              key={shard.id}
              initial={{ opacity: 1, scale: 1, x: 0, y: 0, rotate: 0 }}
              animate={{
                opacity: 0,
                scale: 1.2,
                x: shard.x,
                y: shard.y,
                rotate: shard.rotate,
              }}
              transition={{
                duration: 1.2,
                delay: shard.delay,
                ease: "easeOut",
              }}
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1920&q=80)",
                clipPath: shard.clipPath,
              }}
            />
          ))}
      </AnimatePresence>

      {/* 🔹 Login Form Reveal */}
      {showLogin && (
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-full max-w-md overflow-hidden rounded-3xl bg-white/10 p-8 shadow-2xl backdrop-blur-xl border border-white/20"
        >
          {/* 🔥 Network-style Animated Background */}
          <div className="absolute inset-0 -z-10 overflow-hidden rounded-3xl">
            {/* Network Nodes */}
            {Array.from({ length: 20 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute bg-blue-400 rounded-full"
                style={{
                  width: 6,
                  height: 6,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                }}
                animate={{
                  x: [0, Math.random() * 20 - 10, 0],
                  y: [0, Math.random() * 20 - 10, 0],
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}
            {/* Network Lines */}
            {Array.from({ length: 15 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute bg-blue-400"
                style={{
                  width: `${Math.random() * 60 + 40}px`,
                  height: 1,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  opacity: 0.4,
                }}
                animate={{
                  rotate: [0, 360],
                  opacity: [0.2, 0.8, 0.2],
                }}
                transition={{
                  duration: 8 + Math.random() * 5,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            ))}
          </div>

          <h2 className="mb-6 text-center text-3xl font-bold text-white drop-shadow-lg relative z-10">
            Welcome Back 👋
          </h2>

          {error && (
            <p className="mb-4 text-center text-sm text-red-400 font-semibold relative z-10">
              {error}
            </p>
          )}

          <form onSubmit={handleLogin} className="space-y-5 relative z-10">
            {/* Username Field */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <input
                type="text"
                placeholder="👤 Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="w-full rounded-2xl border border-gray-300 bg-white/80 p-3 text-sm text-gray-900 shadow-md focus:border-blue-500 focus:ring-2 focus:ring-blue-400 outline-none transition-all duration-300"
              />
            </motion.div>

            {/* Password Field – shows only if username is filled */}
            {username && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <input
                  type="password"
                  placeholder="🔒 Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full rounded-2xl border border-gray-300 bg-white/80 p-3 text-sm text-gray-900 shadow-md focus:border-purple-500 focus:ring-2 focus:ring-purple-400 outline-none transition-all duration-300"
                />
              </motion.div>
            )}

            {/* Login Button – shows only if password is filled */}
            {password && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="w-full rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-3 text-white font-semibold shadow-lg hover:shadow-indigo-500/50 transition-all duration-300"
                >
                  Login
                </motion.button>
              </motion.div>
            )}
          </form>

          <p className="mt-6 text-center text-sm text-gray-300 relative z-10">
            <b>Try:</b>{" "}
            <span className="text-blue-400">user/user123</span> OR{" "}
            <span className="text-purple-400">admin/admin123</span>
          </p>
        </motion.div>
      )}
    </div>
  );
};

export default Login;

