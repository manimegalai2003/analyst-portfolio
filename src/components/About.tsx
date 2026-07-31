const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="animate-fade-in">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="text-gradient">About Me</span>
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="glass-card rounded-2xl p-8 hover-glow transition-all duration-300">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                {/* Photo section */}
                <div className="flex-shrink-0">
                  <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-purple-400/50 shadow-2xl">
                    <img
                      src="https://ik.imagekit.io/yy27q5txt/manimegalai%20s.jpg"
                      alt="Manimegalai S"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Content section */}
                <div className="flex-1">
                  <p className="text-lg text-gray-300 leading-relaxed">
                   I am a motivated Data Analyst and Data Annotation professional with hands-on experience in text annotation, 3D LiDAR annotation, and data analysis. Skilled in Python, SQL, Excel, and Power BI, I enjoy transforming raw data into meaningful insights while building high-quality datasets for AI and data-driven solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
