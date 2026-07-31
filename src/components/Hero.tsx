import { Button } from "@/components/ui/button";
import { Github, Mail, Linkedin, ArrowDown } from "lucide-react";
import { useState, useEffect } from "react";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentRole, setCurrentRole] = useState(0);

  const roles = ["Data Analyst", "Data Annotation"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-black to-purple-800/20"></div>

        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-purple-500/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-blue-500/15 rounded-full blur-2xl animate-float-delayed"></div>
        <div className="absolute bottom-32 left-1/4 w-24 h-24 bg-pink-500/20 rounded-full blur-xl animate-float"></div>

        {/* Interactive cursor follower */}
        <div
          className="absolute w-6 h-6 bg-purple-400/30 rounded-full blur-sm pointer-events-none transition-all duration-300 ease-out"
          style={{
            left: mousePosition.x - 12,
            top: mousePosition.y - 12,
          }}
        ></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Animated greeting */}
        <div className="mb-8 animate-fade-in">
          <p className="text-purple-400 text-lg mb-4 font-medium tracking-wide">
            Hello, I'm
          </p>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 relative">
            <span className="text-gradient bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent animate-gradient">
              Mani
            </span>
            <span className="text-gradient bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent animate-gradient">
              megalai S
            </span>
            {/* Decorative underline */}
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
          </h1>
        </div>

        {/* Animated role switcher */}
        <div
          className="mb-8 h-16 flex items-center justify-center animate-fade-in"
          style={{ animationDelay: "0.3s" }}
        >
          <div className="text-2xl md:text-3xl text-gray-300 relative overflow-hidden">
            <span className="inline-block animate-fade-in" key={currentRole}>
              {roles[currentRole]}
            </span>
          </div>
        </div>

        {/* Enhanced description */}
        <div
          className="mb-12 animate-fade-in"
          style={{ animationDelay: "0.6s" }}
        >
         <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-6">
  Passionate{" "}
  <span className="text-purple-400 font-semibold">Data Analyst</span> and{" "}
  <span className="text-purple-400 font-semibold">Data Annotation Professional</span>{" "}
  focused on transforming raw data into meaningful insights and building
  high-quality AI datasets. Skilled in{" "}
  <span className="text-purple-400 font-semibold">Python</span>,{" "}
  <span className="text-purple-400 font-semibold">SQL</span>,{" "}
  <span className="text-purple-400 font-semibold">Excel</span>,{" "}
  <span className="text-purple-400 font-semibold">Power BI</span>,{" "}
  <span className="text-purple-400 font-semibold">Text Annotation</span>, and{" "}
  <span className="text-purple-400 font-semibold">3D LiDAR Annotation</span>,
  with a strong understanding of data analysis, visualization, reporting, and
  AI dataset preparation.
</p>
        </div>

        {/* Enhanced CTA buttons */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12 animate-fade-in"
          style={{ animationDelay: "0.9s" }}
        >
          <Button
            size="lg"
            className="group relative bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105"
            onClick={scrollToContact}
          >
            <span className="relative z-10 flex items-center">
              Get In Touch
              <Mail className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity"></div>
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="group border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105"
            onClick={scrollToProjects}
          >
            <span className="flex items-center">
              View Projects
              <ArrowDown className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </span>
          </Button>
        </div>

        {/* Enhanced social links */}
        <div
          className="flex items-center justify-center space-x-8 animate-fade-in"
          style={{ animationDelay: "1.2s" }}
        >
          <a
            href="mailto:manimegalaisekar.sm@gmail.com"
            className="group relative p-4 rounded-full bg-white/5 border border-white/10 hover:border-purple-400/50 transition-all duration-300 transform hover:scale-110 hover:rotate-6"
          >
            <Mail className="w-6 h-6 text-gray-400 group-hover:text-purple-400 transition-colors" />
            <div className="absolute inset-0 rounded-full bg-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity blur-xl"></div>
          </a>
          <a
            href="https://github.com/manimegalai2003"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-4 rounded-full bg-white/5 border border-white/10 hover:border-purple-400/50 transition-all duration-300 transform hover:scale-110 hover:rotate-6"
          >
            <Github className="w-6 h-6 text-gray-400 group-hover:text-purple-400 transition-colors" />
            <div className="absolute inset-0 rounded-full bg-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity blur-xl"></div>
          </a>
          <a
            href="https://www.linkedin.com/in/manimegalai-sekar/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-4 rounded-full bg-white/5 border border-white/10 hover:border-purple-400/50 transition-all duration-300 transform hover:scale-110 hover:rotate-6"
          >
            <Linkedin className="w-6 h-6 text-gray-400 group-hover:text-purple-400 transition-colors" />
            <div className="absolute inset-0 rounded-full bg-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity blur-xl"></div>
          </a>
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center space-y-2">
          <div className="w-6 h-10 border-2 border-purple-400 rounded-full flex justify-center relative overflow-hidden">
            <div className="w-1 h-3 bg-purple-400 rounded-full mt-2 animate-pulse"></div>
          </div>
          <p className="text-xs text-gray-400 uppercase tracking-wider">
            Scroll
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
