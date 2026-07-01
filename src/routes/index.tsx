import { createFileRoute } from "@tanstack/react-router";
import { ThemeProvider } from "@/components/theme-provider";
import { Loader } from "@/components/loader";
import { Nav } from "@/components/nav";
import { BackToTop } from "@/components/back-to-top";
import { CursorGlow } from "@/components/cursor-glow";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Education } from "@/components/sections/education";
import { Certifications } from "@/components/sections/certifications";
import { Projects } from "@/components/sections/projects";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rohith Kumar S — Frontend Developer & AI Enthusiast" },
      {
        name: "description",
        content:
          "Portfolio of Rohith Kumar S — frontend developer crafting immersive, AI-powered web experiences with modern UI/UX.",
      },
      { property: "og:title", content: "Rohith Kumar S — Portfolio" },
      {
        property: "og:description",
        content: "Futuristic AI-era portfolio: projects, skills, and contact.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <ThemeProvider>
      <Loader />
      <CursorGlow />
      <Nav />
      <main className="relative">
        <Hero />
        <About />
        <Skills />
        <Education />
        <Certifications />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </ThemeProvider>
  );
}
