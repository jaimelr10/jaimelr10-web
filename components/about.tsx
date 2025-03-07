"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Lightbulb, Rocket } from "lucide-react"

export default function About() {
  const aboutRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    // Animate cards
    gsap.fromTo(
      ".about-card",
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 70%",
        },
      },
    )

    // Animate text
    gsap.fromTo(
      ".about-text",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 70%",
        },
      },
    )
  }, [])

  return (
    <div ref={aboutRef} id="about" className="section py-20 scroll-mt-20">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
        About <span className="text-primary">Me</span>
      </h2>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="about-text space-y-6">
          <p className="text-lg">
            I'm a passionate software developer with over 3+ years of experience building web applications and digital
            products. I specialize in Java, JavaScript, TypeScript and React.
          </p>
          <p className="text-lg">
            My journey in software development began at highschool when I started programming and helping my classmates to do so.
            Since then, I've worked  to create innovative solutions that solve real-world problems in a clear and smart way.
          </p>
          <p className="text-lg">
            When I'm not coding, you can find me playing handball, researching about finance, or experimenting with new technologies.
            I believe in continuous learning and sharing knowledge with colleagues and friends.
          </p>
        </div>

        <div className="grid gap-6">
          <Card className="about-card">
            <CardContent className="p-6 flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10 text-primary">
                <Code className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Clean Code</h3>
                <p className="text-muted-foreground">
                  I write clean, maintainable code with a focus on readability and best practices. I've worked as a support engineer, so I know the importance of writing code that is easy to understand and maintain.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="about-card">
            <CardContent className="p-6 flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10 text-primary">
                <Lightbulb className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Problem Solver</h3>
                <p className="text-muted-foreground">
                  I enjoy tackling complex problems and finding elegant solutions. I've worked in both small and large codebases, so I know the pros and cons of different approaches to problem-solving.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="about-card">
            <CardContent className="p-6 flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10 text-primary">
                <Rocket className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Fast Learner</h3>
                <p className="text-muted-foreground">
                  I quickly adapt to new technologies and methodologies to stay ahead. I've worked with a variety of tools and frameworks, so I know how to learn new things quickly and efficiently.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

