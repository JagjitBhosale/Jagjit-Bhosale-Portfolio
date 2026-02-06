import { Code, Brain, Rocket, Users } from "lucide-react"

export function AboutSection() {
  const skills = [
    { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    {
      name: "TypeScript",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },
    {
      name: "JavaScript",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    {
      name: "PostgreSQL",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    },
    {
      name: "TensorFlow",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
    },
    { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    {
      name: "AWS",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
    },
  ]

  const interests = [
    {
      icon: Brain,
      title: "AI/ML Development",
      description: "Passionate about artificial intelligence and machine learning applications",
    },
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "Building end-to-end web applications with modern technologies",
    },
    {
      icon: Rocket,
      title: "Innovation",
      description: "Creating solutions that solve real-world problems through technology",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working with teams to build impactful projects and win hackathons",
    },
  ]

  return (
    <section id="about" className="py-20 px-4 gsap-fade-in">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 gsap-slide-up">
            About <span className="text-orange-400">Me</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto gsap-slide-up">
            A passionate Computer Science student with a focus on AI/ML and full-stack development
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Personal Story */}
          <div className="space-y-6 gsap-slide-left">
            <h3 className="text-2xl font-semibold text-white mb-4">My Journey</h3>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                I'm a B.Tech Computer Science student at Vishwakarma Institute of Information Technology, specializing
                in AI/ML with a current CGPA of 8.77. My journey in technology began with curiosity about how software
                can solve real-world problems.
              </p>
              <p>
                What drives me is the intersection of artificial intelligence and practical applications. I've had the
                privilege of winning 3 major hackathons, including the Best Solution Award at InnovateYou Techathon 2.0
                where I competed against 1200+ participants.
              </p>
              <p>
                Beyond coding, I believe in building solutions that make a meaningful impact. Whether it's creating
                AI-powered civic-tech solutions or developing platforms for content creators, I'm always looking for
                ways to use technology for good.
              </p>
            </div>
          </div>

          {/* Interests */}
          <div className="space-y-6 gsap-slide-right">
            <h3 className="text-2xl font-semibold text-white mb-4">What I'm Passionate About</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {interests.map((interest, index) => (
                <div
                  key={index}
                  className="glass-border p-4 rounded-lg hover:bg-orange-400/5 transition-colors gsap-scale"
                >
                  <interest.icon className="h-8 w-8 text-orange-400 mb-3" />
                  <h4 className="font-semibold text-white mb-2">{interest.title}</h4>
                  <p className="text-sm text-gray-400">{interest.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-16 relative">
          <h3 className="text-2xl font-semibold text-white mb-8 text-center gsap-slide-up">Technical Skills</h3>

          {/* Vintage corner decorations */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-orange-400/20 to-transparent rounded-full blur-3xl -z-10"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-orange-400/20 to-transparent rounded-full blur-3xl -z-10"></div>

          <div className="relative overflow-hidden glass-border-enhanced rounded-2xl p-8 gsap-fade-in">
            {/* First marquee - moving right */}
            <div className="flex animate-marquee-right space-x-12 mb-6">
              {skills.slice(0, 6).map((skill, index) => (
                <div key={index} className="flex items-center space-x-4 whitespace-nowrap">
                  <div className="w-10 h-10 flex items-center justify-center glass-border rounded-lg p-2">
                    <img
                      src={skill.logo || "/placeholder.svg"}
                      alt={skill.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-gray-300 font-medium text-lg">{skill.name}</span>
                </div>
              ))}
              {skills.slice(0, 6).map((skill, index) => (
                <div key={`duplicate-${index}`} className="flex items-center space-x-4 whitespace-nowrap">
                  <div className="w-10 h-10 flex items-center justify-center glass-border rounded-lg p-2">
                    <img
                      src={skill.logo || "/placeholder.svg"}
                      alt={skill.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-gray-300 font-medium text-lg">{skill.name}</span>
                </div>
              ))}
            </div>

            {/* Second marquee - moving left */}
            <div className="flex animate-marquee-left space-x-12">
              {skills.slice(6).map((skill, index) => (
                <div key={index} className="flex items-center space-x-4 whitespace-nowrap">
                  <div className="w-10 h-10 flex items-center justify-center glass-border rounded-lg p-2">
                    <img
                      src={skill.logo || "/placeholder.svg"}
                      alt={skill.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-gray-300 font-medium text-lg">{skill.name}</span>
                </div>
              ))}
              {skills.slice(6).map((skill, index) => (
                <div key={`duplicate-${index}`} className="flex items-center space-x-4 whitespace-nowrap">
                  <div className="w-10 h-10 flex items-center justify-center glass-border rounded-lg p-2">
                    <img
                      src={skill.logo || "/placeholder.svg"}
                      alt={skill.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-gray-300 font-medium text-lg">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
