import { Linkedin } from "lucide-react";
import Image from "next/image";
import { team, coreValues } from "@/constants/team"; // Assuming these constants are defined

const TeamSection = () => {
  return (
    <div className="bg-[#F7FBFF]">
      {/* Mission Section */}
      <section className="py-10 px-4">
        <div className="max-w-md md:max-w-lg mx-auto text-center font-poppins">
          <h1 className="text-xl md:text-2xl font-extrabold mb-5 text-primary tracking-tight">
            Our <span className="text-secondary">Mission</span>
          </h1>
          <p className="text-base text-primary leading-relaxed  font-poppins">
            To empower individuals and healthcare workers with intelligent,
            locally adaptable tools that enhance preventive care by delivering
            innovative, patient-centric solutions that improve access, quality,
            and healthcare outcomes for all.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 px-4 sm:px-6 relative bottom-15">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-xl md:text-2xl font-extrabold text-primary tracking-tight">
              Our <span className="text-secondary">Team</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="relative bg-white rounded-2xl shadow-lg group overflow-hidden transition-all duration-300 hover:scale-[1.05]"
              >
                <div className="aspect-square overflow-hidden rounded-t-2xl relative">
                  <Image
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover px-1 py-2 rounded-small"
                    width={200}
                    height={200}
                  />
                  <div className="absolute top-3 left-3 flex space-x-2">
                    <button className="p-1.5 rounded-full backdrop-blur-sm bg-white/80">
                      <Linkedin size={20} className="text-secondary" />
                    </button>
                  </div>
                </div>
                <div className="p-5 text-center">
                  <h3 className="text-lg font-semibold mb-1 font-mono text-secondary md:relative md:right-15">
                    {member.name}
                  </h3>
                  <p className="text-sm font-medium text-primary font-mono md:relative md:right-23">
                    {member.role}
                  </p>
                </div>
                {/* Blue lines on hover */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 group-hover:w-[98%] h-0 group-hover:h-[2px] bg-[#004D99] transition-all duration-300 rounded-full"></div>
                <div className="absolute top-1/2 left-0 transform -translate-y-1/2 h-0 group-hover:h-[98%] w-[2px] bg-secondary transition-all duration-300 rounded-full"></div>
                <div className="absolute top-1/2 right-0 transform -translate-y-1/2 h-0 group-hover:h-[98%] w-[2px] bg-secondary transition-all duration-300 rounded-full"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-12 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto relative bottom-20">
          <div className="text-center mb-10">
            <h2 className="text-xl md:text-2xl font-extrabold text-primary tracking-tight">
              Our <span className="text-secondary">Values</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {coreValues.map((value, index) => (
              <div
                key={index}
                className="flex items-start gap-4 bg-white rounded-lg shadow-md p-6"
              >
                <div className="flex-shrink-0">
                  <value.icon size={32} className="text-secondary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-1">
                    {value.title}
                  </h3>
                  <p className="text-sm text-primary leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamSection;
