"use client"

import { useEffect } from "react"
import { gsap } from "gsap"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"

export default function Footer() {
  useEffect(() => {
    // Animate footer on scroll
    gsap.fromTo(
      ".footer",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: ".footer",
          start: "top 90%",
        },
      },
    )
  }, [])

  return (
    <footer className="footer bg-muted py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold">
              Jaime León -<span className="text-primary"> Software Engineer</span>
            </h2>
            <p className="text-muted-foreground mt-2">Enjoying my passion.</p>
          </div>

          <div className="flex gap-6">
            <a
              target="_blank"
              href="https://github.com/jaimelr10"
              className="p-2 rounded-full hover:bg-background hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
             target="_blank"
              href="https://www.linkedin.com/in/jaime-leon-rosado/"
              className="p-2 rounded-full hover:bg-background hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          
            <a
              href="mailto:jaimeleonro@gmail.com"
              className="p-2 rounded-full hover:bg-background hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Jaime León. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

