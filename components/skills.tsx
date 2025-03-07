"use client"

import type React from "react"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

interface Skill {
  name: string
  level: number
  category: "database" | "frontend" | "backend" | "other",
  icon?: string
}

export default function Skills() {
  const skillsRef = useRef<HTMLDivElement>(null)

  const skills: Skill[] = [
    { name: "React", level: 90, category: "frontend", icon: "react" },
    { name: "React Native", level: 90, category: "frontend" },
    { name: "TypeScript", level: 85, category: "frontend" },
    { name: "CSS/Tailwind", level: 85, category: "frontend" },
    { name: "Java", level: 70, category: "backend" },
    { name: "SpringBoot", level: 70, category: "backend" },
    { name: "Microservices", level: 70, category: "backend" },
    { name: "PHP", level: 70, category: "backend" },
    { name: "Laravel", level: 70, category: "backend" },
    { name: "MongoDB", level: 70, category: "database" },
    { name: "MariaDB", level: 70, category: "database" },
    { name: "MySQL", level: 70, category: "database" },
    { name: "Git", level: 85, category: "other" },
    { name: "Docker", level: 60, category: "other" },
    { name: "Postman", level: 85, category: "other" },
    { name: "Kubernetes", level: 60, category: "other" },
    { name: "Kafka", level: 60, category: "other" },
    { name: "AWS", level: 55, category: "other" },
  ]

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    // Animate section title
    gsap.fromTo(
      ".skills-title",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: skillsRef.current,
          start: "top 70%",
        },
      },
    )
  }, [])

  const categories = {
    frontend: "Frontend Development",
    backend: "Backend Development",
    database: "Database Technologies",
    other: "Tools & Technologies",
  }

  return (
    <div ref={skillsRef} id="skills" className="section py-20 scroll-mt-20">
      <h2 className="skills-title text-3xl md:text-4xl font-bold mb-12 text-center">
        My <span className="text-primary">Skills</span>
      </h2>

      <div className="grid md:grid-cols-2 gap-12">
        {(Object.keys(categories) as Array<keyof typeof categories>).map((category) => (
          <div key={category}>
            <h3 className="text-xl font-semibold mb-6">{categories[category]}</h3>
            <div className="space-y-6">
              {skills
                .filter((skill) => skill.category === category)
                .map((skill) => (
                    <ul className="flex justify-between mb-2 ml-4 backdrop:first-letter:">
                      <div key={skill.name}>
                          <li className="font-medium">- {skill.name}</li>
                      </div>
                    </ul>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

