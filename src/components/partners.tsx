"use client";

import React from "react";
import partners from "@/constants/partners";
import { motion } from "framer-motion";

const logos = [
  {
    name: "Solid Mind",
    url: partners.solidMind,
  },
  {
    name: "MasterCard",
    url: partners.masterCardLogo,
  },
  {
    name: "University Of Rwanda",
    url: partners.URlogo,
  },
  {
    name: "Bag Rwanda",
    url: partners.bagTechnology,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const Partners = () => {
  return (
    <div className="mx-auto my-10 px-5 font-mono">
      <div className="flex flex-col justify-center">
        <div className="text-center mb-8">
          <h2 className="max-w-md  text-xl  relative right-3 font-semibold md:text-2xl">
            <span className="text-secondary">Recognized</span>{" "}
            <span className="text-primary">by</span>
          </h2>
        </div>

        <motion.div
          className="w-full"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="flex w-full flex-col items-center justify-center px-2 md:px-4">
            <div className="grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6">
              {logos.map((logo, key) => (
                <motion.img
                  key={key}
                  variants={itemVariants}
                  src={logo.url.src}
                  alt={logo.name}
                  className="w-24 h-24 md:w-28 md:h-28 lg:w-40 lg:h-40 mx-auto p-2 object-contain rounded-b-2xl shadow-2xl transition-transform duration-300 ease-in-out transform hover:scale-105 hover:-translate-y-1 hover:translate-x-1 hover:shadow-lg hover:shadow-gray-500/50"
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Partners;
