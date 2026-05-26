import { useState } from "react";
import { Database } from "lucide-react";

const Skills = () => {
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null);

  const skillCategories = [
    {
      category: "Data Analytics",
      icon: Database,

      skills: [
        { name: "Python", level: 80 },
        { name: "SQL", level: 70 },
        { name: "Excel", level: 85 },
        { name: "Power BI", level: 80 },
        { name: "Data Visualization", level: 80 },
      ],

      color: "from-blue-500 to-purple-600",
      bgGradient: "from-blue-500/20 to-purple-600/20",
    },
  ];

  return (
    <section id="skills" className="py-24 px-6 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 right-10 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>

        <div
          className="absolute bottom-20 left-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="animate-fade-in">
          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-gradient bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">
                Technical Skills
              </span>
            </h2>

            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Expertise in data analysis, visualization, and modern analytical
              tools
            </p>
          </div>

          {/* Centered Skill Card */}
          <div className="flex justify-center items-center">
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon;

              return (
                <div
                  key={index}
                  className={`group relative glass-card rounded-2xl p-8 max-w-md w-full hover-glow transition-all duration-500 animate-scale-in transform hover:scale-105 ${
                    hoveredCategory === index
                      ? "bg-gradient-to-br " + category.bgGradient
                      : ""
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onMouseEnter={() => setHoveredCategory(index)}
                  onMouseLeave={() => setHoveredCategory(null)}
                >
                  {/* Floating icon */}
                  <div className="relative mb-6">
                    <div
                      className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-r ${category.color} flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300`}
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>

                    {/* Glow effect */}
                    <div
                      className={`absolute inset-0 w-16 h-16 mx-auto rounded-2xl bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-300`}
                    ></div>
                  </div>

                  {/* Category */}
                  <h3 className="text-2xl font-bold text-white mb-8 text-center group-hover:text-purple-300 transition-colors">
                    {category.category}
                  </h3>

                  {/* Skills */}
                  <div className="space-y-5">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-300 font-medium">
                            {skill.name}
                          </span>

                          <span className="text-purple-400 text-sm font-semibold">
                            {skill.level}%
                          </span>
                        </div>

                        {/* Progress bar */}
                        <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                          <div
                            className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out transform origin-left`}
                            style={{
                              width:
                                hoveredCategory === index
                                  ? `${skill.level}%`
                                  : "0%",
                              transitionDelay: `${skillIndex * 0.1}s`,
                            }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Hover Glow */}
                  <div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10 blur-xl`}
                  ></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
