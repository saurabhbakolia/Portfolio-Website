import React, { useContext } from "react";
import ExperienceCard from "./ExperienceCard";
import experience from "../data/experience";
import ThemeContext from "../contexts/ThemeContext";

const ExperiencePage = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <main
      className={`flex justify-center items-start w-full min-h-screen p-6 transition-all duration-300 ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
      id="experience"
    >
      <div className="w-full max-w-4xl">
        {/* Page Title */}
        <h1
          className={`text-3xl lg:text-4xl font-bold mb-6 text-center ${
            theme === "dark" ? "text-[#16B0B2]" : "text-[#1A8B9D]"
          }`}
        >
          Experience
        </h1>

        {/* Education Section */}
        <section className="mb-6">
          <h2 className="text-lg md:text-xl font-semibold mb-2">
            Education
          </h2>
          <div className="">
            <h3 className="text-base md:text-lg font-medium">
              Master of Science (Economics)
            </h3>
            <p className="text-sm md:text-base">Indian Institute of Technology Kharagpur</p>
            <span className="text-xs md:text-sm text-gray-500">2020 - 2025</span>
          </div>
        </section>

        {/* Work Experience Section */}
        <section>
          <h2 className="text-lg md:text-xl font-semibold mb-2">
            Work Experience
          </h2>
          <div className="flex flex-col space-y-4">
            {experience.map((exp) => (
              <ExperienceCard key={exp.id} exp={exp} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default ExperiencePage;
