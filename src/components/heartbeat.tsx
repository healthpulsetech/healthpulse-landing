// "use client";
// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import partners from "@/constants/partners";

// const pulsePath = `
//   M 0 50 
//   L 30 50 
//   L 40 30 
//   L 50 70 
//   L 60 50 
//   L 90 50 
//   L 100 10 
//   L 110 90 
//   L 120 50 
//   L 160 50
// `;

// const HeartbeatPulse = () => {
//   const [pulses, setPulses] = useState<number[]>([]);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setPulses((prev) => [...prev, Date.now()]);
//     }, 1500);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="w-full h-80 bg-white flex items-center justify-start pl-16 relative overflow-hidden">
//       {/* Beating Realistic Heart (SVG) */}
//       <motion.div
//         initial={{ scale: 1 }}
//         animate={{ scale: [1, 1.2, 1] }}
//         transition={{
//           duration: 1.5,
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//         className="absolute left-10 top-1/2 -translate-y-1/2 z-10 w-16"
//       >
//         {/* Inline Realistic Heart SVG */}
        
//         <img src={partners.Heart.src} alt="Heart" className="w-full h-auto" />
//       </motion.div>

//       {/* Emitted Pulses from inside the heart */}
//       {pulses.map((pulse) => (
//         <motion.svg
//           key={pulse}
//           viewBox="0 0 200 100"
//           className="absolute h-24 top-1/2 -translate-y-1/2 left-24"
//           preserveAspectRatio="none"
//           initial={{ x: 0, opacity: 1 }}
//           animate={{ x: 1000, opacity: 0 }}
//           transition={{ duration: 3.5, ease: "easeInOut" }}
//           onAnimationComplete={() =>
//             setPulses((prev) => prev.filter((p) => p !== pulse))
//           }
//         >
//           <motion.path
//             d={pulsePath}
//             stroke="#0077ff"
//             strokeWidth="2"
//             fill="transparent"
//             style={{ filter: "drop-shadow(0 0 2px #0077ff)" }}
//           />
//         </motion.svg>
//       ))}
//     </div>
//   );
// };

// export default HeartbeatPulse;
