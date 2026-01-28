import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Github, Linkedin, Mail, Download, MapPin } from "lucide-react"

export function PortfolioHero() {
  return (
    <section id="home" className="relative isolate overflow-hidden min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-16 items-center justify-items-center py-20 max-w-7xl mx-auto">
          {/* Left Content */}
          <div className="space-y-8 lg:justify-self-end lg:max-w-lg xl:max-w-xl">
            <div className="space-y-4 hero-content">
              <p className="text-sm uppercase tracking-[0.25em] text-orange-400/80">Hi, I am</p>
              <h1 className="text-5xl md:text-6xl font-bold text-white">Jagjit Bhosale</h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-orange-400 drop-shadow-[0_0_20px_rgba(251,146,60,0.35)]">
                Computer Science Student
              </h2>
              <p className="text-lg text-gray-300 max-w-lg leading-relaxed">
                Passionate about AI/ML and full-stack development. Building innovative solutions that make a difference
                in the world.
              </p>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row gap-4 text-sm text-gray-400 hero-content">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>bhosalejagjit05@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Pune, India</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 hero-content">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium">
                <Mail className="h-4 w-4 mr-2" />
                Get In Touch
              </Button>
              <Button
                variant="outline"
                className="border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-black px-6 py-3 rounded-lg font-medium bg-transparent"
              >
                <Download className="h-4 w-4 mr-2" />
                Download Resume
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 hero-content">
              <a
                href="https://github.com/JagjitBhosale"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full glass-border hover:bg-orange-400/10 transition-colors"
              >
                <Github className="h-5 w-5 text-gray-300 hover:text-orange-400" />
              </a>
              <a
                href="https://linkedin.com/in/jagjitbhosale"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full glass-border hover:bg-orange-400/10 transition-colors"
              >
                <Linkedin className="h-5 w-5 text-gray-300 hover:text-orange-400" />
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-800 hero-content">
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-400">3+</div>
                <div className="text-sm text-gray-400">Hackathon Wins</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-400">5+</div>
                <div className="text-sm text-gray-400">Projects Built</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-400">8.77</div>
                <div className="text-sm text-gray-400">CGPA</div>
              </div>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex justify-center lg:justify-start hero-image">
            <div className="relative">
              <div className="w-80 h-80 xl:w-96 xl:h-96 rounded-2xl glass-border-enhanced overflow-hidden">
                <Image
                  src="/images/jagjit.jpeg"
                  alt="Jagjit Bhosale"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
