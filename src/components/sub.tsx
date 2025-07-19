// import { Card, CardBody, Input, Select, Button } from "@heroui/react"
// import { ArrowRight } from "lucide-react"

// export default function ReservationForm() {
//   return (
//     // Added a background gradient to mimic the original image's background
//     <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-4 sm:p-6 lg:p-8">
//       <Card className="w-full max-w-md mx-auto bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-100">
//         <CardBody className="text-center pt-10 pb-6 px-6">
//           <h2 className="text-4xl font-extrabold text-[#4F46E5] mb-3 tracking-tight">Reserve Your Spot</h2>
//           <p className="text-lg text-gray-700 leading-relaxed px-2">
//             Fill out the form below to join our exclusive waitlist and be among the first to experience AI-powered photo
//             discovery.
//           </p>
//         </CardBody>
//         <CardBody className="p-8 pt-0">
//           <form className="space-y-6">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
//               <div className="space-y-2">
//                 <label htmlFor="firstName" className="text-gray-800 font-semibold block">
//                   {" "}
//                   {/* Added 'block' for proper spacing */}
//                   First Name *
//                 </label>
//                 <Input
//                   id="firstName"
//                   placeholder="Enter your first name"
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4F46E5] focus:border-transparent placeholder:text-gray-400 text-gray-800"
//                 />
//               </div>
//               <div className="space-y-2">
//                 <label htmlFor="lastName" className="text-gray-800 font-semibold block">
//                   {" "}
//                   {/* Added 'block' for proper spacing */}
//                   Last Name *
//                 </label>
//                 <Input
//                   id="lastName"
//                   placeholder="Enter your last name"
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4F46E5] focus:border-transparent placeholder:text-gray-400 text-gray-800"
//                 />
//               </div>
//             </div>
//             <div className="space-y-2">
//               <label htmlFor="email" className="text-gray-800 font-semibold block">
//                 {" "}
//                 {/* Added 'block' for proper spacing */}
//                 Email Address *
//               </label>
//               <Input
//                 id="email"
//                 type="email"
//                 placeholder="Enter your email address"
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4F46E5] focus:border-transparent placeholder:text-gray-400 text-gray-800"
//               />
//             </div>
//             <div className="space-y-2">
//               <label htmlFor="role" className="text-gray-800 font-semibold block">
//                 {" "}
//                 {/* Added 'block' for proper spacing */}I am a... *
//               </label>
//               {/* Assuming hero/react's Select component works with standard <option> tags and can be styled */}
//               <Select
//                 id="role"
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4F46E5] focus:border-transparent text-gray-700 appearance-none bg-white pr-10" // Added appearance-none and pr-10 for custom arrow if needed
//               >
//                 <option value="" disabled selected hidden>
//                   Select your role
//                 </option>{" "}
//                 {/* Placeholder option */}
//                 <option value="photographer">Photographer</option>
//                 <option value="designer">Designer</option>
//                 <option value="developer">Developer</option>
//                 <option value="other">Other</option>
//               </Select>
//             </div>
//             <Button
//               type="submit"
//               className="w-full py-4 text-xl font-bold rounded-lg bg-gradient-to-r from-[#4F46E5] to-[#8B5CF6] text-white shadow-xl hover:from-[#6366F1] hover:to-[#A78BFA] transition-all duration-200 flex items-center justify-center gap-3"
//             >
//               Join Waitlist
//               <ArrowRight className="h-6 w-6" />
//             </Button>
//           </form>
//           <p className="text-sm text-gray-500 mt-8 text-center leading-relaxed">
//             By joining our waitlist, you agree to our{" "}
//             <a href="#" className="text-[#4F46E5] hover:underline font-medium">
//               Privacy Policy
//             </a>{" "}
//             and{" "}
//             <a href="#" className="text-[#4F46E5] hover:underline font-medium">
//               Terms of Service
//             </a>
//             .
//           </p>
//         </CardBody>
//       </Card>
//     </div>
//   )
// }
