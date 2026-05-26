import { Award, Trophy, Star } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      title: "AI Financial Planner – 5th Place",
      event: "AITM CodeFest Hackathon",
      description:
        "Built an AI-driven financial assistant using LSTM to help users manage budgets and investments.",
      icon: Trophy,
      color: "from-yellow-400 to-orange-500",
      rank: "5th",
    },

    {
      title: "Responsive Environmental Website – 3rd Place",
      event: "Web Designing Project",
      description:
        "Designed an interactive website promoting eco-awareness using HTML, CSS, and JavaScript.",
      icon: Award,
      color: "from-green-400 to-teal-500",
      rank: "3rd",
    },

    {
      title: "Technical Quiz – 1st Place",
      event: "SANTEKFEST 2K23",
      description:
        "Secured a top position in a national-level quiz covering general knowledge, science, and computer fundamentals.",
      icon: Star,
      color: "from-purple-400 to-pink-500",
      rank: "1st",
    },
  ];

  return (
    <section
      id="achievements"
      className="py-20 px-6 bg-black/20 relative overflow-hidden"
    >
      {/* Animated particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-purple-400 rounded-full opacity-20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="container mx-auto relative z-10">
        <div className="animate-fade-in">
          {/* Heading */}
          <h2 className="text-5xl font-bold text-center mb-4">
            <span className="text-gradient bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-600 bg-clip-text text-transparent">
              Achievements
            </span>
          </h2>

          <p className="text-center text-gray-400 mb-16 text-lg">
            Celebrating milestones and recognition
          </p>

          {/* Centered Cards */}
          <div className="max-w-6xl mx-auto flex justify-center">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="group relative animate-scale-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-pink-600/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700 transform group-hover:scale-110"></div>

                  <div className="relative transform transition-all duration-700 hover:scale-105 hover:-translate-y-4 hover:rotate-1">
                    <div className="glass-card rounded-2xl p-8 border-2 border-transparent bg-gradient-to-br from-black/50 to-purple-900/30 hover:border-purple-400/50 transition-all duration-500 h-full">
                      {/* Rank Badge */}
                      <div
                        className={`absolute -top-3 -right-3 w-16 h-16 bg-gradient-to-r ${achievement.color} rounded-full flex items-center justify-center text-white font-bold text-sm shadow-2xl border-4 border-white/20`}
                      >
                        {achievement.rank}
                      </div>

                      {/* Icon */}
                      <div className="relative mb-6">
                        <div
                          className={`w-20 h-20 bg-gradient-to-r ${achievement.color} rounded-2xl flex items-center justify-center mx-auto shadow-2xl transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-12`}
                        >
                          <achievement.icon className="w-10 h-10 text-white" />
                        </div>

                        <div
                          className={`absolute inset-0 w-20 h-20 bg-gradient-to-r ${achievement.color} rounded-2xl blur-md opacity-50 mx-auto`}
                        ></div>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-white mb-3 text-center group-hover:text-purple-300 transition-colors duration-300">
                        {achievement.title}
                      </h3>

                      {/* Event */}
                      <p
                        className={`text-center mb-4 font-semibold bg-gradient-to-r ${achievement.color} bg-clip-text text-transparent`}
                      >
                        {achievement.event}
                      </p>

                      {/* Description */}
                      <p className="text-gray-300 text-center text-sm leading-relaxed group-hover:text-white transition-colors duration-300">
                        {achievement.description}
                      </p>

                      {/* Decorative line */}
                      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
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

export default Achievements;
