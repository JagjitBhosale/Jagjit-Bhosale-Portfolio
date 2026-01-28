import { PortfolioHeader } from "@/components/portfolio-header"
import { PortfolioHero } from "@/components/portfolio-hero"
import { AboutSection } from "@/components/about-section"
import { EducationSection } from "@/components/education-section"
import { ProjectsSection } from "@/components/projects-section"
import { AchievementsSection } from "@/components/achievements-section"
import { ContactSection } from "@/components/contact-section"
import { GSAPAnimations } from "@/components/gsap-animations"

export const dynamic = "force-static"

export default function Page() {
  return (
    <main className="min-h-[100dvh] text-white">
      <GSAPAnimations />
      <PortfolioHeader />
      <PortfolioHero />
      <AboutSection />
      <EducationSection />
      <ProjectsSection />
      <AchievementsSection />
      <ContactSection />
    </main>
  )
}
