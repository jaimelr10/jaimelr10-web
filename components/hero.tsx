"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ArrowRight, GithubIcon, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import me from "../assets/me.png"
import Image from "next/image"
import Link from "next/link"

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const tl = gsap.timeline()

    tl.fromTo(".hero-title", { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, ease: "power3.out" })
      .fromTo(".hero-image", {
        opacity: 0,
        x: "100vw",
        rotation: 360,
      }, {
        opacity: 1,
        x: 0,
        rotation: 0,
        duration: 1.2,
        ease: "power3.out",
        delay: 0.1,
      }, "-=0.2")
      .fromTo(".hero-subtitle", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1, ease: "power3.out" }, "-=0.")
      .fromTo(".projects-cta", { opacity: 0, x: -50 }, { opacity: 1, x: 0, duration: 1, ease: "power3.out" }, "-=0.")
      .fromTo(".contact-cta", { opacity: 0, x: -20 }, { opacity: 1, x: 0, duration: 1, ease: "power3.out" }, "-=0.")
      .fromTo(
        ".hero-social",
        { opacity: 0, x: -20, rotation: -360 },
        { opacity: 1, x: 0, duration: 1, stagger: 0.2, ease: "power3.out", rotation: 0 },
        "-=0.6",
      )
  }, [])

  return (
    <div ref={heroRef} id="home" className="section min-h-screen flex flex-col justify-center pt-16">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="hero-title text-4xl md:text-6xl font-bold mb-4">
            Hi, I'm <span className="text-primary">Jaime León</span>
          </h1>
          <h2 className="hero-subtitle text-2xl md:text-3xl text-muted-foreground mb-6">Software Engineer</h2>
          <p className="hero-subtitle text-lg mb-8 max-w-md">
            I build exceptional digital experiences with modern technologies. Passionate about creating elegant
            solutions to complex problems.
          </p>
          <div className="hero-cta flex flex-wrap gap-4">
            <Link className="gap-2 projects-cta inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" href="#projects" type="button">
              View Projects <ArrowRight className="w-4 h-4" />
            </Link>
            <Link className="gap-2 contact-cta inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-indigo-600 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" href="#contact" type="button">
              Contact Me
            </Link>
          </div>
          <div className="mt-8 flex gap-4">
            <a
              target="_blank"
              href="https://github.com/jaimelr10"
              className="hero-social p-2 rounded-full border border-border hover:border-primary hover:text-primary transition-colors"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/jaime-leon-rosado/"
              className="hero-social p-2 rounded-full border border-border hover:border-primary hover:text-primary transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
        <div className="hero-image relative hidden md:block">
          <div className="relative w-full aspect-square rounded-full bg-primary/10 overflow-hidden">
            <Image
              src={me}
              alt="Jaime León"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              className="rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

