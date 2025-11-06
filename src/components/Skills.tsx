import { FaGem, FaGraduationCap, FaChartLine } from "react-icons/fa";
import {
  SKILLS_DATA,
  openWhatsApp,
  WHATSAPP_MESSAGES,
} from "../data/constants";

interface SkillsProps {
  description?: string;
}

const skillIcons = [FaGem, FaChartLine, FaGraduationCap];

export default function Skills({ description }: SkillsProps) {
  const handleHireMe = () => {
    openWhatsApp(WHATSAPP_MESSAGES.hireMe);
  };

  return (
    <section id="skills" className="bg-white py-12 sm:py-20 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Scattered dots */}
          <div className="absolute top-8 left-8 w-2 h-2 bg-green-500 rounded-full opacity-60"></div>
          <div className="absolute top-16 left-12 w-2 h-2 bg-red-500 rounded-full opacity-60"></div>
          <div className="absolute top-24 left-6 w-2 h-2 bg-yellow-500 rounded-full opacity-60"></div>
          {/* Left copy */}
          <div>
            <div className="egg-shape inline-block border border-primary text-primary font-medium text-sm px-4 sm:px-6 py-2 mb-6">
              My Skills
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight text-neutral">
              Why Hire Me For Your
              <br />
              Next <span className="text-primary">Project?</span>
            </h2>
            <p className="mt-6 text-sm sm:text-base lg:text-lg text-neutral/70 max-w-2xl leading-relaxed">
              {description ||
                "I'm a Full Stack Developer specializing in building scalable web applications. My passion is developing robust solutions & solving complex business problems through modern technologies and best practices."}
            </p>
            <button
              onClick={handleHireMe}
              className="btn btn-primary btn-lg rounded-md mt-8 sm:mt-10 px-6 sm:px-8 py-3 text-sm sm:text-base font-medium w-full sm:w-auto"
            >
              Hire Me
            </button>
          </div>
          {/* Right cards */}
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {SKILLS_DATA.map((item, index) => {
              const IconComponent = skillIcons[index];
              return (
                <div
                  key={item.title}
                  className="card bg-white shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="card-body p-4 sm:p-6">
                    <IconComponent className="w-8 h-8 text-primary mb-3" />
                    <h3 className="card-title text-base sm:text-lg font-bold mb-2 text-neutral">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral/70 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
