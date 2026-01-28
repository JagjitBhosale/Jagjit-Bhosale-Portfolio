"use client"

import { useEffect } from "react"

declare global {
  interface Window {
    gsap: any
    ScrollTrigger: any
  }
}

export function GSAPAnimations() {
  useEffect(() => {
    if (typeof window !== "undefined" && window.gsap && window.ScrollTrigger) {
      const gsap = window.gsap
      const ScrollTrigger = window.ScrollTrigger

      gsap.registerPlugin(ScrollTrigger)

      // Smooth scrolling
      gsap.to("html", {
        scrollBehavior: "smooth",
        duration: 0.1,
      })

      // Hero section animations
      gsap.fromTo(
        ".hero-content",
        {
          opacity: 0,
          y: 100,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          stagger: 0.2,
        },
      )

      gsap.fromTo(
        ".hero-image",
        {
          opacity: 0,
          scale: 0.8,
          rotation: -5,
        },
        {
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 1.5,
          ease: "power3.out",
          delay: 0.3,
        },
      )

      // About section animations
      gsap.fromTo(
        ".about-card",
        {
          opacity: 0,
          y: 80,
          scale: 0.9,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "power2.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: "#about",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        },
      )

      // Skills grid animations
      gsap.fromTo(
        ".skill-card",
        {
          opacity: 0,
          y: 60,
          scale: 0.8,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "back.out(1.7)",
          stagger: 0.1,
          scrollTrigger: {
            trigger: ".skills-grid",
            start: "top 85%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        },
      )

      // Education timeline animations
      gsap.fromTo(
        ".education-card",
        {
          opacity: 0,
          x: (index: number) => (index % 2 === 0 ? -100 : 100),
          scale: 0.9,
        },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
          stagger: 0.3,
          scrollTrigger: {
            trigger: "#education",
            start: "top 70%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        },
      )

      // Projects section animations
      gsap.fromTo(
        ".project-card",
        {
          opacity: 0,
          y: 100,
          rotationX: 15,
        },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          duration: 1,
          ease: "power2.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: "#projects",
            start: "top 75%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        },
      )

      // Achievements section animations
      gsap.fromTo(
        ".achievement-card",
        {
          opacity: 0,
          scale: 0.8,
          y: 80,
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1.2,
          ease: "elastic.out(1, 0.5)",
          stagger: 0.2,
          scrollTrigger: {
            trigger: "#achievements",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        },
      )

      // Contact section animations
      gsap.fromTo(
        ".contact-content",
        {
          opacity: 0,
          y: 60,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: "#contact",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        },
      )

      // Parallax effect for background elements
      gsap.to(".parallax-bg", {
        yPercent: -50,
        ease: "none",
        scrollTrigger: {
          trigger: "body",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      })

      // Header animation on scroll
      ScrollTrigger.create({
        trigger: "body",
        start: "100px top",
        end: "bottom bottom",
        onEnter: () => {
          gsap.to(".portfolio-header", {
            backdropFilter: "blur(20px)",
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            duration: 0.3,
          })
        },
        onLeaveBack: () => {
          gsap.to(".portfolio-header", {
            backdropFilter: "blur(10px)",
            backgroundColor: "rgba(0, 0, 0, 0.4)",
            duration: 0.3,
          })
        },
      })

      // Smooth scroll for navigation links
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
          e.preventDefault()
          const target = document.querySelector(this.getAttribute("href") as string)
          if (target) {
            gsap.to(window, {
              duration: 1.5,
              scrollTo: { y: target, offsetY: 80 },
              ease: "power2.inOut",
            })
          }
        })
      })

      // Cleanup function
      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
      }
    }
  }, [])

  return null
}
