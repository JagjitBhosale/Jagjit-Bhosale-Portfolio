import Image from "next/image"
import Link from "next/link"
import { Youtube } from "lucide-react"

export function ProjectsSection() {
  const projects = [
    {
      title: "Multi-Platform Price Tracker",
      subtitle: "Industrial full‑stack price comparison platform",
      description:
        "Built a full-stack price comparison platform to fetch and compare real-time product prices across multiple e-commerce platforms, with price tracking and alerts via email/WhatsApp, user dashboards for tracking products and viewing best deals, and price history monitoring — implemented under industry guidance, learning real-world web scraping, API handling, authentication, and deployment workflows.",
      image: "/images/PriceCompare.png",
      technologies: ["Next.js", "Node.js", "Express", "MongoDB", "Web Scraping", "REST APIs"],
      liveUrl: "#",
      githubUrl: "https://github.com/JagjitBhosale/multi-platform-price-tracker",
    },
    {
      title: "Retailverse",
      subtitle: "E-commerce collaboration platform",
      description: "Designed 3 Walmart add-on features: Shopping Pods (real-time collaborative carts), AI Smart Search, and Smart Store Navigator with WebSocket-based live updates.",
      image: "/images/retailverse.png",
      technologies: ["Next.js 14", "TypeScript", "WebSocket", "PostgreSQL", "Clerk"],
      liveUrl: "https://Retailverse-six.vercel.app/",
      githubUrl: "#",
      youtubeUrl: "https://youtu.be/vB-f6Lv2L4U?si=xsr1drkvXsHE8D35", // TODO: replace with actual YouTube demo URL
    },
    {
      title: "AlphaGen",
      subtitle: "AI content creation platform",
      description: "AI platform for content creators to auto-generate images, thumbnails, and videos using theme prompts & trending audio. Integrated analytics tools and Chrome extension.",
      image: "/images/Alphagen.png",
      technologies: ["Next.js", "Python", "FastAPI", "Hugging Face", "FFmpeg"],
      liveUrl: "https://alphagen-multimodal-content-platfor.vercel.app/",
      githubUrl: "https://github.com/JagjitBhosale/alphagen-multimodal-content-platform",
    },
    {
      title: "EcoSmart",
      subtitle: "Civic engagement platform",
      description: "Real-time civic issue reporting via images and geolocation with portals for citizens & authorities. Features service ticketing, live alerts, and chatbot support.",
      image: "/images/EcoSmart.jpg",
      technologies: ["Next.js", "Node.js", "FastAPI", "MongoDB", "Gemini LLM"],
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
            {projects.map((project) => (
              <div
                key={project.title}
                className="project-card group rounded-2xl border border-zinc-800/70 bg-zinc-900/70 overflow-hidden shadow-md transition-all duration-300 hover:-translate-y-2 hover:border-orange-500/70 hover:shadow-orange-500/30"
              >
                {/* Thumbnail */}
                <div className="relative h-40 w-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-5 space-y-3">
                  <div>
                    <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                    <p className="text-sm text-zinc-300">{project.subtitle}</p>
                  </div>

                  <p className="text-sm text-zinc-400 line-clamp-3">{project.description}</p>

                  {/* Tech pills */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-zinc-700 bg-zinc-900/80 px-2.5 py-0.5 text-xs text-zinc-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="mt-4 flex items-center justify-between gap-2">
                    <div className="flex items-center gap-3">
                      <Link
                        href={project.liveUrl}
                        target="_blank"
                        className="text-xs font-medium text-orange-400 hover:text-orange-300 transition-colors"
                      >
                        Live Demo →
                      </Link>
                      {"youtubeUrl" in project && project.youtubeUrl && (
                        <Link
                          href={project.youtubeUrl}
                          target="_blank"
                          className="inline-flex items-center gap-1 rounded-full border border-red-600/70 bg-red-600/10 px-2.5 py-1 text-[11px] font-medium text-red-400 hover:bg-red-600/20 hover:text-red-300 transition-colors"
                        >
                          <Youtube className="h-3 w-3" />
                          Video Demo
                        </Link>
                      )}
                    </div>
                    <Link
                      href={project.githubUrl}
                      target="_blank"
                      className="text-xs font-medium text-zinc-300 hover:text-orange-300 transition-colors"
                    >
                      View Code
                    </Link>
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
