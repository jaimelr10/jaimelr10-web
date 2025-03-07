"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Calendar, GraduationCap, MapPin } from "lucide-react"

interface EducationItem {
  degree: string
  institution: string
  location: string
  period: string
  description: string
  courses: string[]
  logo: string
}

export default function Education() {
  const educationRef = useRef<HTMLDivElement>(null)

  const educationItems: EducationItem[] = [
    {
      degree: "Bachelor Degree in Computer Science",
      institution: "Castilla-La Mancha University",
      location: "Ciudad Real, Spain",
      period: "2017 - 2022",
      description:
        "Focused on software engineering and the lifecycle of software development. Around 40% of the 240 ECTs where in English. \
        Joined a Junior Company and worked on several projects. Graduated with 9 out of 10 in my final thesis.",
      courses: [
        "Algorithms",
        "Computer Networks",
        "Concurrent and real time programming",
        "Data Structures",
        "Database Systems",
        "Distributed Systems",
        "Java",
        "Relational and Non-relational Databases",
        "REST APIs",
        "Software Lifecycle",
        "Web Development"
        ],
      logo: "/placeholder.svg?height=80&width=80",
    },
    {
      degree: "Patrones de Diseño: Soluciones prácticas y eficientes",
      institution: "DevTalles",
      location: "Online",
      period: "2025",
      description: "Completed an online course on React.js, covering the fundamentals of the library and advanced topics such as state management and hooks.",
      courses: ["JavaScript", "React", "Hooks", "Redux", "HTML", "CSS", "Bootstrap", "Node.js", "MongoDB"],
      logo: "/placeholder.svg?height=80&width=80",
    },
    {
      degree: "Building Enterprise Websites with Liferay",
      institution: "Liferay University",
      location: "Liferay's Madrid Office",
      period: "2024",
      description: "Completed an online course on Liferay, covering the development of enterprise websites using the Liferay platform.",
      courses: ["Liferay DXP", "Java", "JavaScript", "Web Development"],
      logo: "/placeholder.svg?height=80&width=80",
    },
    {
      degree: "React de Cero A Experto",
      institution: "Udemy",
      location: "Online",
      period: "2023",
      description: "Completed an online course on React.js, covering the fundamentals of the library and advanced topics such as state management and hooks.",
      courses: ["JavaScript", "React", "Hooks", "Redux", "HTML", "CSS", "Bootstrap", "Node.js", "MongoDB"],
      logo: "/placeholder.svg?height=80&width=80",
    },   
    {
      degree: "M103 - Basic Cluster Administration",
      institution: "MongoDB University",
      location: "Online",
      period: "2023",
      description: "Completed an online course on MongoDB, focusing on the administration of MongoDB clusters and replica sets.",
      courses: ["MongoDB Atlas", "Replica Sets", "Sharding", "Performance Tuning"],
      logo: "/placeholder.svg?height=80&width=80",
    },
    {
      degree: "M001 - MongoDB Basics",
      institution: "MongoDB University",
      location: "Online",
      period: "2023",
      description: "Completed an online course on MongoDB, covering the basics of NoSQL databases and the MongoDB query language.",
      courses: ["MongoDB Atlas", "CRUD Operations", "Indexes", "Aggregation Framework"],
      logo: "/placeholder.svg?height=80&width=80",
    },
    {
      degree: "Mobile App Development Course",
      institution: "Google Developers",
      location: "Online",
      period: "2021",
      description: "Completed an online course on mobile app development, focusing on Android development and Google's Firebase platform.",
      courses: ["Java", "Android Studio", "Firebase", "Material Design"],
      logo: "/placeholder.svg?height=80&width=80",
    },
  ]

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    // Animate section title
    gsap.fromTo(
      ".education-title",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: educationRef.current,
          start: "top 70%",
        },
      },
    )

    // Animate education cards
    gsap.fromTo(
      ".education-card",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".education-container",
          start: "top 70%",
        },
      },
    )
  }, [])

  return (
    <div ref={educationRef} id="education" className="section py-20 scroll-mt-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="education-title text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="text-primary">Education</span> & Certifications
        </h2>

        <div className="education-container max-w-4xl mx-auto space-y-8">
          {educationItems.map((item, index) => (
            <Card
              key={index}
              className="education-card overflow-hidden border-border hover:border-primary/50 transition-all duration-300"
            >
              <CardContent className="p-0">
                <div className="grid md:grid-cols-[120px_1fr] grid-cols-1">
                  {/* Logo section */}
                  <div className="bg-primary/10 p-6 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-background flex items-center justify-center">
                      <GraduationCap className="w-8 h-8 text-primary" />
                    </div>
                  </div>

                  {/* Content section */}
                  <div className="p-6">
                    <div className="mb-4">
                      <h3 className="text-xl font-bold">{item.degree}</h3>
                      <p className="text-primary font-medium">{item.institution}</p>
                    </div>

                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{item.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{item.location}</span>
                      </div>
                    </div>

                    <p className="mb-4 text-muted-foreground">{item.description}</p>

                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm font-medium">
                        <BookOpen className="w-4 h-4 text-primary" />
                        <span>Key Courses & Skills</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {item.courses.map((course) => (
                          <Badge key={course} variant="outline">
                            {course}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

