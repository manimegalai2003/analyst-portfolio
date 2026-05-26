
const Experience = () => {
  const experiences = [
    {
      title: "Machine Learning Intern",
      company: "CodSoft",
      duration: "June 2024 – July 2024",
      description:
        "Developed and enhanced a face detection application using machine learning techniques, improving model accuracy and optimizing system performance.",
      color: "from-blue-500 to-purple-600",
    },

    {
      title: "Associate Trainee",
      company: "VISTA Engg Solutions Private Limited",
      duration: "April 2026 – May 2026",
      description:
        "Performed LiDAR frame data annotation by accurately labeling objects to support AI/ML dataset preparation and quality validation.",
      color: "from-pink-500 to-purple-600",
    },
  ];

  return (
    <section id="experience" className="py-20 px-6 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="animate-fade-in">
          <h2 className="text-5xl font-bold text-center mb-4">
            <span className="text-gradient bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">
              Internships
            </span>
          </h2>
          
          
          <div className="max-w-6xl mx-auto">
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div 
                  key={index}
                  className="group relative"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* 3D Card Effect */}
                  <div className="relative transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 animate-fade-in-left">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="relative glass-card rounded-2xl p-8 border border-white/20 backdrop-blur-xl bg-gradient-to-br from-black/40 to-purple-900/20 hover:from-black/60 hover:to-purple-900/40 transition-all duration-500">
                      {/* Floating gradient orb */}
                      <div className={`absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r ${exp.color} rounded-full opacity-20 blur-md group-hover:opacity-40 transition-opacity duration-500`}></div>
                      
                      <div className="relative z-10">
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                          <div>
                            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
                              {exp.title}
                            </h3>
                            <p className="text-lg text-purple-400 mb-2 font-semibold">{exp.company}</p>
                          </div>
                          <div className="flex items-center">
                            <div className={`px-4 py-2 rounded-full bg-gradient-to-r ${exp.color} text-white font-medium text-sm shadow-lg`}>
                              {exp.duration}
                            </div>
                          </div>
                        </div>
                        <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">
                          {exp.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
