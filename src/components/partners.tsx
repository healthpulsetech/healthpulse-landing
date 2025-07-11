import React from "react";
import partners from "@/constants/partners";
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
      name:"University Of Rwanda",
      url:partners.URlogo
    }
    
  ];
  
  const Partners = () => {
    return (
      <div className="mx-auto my-10 px-5">
        <div className="flex flex-col justify-center">
          <div className="text-center">
            <h2 className="max-w-md text-xl font-semibold md:text-2xl">
            <span className="text-secondary">Recognized</span> <span  className="text-primary">by </span>
            </h2>
          </div>
          <div className="w-full py-12">
            <div className="flex w-full flex-col items-center justify-center px-2 md:px-4 ">
              <div className="grid grid-cols-2 gap-x-6 md:grid-cols-5 lg:grid-cols-6 ">
                {logos.map((logo, key) => (
                  <img
                    key={key}
                    src={logo.url.src}
                    alt={logo.name}
                    className="w-30 h-30 md:w-32 md:h-32 lg:w-36 lg:h-36 mx-auto my-2 p-2 object-contain rounded-b-2xl shadow-2xl transition-transform duration-300 ease-in-out transform hover:scale-105 hover:-translate-y-1 hover:translate-x-1 hover:shadow-lg hover:shadow-gray-500/50"

                  />
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  };
  
  export default Partners;
  
