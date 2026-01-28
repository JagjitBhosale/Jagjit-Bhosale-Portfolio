"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Home, User, GraduationCap, Briefcase, Award, Mail } from "lucide-react"
import { useState, useEffect } from "react"

export function PortfolioHeader() {
  const [activeSection, setActiveSection] = useState("home")

  const links = [
    { href: "#home", label: "Home", icon: Home },
    { href: "#about", label: "About Me", icon: User },
    { href: "#education", label: "Education", icon: GraduationCap },
    { href: "#projects", label: "Projects", icon: Briefcase },
    { href: "#achievements", label: "Achievements", icon: Award },
    { href: "#contact", label: "Contact", icon: Mail },
  ]

  // Smooth scroll function
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = links.map((link) => link.href.substring(1))
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetBottom = offsetTop + element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className="sticky top-0 z-50 p-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex h-14 items-center justify-between px-6 liquid-glass-header rounded-full">
          {/* Brand Logo */}
          <Link
            href="#home"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection("#home")
            }}
            className="flex items-center gap-2"
          >
            <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">JB</span>
            </div>
            <span className="font-semibold tracking-wide text-white">Jagjit Bhosale</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-6 text-sm md:flex">
            {links.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className={`hover:text-orange-400 transition-colors ${
                  activeSection === link.href.substring(1) ? "text-orange-400" : "text-gray-100"
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex">
            <Button
              onClick={() => scrollToSection("#contact")}
              className="bg-orange-500 text-white font-medium rounded-lg px-6 py-2.5
                         hover:bg-orange-600 hover:shadow-md hover:scale-[1.02]
                         transition-all"
            >
              Chat With Me
            </Button>
          </div>

          {/* Mobile Nav */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="border-gray-700 bg-gray-900/80 text-gray-200 hover:bg-gray-800"
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="liquid-glass border-gray-800 p-0 w-64 flex flex-col">
                {/* Brand Header */}
                <div className="flex items-center gap-2 px-4 py-4 border-b border-gray-800">
                  <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xs">JB</span>
                  </div>
                  <span className="font-semibold tracking-wide text-white text-lg">Jagjit Bhosale</span>
                </div>

                {/* Nav Links */}
                <nav className="flex flex-col gap-1 mt-2">
                  {links.map((link) => (
                    <button
                      key={link.href}
                      onClick={() => scrollToSection(link.href)}
                      className={`flex items-center gap-3 px-4 py-3 hover:bg-gray-900 hover:text-orange-400 transition-colors text-left ${
                        activeSection === link.href.substring(1) ? "text-orange-400 bg-gray-900" : "text-gray-100"
                      }`}
                    >
                      <span className="inline-flex items-center justify-center w-5 h-5 text-gray-300">
                        <link.icon className="h-4 w-4" />
                      </span>
                      <span className="text-sm">{link.label}</span>
                    </button>
                  ))}
                </nav>

                {/* CTA Button at Bottom */}
                <div className="mt-auto border-t border-gray-800 p-4">
                  <Button
                    onClick={() => scrollToSection("#contact")}
                    className="w-full bg-orange-500 text-white font-medium rounded-lg px-6 py-2.5
                               hover:bg-orange-600 hover:shadow-md hover:scale-[1.02]
                               transition-all"
                  >
                    Get In Touch
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
