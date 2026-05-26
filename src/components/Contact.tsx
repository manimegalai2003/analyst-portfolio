import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Github, Linkedin, Send } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    description: "",
  });
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");
    try {
      const response = await fetch("https://formspree.io/f/xyzjjrjg", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.description,
        }),
      });
      if (response.ok) {
        setStatus("Message sent!");
        setFormData({ name: "", email: "", description: "" });
      } else {
        setStatus("Failed to send. Please try again.");
      }
    } catch (error) {
      setStatus("Failed to send. Please try again.");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 px-6 bg-black/20">
      <div className="container mx-auto">
        <div className="animate-fade-in">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="text-gradient">Get In Touch</span>
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="glass-card rounded-xl p-8">
                <h3 className="text-2xl font-semibold text-white mb-6">
                  Send me a message
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-gray-300 mb-2 font-medium"
                    >
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 focus:border-purple-400"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-gray-300 mb-2 font-medium"
                    >
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@gmail.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 focus:border-purple-400"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="description"
                      className="block text-gray-300 mb-2 font-medium"
                    >
                      Description
                    </label>
                    <Textarea
                      id="description"
                      name="description"
                      placeholder="Tell me about your project or just say hello!"
                      value={formData.description}
                      onChange={handleChange}
                      className="bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 focus:border-purple-400 min-h-[120px]"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 text-white py-3 rounded-xl transition-all duration-300 transform hover:scale-105"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                  {status && (
                    <p className="text-center text-sm text-gray-300 mt-2">
                      {status}
                    </p>
                  )}
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <p className="text-xl text-gray-300 mb-8">
                    I'm always excited to discuss new opportunities, collaborate
                    on projects, or just have a chat about technology and
                    innovation. Feel free to reach out!
                  </p>
                </div>

                <div className="space-y-6">
                  <a
                    href="mailto:manimegalaim10152003@gmail.com"
                    className="glass-card rounded-xl p-6 hover-glow transition-all duration-300 group flex items-center"
                  >
                    <Mail className="w-8 h-8 text-purple-400 mr-4 group-hover:scale-110 transition-transform" />
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">
                        Email
                      </h3>
                      <p className="text-gray-300 text-sm">
                        manimegalaisekar.sm@gmail.com
                      </p>
                    </div>
                  </a>

                  <a
                    href="https://github.com/manimegalai2003"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-card rounded-xl p-6 hover-glow transition-all duration-300 group flex items-center"
                  >
                    <Github className="w-8 h-8 text-purple-400 mr-4 group-hover:scale-110 transition-transform" />
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">
                        GitHub
                      </h3>
                      <p className="text-gray-300 text-sm">@manimegalai2003</p>
                    </div>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/manimegalai-sekar/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-card rounded-xl p-6 hover-glow transition-all duration-300 group flex items-center"
                  >
                    <Linkedin className="w-8 h-8 text-purple-400 mr-4 group-hover:scale-110 transition-transform" />
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">
                        LinkedIn
                      </h3>
                      <p className="text-gray-300 text-sm">Manimegalai S</p>
                    </div>
                  </a>
                </div>

                <div className="text-center pt-6">
                  <p className="text-gray-400 mb-2">
                    Located in Coimbatore, Tamil Nadu, India
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

export default Contact;
