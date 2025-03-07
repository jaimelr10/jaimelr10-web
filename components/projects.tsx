"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { ExternalLink, Github } from "lucide-react"
import LiferayLogo from "../public/LiferayLogo.png"
import GlobalSuiteLogo from "../public/GlobalSuiteLogo.jpg"
import MarcadorDeChapas from "../public/MarcadorDeChapas.png"
import WarBotApp from "../public/WarbotApp.png"
import PortfolioWeb from "../public/portfolioWeb.png"
import FinancialCalculator from "../public/financialCalculator.png"

interface Project {
  title: string
  description: string
  image: any
  tags: string[]
  demoUrl?: string
  githubUrl?: string
}

export default function Projects() {
  const projectsRef = useRef<HTMLDivElement>(null)

  const projects: Project[] = [
    {
      title: "Liferay",
      description: "Contributions to the open-source repo of the DXP Platform.",
      image: LiferayLogo,
      tags: ["Java", "JSP", "REST API Infrastructure", "React", "Playwright"],
      demoUrl: "https://www.liferay.com/es/",
      githubUrl: "https://github.com/jaimelr10/liferay-portal",
    },
    {
      title: "Cronos",
      description: "ETL infrastructure to process and analyze data from different sources and generate reports.",
      image: GlobalSuiteLogo,
      tags: ["React", "PHP", "Laravel", "MariaDB", "MongoDB", "AWS", "PowerBI"],
    },
    {
      title: "Marcador de Fútbol Chapas",
      description: "An useful scoreboard personalized for one of my hobbies, Bottlecap football, with more than 300 downloads on Google Play.",
      image: MarcadorDeChapas,
      tags: ["Android", "React Native"],
      demoUrl: "https://play.google.com/store/apps/details?id=com.marcadorchapas&hl=es",
    },
    {
      title: "WarBot App",
      description: "A funny game to simulate a war between groups of friends using the Twitter API to post the results. Around 1.900 downloads on Google Play. (Discontinued due to the name)",
      image: WarBotApp,
      tags: ["Android", "Java", "Twitter API"],
    },
    {
      title: "Portfolio Website",
      description: "A responsive portfolio website with smooth animations using GSAP and React.",
      image: PortfolioWeb,
      tags: ["React", "GSAP", "Tailwind CSS", "TypeScript"],
      demoUrl: "https://jaimelr10.github.io/",
      githubUrl: "https://github.com/jaimelr10/jaimelr10.github.io",
    },
    {
      title: "Financial Calculator",
      description: "Useful financial calculator to process several financial metrics. In progress. 👷",
      image: FinancialCalculator,
      tags: ["Java", "SpringBoot", "REST APIs", "React", "Tailwind CSS", "TypeScript"],
      demoUrl: "https://github.com/jaimelr10/FinancialCalculator",
      githubUrl: "https://github.com/jaimelr10/FinancialCalculator",
    },
  ]

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    // Animate section title
    gsap.fromTo(
      ".projects-title",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: projectsRef.current,
          start: "top 70%",
        },
      },
    )

    // Animate project cards
    gsap.fromTo(
      ".project-card",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".projects-grid",
          start: "top 70%",
        },
      },
    )
  }, [])

  return (
    <div ref={projectsRef} id="projects" className="section py-20 scroll-mt-20">
      <h2 className="projects-title text-3xl md:text-4xl font-bold mb-4 text-center">
        My <span className="text-primary">Projects</span>
      </h2>
      <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
        Here are some of my recent projects. Each one was built to solve a specific problem or explore new technologies.
      </p>

      <div className="projects-grid grid sm:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <Card key={index} className="project-card overflow-hidden">
            <div className="relative h-48 overflow-hidden">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                layout="fill"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-muted-foreground mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="px-6 pb-6 pt-0 flex gap-4">
              {
                project.githubUrl &&
                <Button variant="outline" size="sm" className="gap-2" asChild>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4" /> Code
                </a>
              </Button>
              }
              {
                project.demoUrl &&
                <Button size="sm" className="gap-2" asChild>
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4" /> Live Demo
                  </a>
                </Button>
              }
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

