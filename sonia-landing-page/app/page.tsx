"use client";

import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    icon: "💻",
    title: "Exercise-1",
    description: "Official Next.js Starter",
    link: "https://sonia-exercise-1.bootcamp.aganitha.ai/"
  },
  {
    icon: "🚀",
    title: "Exercise-2",
    description: "Kaminari Starter",
    link: "https://sonia-exercise-2.bootcamp.aganitha.ai/"
  },
  {
    icon: "📊",
    title: "Exercise-4",
    description: "Product Dashboard with SSG, SSR, and State Management",
    link: "https://sonia-exercise-4.bootcamp.aganitha.ai/"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <header className="relative bg-gradient-to-r from-primary to-secondary py-32 text-white text-center">
        <div className="max-w-3xl mx-auto px-4 animate-fadeIn">
          <h1 className="text-5xl font-bold mb-6 animate-fadeInDown">
            Shaik Sonia
          </h1>
          <p className="text-xl opacity-90 mb-8">
            On-site Bootcamp
          </p>
          <Button
            size="lg"
            variant="secondary"
            onClick={() => {
              document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            View My Work
            <ArrowDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </header>

      {/* Projects Section */}
      <main className="container mx-auto px-4 py-20" id="projects">
        <h2 className="text-3xl font-bold text-center text-secondary mb-16">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="bg-gradient-to-r from-primary to-secondary h-36 flex items-center justify-center text-4xl">
                {project.icon}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-secondary mb-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {project.description}
                </p>
                <Button
                  className="w-full"
                  asChild
                >
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    View Project
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-secondary text-white text-center py-6 mt-16">
        <p>&copy; 2025 Shaik Sonia | All Rights Reserved</p>
      </footer>
    </div>
  );
}