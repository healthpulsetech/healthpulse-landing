// import featureImage from "../assets/feature.png"
// import { Card, CardBody } from "@heroui/card"
// import { motion, type Variants } from "framer-motion"
// import Image from "next/image"
// import { Activity, Users, Database, BarChart3, HouseWifi } from "lucide-react"
// import HowItWorksPage from "./journey"

// const Features = () => {
//   const containerVariants: Variants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//       },
//     },
//   }

//   const itemVariants: Variants = {
//     hidden: { opacity: 0, x: 50 },
//     visible: {
//       opacity: 1,
//       x: 0,
//       transition: { duration: 0.5, ease: "easeOut" },
//     },
//   }

//   const imageVariants: Variants = {
//     hidden: { opacity: 0, x: -50 },
//     visible: {
//       opacity: 1,
//       x: 0,
//       transition: { duration: 0.6, ease: "easeOut" },
//     },
//   }

//   return (
//     <section id="features" className="scroll-mt-20 font-poppins py-12 bg-gray-50">
//       <div className="container mx-auto px-4">
//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-12"
//         >
//           <h1 className="text-3xl sm:text-4xl font-bold">
//             Key <span className="text-secondary">Features</span>
//           </h1>
//         </motion.div>

//         <div className="flex flex-col lg:flex-row items-center gap-8">
//           <motion.div
//             variants={imageVariants}
//             initial="hidden"
//             animate="visible"
//             className="w-full lg:w-1/2"
//           >
//             <Image
//               src={featureImage || "/placeholder.svg"}
//               alt="Healthcare professionals"
//               width={500}
//               height={400}
//               className="object-contain w-full h-auto"
//             />
//           </motion.div>

//           <div className="w-full lg:w-1/2">
//             <HowItWorksPage />
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Features