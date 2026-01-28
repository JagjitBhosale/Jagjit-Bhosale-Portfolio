import CardFlip from "@/components/ui/card-flip"

export function ProjectsSection() {
  const projects = [
    {
      title: "Retailverse",
      subtitle: "E-commerce collaboration platform",
      description: "Designed 3 Walmart add-on features: Shopping Pods (real-time collaborative carts), AI Smart Search, and Smart Store Navigator with WebSocket-based live updates.",
      image: "/modern-e-commerce-dashboard-with-collaborative-sho.jpg",
      technologies: ["Next.js 14", "TypeScript", "WebSocket", "PostgreSQL", "Clerk"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "AlphaGen",
      subtitle: "AI content creation platform",
      description: "AI platform for content creators to auto-generate images, thumbnails, and videos using theme prompts & trending audio. Integrated analytics tools and Chrome extension.",
      image: "/ai-content-creation-platform-with-video-and-image-.jpg",
      technologies: ["Next.js", "Python", "FastAPI", "Hugging Face", "FFmpeg"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "EcoSmart",
      subtitle: "Civic engagement platform",
      description: "Real-time civic issue reporting via images and geolocation with portals for citizens & authorities. Features service ticketing, live alerts, and chatbot support.",
      image: "/civic-engagement-app-with-issue-reporting-and-geol.jpg",
      technologies: ["Next.js", "Node.js", "FastAPI", "MongoDB", "Gemini LLM"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "CodeFun",
      subtitle: "Gamified coding education",
      description: "Gamified coding platform teaching kids through interactive games and challenges with integrated code submission & tracking system for personalized learning progress.",
      image: "/colorful-gamified-coding-education-platform-for-ch.jpg",
      technologies: ["React", "JavaScript", "MongoDB"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ]

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="text-orange-400">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A showcase of my technical projects, hackathon wins, and innovative solutions
          </p>
        </div>

        {/* Projects Grid */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-6xl">
            {projects.map((project, index) => (
              <CardFlip
                key={index}
                title={project.title}
                subtitle={project.subtitle}
                description={project.description}
                features={project.technologies}
                image={project.image}
                liveUrl={project.liveUrl}
                githubUrl={project.githubUrl}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
