"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, MapPin, Github, Linkedin, Download, Send, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Create mailto link with form data
    const subject = encodeURIComponent(formData.subject || "Portfolio Contact")
    const body = encodeURIComponent(
      `Hi Jagjit,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`,
    )
    window.location.href = `mailto:bhosalejagjit05@gmail.com?subject=${subject}&body=${body}`
  }

  const handleResumeDownload = () => {
    // Create a downloadable resume file
    const resumeContent = `
JAGJIT BHOSALE
Computer Science & Engineering (AIML) Student
+91-7728890822 | bhosalejagjit05@gmail.com
LinkedIn: linkedin.com/in/jagjitbhosale | GitHub: github.com/JagjitBhosale

EDUCATION
Vishwakarma Institute of Information Technology, Pune
B.Tech in Computer Science and Engineering (AIML), CGPA – 8.69 (2023 – 2027)

Decent School, Kota, Rajasthan
CBSE – Grade XII, 78.8% (2020 – 2022)

Kidees Info Park, Latur, Maharashtra
CBSE – Grade X, 92.8% (2015 – 2020)

ACHIEVEMENTS
• Best Solution Award at InnovateYou Techathon 2.0 – Ranked 1st out of 327+ teams
• First Place at COEP CSI INSPIRON 4.0 Hackathon – Won company-sponsored challenge
• Third Place at MKSSS Cummins×Mastercard Hackathon – Built EcoSmart platform

PROJECTS
• Retailverse - Walmart Sparkethon 2025 project with collaborative shopping features
• AlphaGen - AI platform for content creators (Hackathon Winner)
• CodeFun - Gamified coding platform for kids
• EcoSmart - Civic issue reporting platform (Hackathon Winner)

TECHNICAL SKILLS
Languages: C/C++, JavaScript, Python, Java, SQL, HTML/CSS, TypeScript
Frameworks: React.js, Next.js, Node.js, MongoDB, FastAPI
Tools: Git, VS Code, Prisma, Clerk

CERTIFICATIONS
• CCNA v7: Introduction to Networks – Cisco Networking Academy
• Walmart Sparkethon Certificate – Recognized for innovative retail tech solution
    `.trim()

    const blob = new Blob([resumeContent], { type: "text/plain" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "Jagjit_Bhosale_Resume.txt"
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "bhosalejagjit05@gmail.com",
      href: "mailto:bhosalejagjit05@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91-7728890822",
      href: "tel:+917728890822",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Pune, Maharashtra, India",
      href: "#",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/jagjitbhosale",
      href: "https://linkedin.com/in/jagjitbhosale",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/JagjitBhosale",
      href: "https://github.com/JagjitBhosale",
    },
  ]

  return (
    <section id="contact" className="py-20 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-purple-500/5"></div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16 contact-content">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center">
              <Mail className="h-6 w-6 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Get In{" "}
              <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">Touch</span>
            </h2>
          </div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Ready to collaborate on innovative projects or discuss opportunities in tech and AI
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-8 contact-content">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Let's Connect</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                I'm always excited to discuss new opportunities, collaborate on innovative projects, or simply chat
                about the latest in technology and AI. Whether you're looking for a passionate developer for your team
                or want to explore potential partnerships, I'd love to hear from you.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              {contactInfo.map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  target={contact.href.startsWith("http") ? "_blank" : undefined}
                  rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-4 p-4 glass-border rounded-lg hover:bg-orange-400/5 transition-colors group"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center group-hover:bg-orange-500/30 transition-colors">
                    <contact.icon className="h-5 w-5 text-orange-400" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">{contact.label}</div>
                    <div className="text-white font-medium">{contact.value}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* Resume Download */}
            <div className="glass-border-enhanced p-6 rounded-xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center">
                  <Download className="h-5 w-5 text-orange-400" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">Resume</h4>
                  <p className="text-gray-400 text-sm">Download my latest resume</p>
                </div>
              </div>
              <Button onClick={handleResumeDownload} className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                <Download className="h-4 w-4 mr-2" />
                Download Resume
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="glass-border p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-orange-400 mb-1">24/7</div>
                <div className="text-sm text-gray-400">Response Time</div>
              </div>
              <div className="glass-border p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-orange-400 mb-1">100%</div>
                <div className="text-sm text-gray-400">Commitment</div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-border-enhanced p-8 rounded-2xl h-fit contact-content">
            <div className="flex items-center gap-3 mb-6">
              <MessageSquare className="h-6 w-6 text-orange-400" />
              <h3 className="text-xl font-semibold text-white">Send a Message</h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="bg-gray-800/50 border-gray-700 text-white placeholder-gray-400 focus:border-orange-400"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="bg-gray-800/50 border-gray-700 text-white placeholder-gray-400 focus:border-orange-400"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="bg-gray-800/50 border-gray-700 text-white placeholder-gray-400 focus:border-orange-400"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="bg-gray-800/50 border-gray-700 text-white placeholder-gray-400 focus:border-orange-400 resize-none"
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>

              <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3">
                <Send className="h-4 w-4 mr-2" />
                Send Message
              </Button>

              <div className="p-4 bg-orange-500/10 border border-orange-500/20 rounded-lg">
                <p className="text-orange-300 text-sm text-center">
                  I typically respond within 24 hours. Looking forward to hearing from you!
                </p>
              </div>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-gray-800">
          <div className="text-center">
            <p className="text-gray-400 mb-4">Built with passion using Next.js, TypeScript, and Tailwind CSS</p>
            <div className="flex items-center justify-center gap-6">
              <a
                href="https://linkedin.com/in/jagjitbhosale"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-400 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/JagjitBhosale"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-400 transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="mailto:bhosalejagjit05@gmail.com"
                className="text-gray-400 hover:text-orange-400 transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
            <p className="text-gray-500 text-sm mt-4">© 2025 Jagjit Bhosale. All rights reserved.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
