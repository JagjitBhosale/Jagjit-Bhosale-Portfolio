import { Award, Calendar, MapPin, BookOpen, Trophy } from "lucide-react"

export function EducationSection() {
  const education = [
    {
      institution: "Vishwakarma Institute of Information Technology",
      degree: "B.Tech in Computer Science and Engineering (AIML)",
      duration: "2023 – 2027",
      location: "Pune, India",
      grade: "CGPA – 8.69",
      description:
        "Specializing in Artificial Intelligence and Machine Learning with focus on practical applications and research.",
      status: "current",
      color: "from-orange-500 to-red-500",
    },
    {
      institution: "Decent School",
      degree: "CBSE – Grade XII",
      duration: "2020 – 2022",
      location: "Kota, Rajasthan, India",
      grade: "78.8%",
      description: "Completed higher secondary education with focus on Science and Mathematics.",
      status: "completed",
      color: "from-blue-500 to-purple-500",
    },
    {
      institution: "Kidees Info Park",
      degree: "CBSE – Grade X",
      duration: "2015 – 2020",
      location: "Latur, Maharashtra, India",
      grade: "92.8%",
      description: "Strong foundation in core subjects with excellent academic performance.",
      status: "completed",
      color: "from-green-500 to-teal-500",
    },
  ]

  const certifications = [
    {
      title: "CCNAv7: Introduction to Networks",
      issuer: "Cisco Networking Academy",
      description: "Comprehensive networking fundamentals and protocols",
      icon: BookOpen,
      color: "from-cyan-500 to-blue-500",
    },
    {
      title: "Walmart Sparkethon Certificate",
      issuer: "Walmart",
      description: "Recognized for innovative retail tech solution",
      icon: Trophy,
      color: "from-yellow-500 to-orange-500",
    },
  ]

  return (
    <section id="education" className="py-16 px-4 gsap-fade-in">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 gsap-slide-up">
            My <span className="text-orange-400">Education</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto gsap-slide-up">
            Academic journey and continuous learning
          </p>
        </div>

        <div className="space-y-6 mb-12">
          {education.map((edu, index) => (
            <div
              key={index}
              className="glass-border p-6 rounded-2xl hover:bg-orange-400/5 transition-all duration-300 gsap-scale"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`w-3 h-3 bg-gradient-to-r ${edu.color} rounded-full`}></div>
                    <span className="text-sm font-medium text-orange-400 uppercase tracking-wider">
                      {edu.status === "current" ? "Current" : "Completed"}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">{edu.institution}</h3>
                  <p className="text-orange-400 font-semibold mb-2">{edu.degree}</p>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-300">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-orange-400" />
                      <span>{edu.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-orange-400" />
                      <span>{edu.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="h-4 w-4 text-orange-400" />
                      <span className="font-bold text-orange-400">{edu.grade}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div>
          <h3 className="text-2xl font-bold text-white mb-6 text-center gsap-slide-up">
            <span className="text-orange-400">Certifications</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="glass-border p-6 rounded-2xl hover:bg-orange-400/5 transition-all duration-300 gsap-scale"
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${cert.color} rounded-xl flex items-center justify-center flex-shrink-0`}
                  >
                    <cert.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-1">{cert.title}</h4>
                    <p className="text-orange-400 font-semibold mb-2 text-sm">{cert.issuer}</p>
                    <p className="text-gray-300 text-sm">{cert.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
