
const Education = () => {
  const educationData = [
    {
      institution: "KGiSL Institute of Technology",
      degree: "B.Tech in Artificial Intelligence and Data Science",
      period: "2023 – 2026",
      grade: "CGPA: 8.24",
      location: "Coimbatore"
    },
    {
      institution: "Sankara Polytechnic College",
      degree: "Diploma in Computer Engineering",
      period: "2020 – 2023",
      grade: "Percentage: 93%",
      location: "Coimbatore"
    }
  ];

  return (
    <section id="education" className="py-20 px-6 bg-black/20">
      <div className="container mx-auto">
        <div className="animate-fade-in">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="text-gradient">Education</span>
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {educationData.map((edu, index) => (
                <div 
                  key={index}
                  className="glass-card rounded-xl p-6 hover-glow transition-all duration-300 animate-fade-in-left"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {edu.institution}
                      </h3>
                      <p className="text-purple-400 mb-2">{edu.degree}</p>
                      <p className="text-gray-400">{edu.location}</p>
                    </div>
                    <div className="text-right mt-4 md:mt-0">
                      <p className="text-gray-300 mb-1">{edu.period}</p>
                      <p className="text-purple-400 font-semibold">{edu.grade}</p>
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

export default Education;
