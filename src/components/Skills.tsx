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
    <section
      id="skills"
      className="py-20 grid lg:grid-cols-2 gap-12 items-start relative"
    >
      {/* Scattered dots */}
      <div className="absolute top-8 left-8 w-2 h-2 bg-green-500 rounded-full opacity-60"></div>
      <div className="absolute top-16 left-12 w-2 h-2 bg-red-500 rounded-full opacity-60"></div>
      <div className="absolute top-24 left-6 w-2 h-2 bg-yellow-500 rounded-full opacity-60"></div>
      {/* Left copy */}
      <div>
        <div className="egg-shape inline-block border border-primary text-primary font-medium px-6 py-2 mx-auto hover:bg-primary/5 transition">
          My Skills
        </div>
        <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
          Why Hire Me For Your
          <br />
          Next <span className="text-primary">Project?</span>
        </h2>
        <p className="mt-6 text-lg text-neutral/70 max-w-2xl">
          {description ||
            "I'm a Full Stack Developer specializing in building scalable web applications. My passion is developing robust solutions & solving complex business problems through modern technologies and best practices."}
        </p>
        <button
          onClick={handleHireMe}
          className="btn btn-primary btn-lg p-2 w-max block rounded-md mt-10 px-8"
        >
          Hire Me
        </button>
      </div>
      {/* Right cards */}
      <div className="grid sm:grid-cols-2 gap-6">
        {SKILLS_DATA.map((item, index) => {
          const IconComponent = skillIcons[index];
          return (
            <div
              key={item.title}
              className="card bg-base-100 shadow-md hover:shadow-lg"
            >
              <div className="card-body">
                <IconComponent className="w-8 h-8 text-primary mb-2" />
                <h3 className="card-title text-xl">{item.title}</h3>
                <p className="text-neutral/70">{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
