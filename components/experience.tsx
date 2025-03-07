"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin } from "lucide-react"

interface ExperienceItem {
  title: string
  company: string
  location: string
  period: string
  description: string
  skills: string[]
  logo: string
}

export default function Experience() {
  const experienceRef = useRef<HTMLDivElement>(null)

  const experiences: ExperienceItem[] = [
    {
      title: "Software Engineer",
      company: "Liferay Inc.",
      location: "Madrid, Spain",
      period: "Oct 2022 - Present",
      description:
        "Developed and maintained Headless APIs using Java, JSP, and React, contributing to product development, \
        quality assurance, and support, while also contributing to document and content management components as \
        part of a Graduate Program, gaining experience in QA, Frontend, and Backend development, and engaging in \
        solving complex real-world problems in an OpenSource environment, fostering continuous learning and adaptation \
        to daily challenges.",
        skills: [
          "Git",
          "Gradle",
          "Java",
          "JavaScript",
          "JSP",
          "Liferay DXP",
          "Playwright",
          "React",
          "REST APIs",
          "Support",
          "Testing",
          "TypeScript"
        ],
        logo: "/LiferayRound.jpeg?height=80&width=80",
    },
    {
      title: "Database administrator",
      company: "Globalsuite Solutions",
      location: "Ciudad Real, Spain",
      period: "Mar 2019 - Dec 2021",
      description:
        "Developed an API to manage ETL processes using technologies like PHP, React, MariaDB and MongoDb. Used  \
        innovative technologies like Timeseries collections. Learnt about real world architectures, workflows, code \
        reviews and good practices. Researched and built the infrastructure of a data lake using AWS to hydrate a BI.",
      skills: [
        "AWS",
        "AWS Athena",
        "AWS Glue",
        "AWS S3",
        "Power BI",
        "Git",
        "Laravel",
        "MariaDB",
        "MongoDB",
        "PHP",
        "React",
        "REST APIs"
      ],
      logo: "/GlobalsuiteRound.jpeg?height=80&width=80",
    },
    {
      title: "Research Assistant",
      company: "Castilla-La Mancha University",
      location: "Ciudad Real, Spain",
      period: "Jun 2017 - Feb 2019",
      description:
        "Part of a Blockchain research project focused on the Ethereum ecosystem. Set the technological \
        infrastructure from where the project would be constructed. Valuable experience as it was my first \
        experience with senior people on the team and they congrated me for my job.",
      skills: ["Ethereum", "Solidity", "Truffle", "MetaMask"],
      logo: "/UCLMRound.png?height=80&width=80",
    }
  ]

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    // Animate section title
    gsap.fromTo(
      ".experience-title",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: experienceRef.current,
          start: "top 70%",
        },
      },
    )

    // Animate timeline items
    gsap.fromTo(
      ".timeline-item",
      { opacity: 0, x: (i) => (i % 2 === 0 ? -50 : 50) },
      {
        opacity: 1,
        x: 0,
        stagger: 0.3,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".timeline-container",
          start: "top 70%",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      },
    )

    // Animate timeline line growth
    gsap.fromTo(
      ".timeline-line",
      { height: 0 },
      {
        height: "100%",
        duration: 1.5,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: ".timeline-container",
          start: "top 70%",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      },
    )
  }, [])

  return (
    <div ref={experienceRef} id="experience" className="section py-20 scroll-mt-20">
      <h2 className="experience-title text-3xl md:text-4xl font-bold mb-12 text-center">
        Work <span className="text-primary">Experience</span>
      </h2>

      <div className="timeline-container relative max-w-5xl mx-auto">
        {/* Timeline center line */}
        <div className="timeline-line absolute left-1/2 transform -translate-x-1/2 w-1 bg-primary/20 top-0 bottom-0 rounded-full"></div>

        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`timeline-item relative mb-12 ${
              index % 2 === 0 ? "md:pr-12 md:text-right md:ml-0 md:mr-auto" : "md:pl-12 md:ml-auto md:mr-0"
            } md:w-1/2 w-full px-4`}
          >
            {/* Content card */}
            <div
              className={`bg-card p-6 rounded-lg shadow-md border border-border hover:border-primary/50 transition-all duration-300 ${
                index % 2 === 0 ? "md:mr-6" : "md:ml-6"
              }`}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center overflow-hidden flex-shrink-0">
                  <img src={exp.logo || "/placeholder.svg"} alt={exp.company} className="w-8 h-8 object-contain" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold">{exp.title}</h3>
                  <p className="text-primary font-medium">{exp.company}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 text-sm text-muted-foreground mb-4">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>{exp.period}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  <span>{exp.location}</span>
                </div>
              </div>

              <p className="mb-4 text-muted-foreground">{exp.description}</p>

              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

