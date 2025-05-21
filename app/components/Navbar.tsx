"use client"

import { Button } from '@/components/ui/button'
import { Link } from '@/components/ui/link'
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export default function Navbar() {
  const { theme, setTheme } = useTheme()

  return (
    <nav className="w-full px-6">
      <div className="container flex items-center justify-center md:justify-between h-full mx-auto">
        <Link variant="default" className="font-medium text-base text-2xl" targetId="home">
          Filipe<span className="text-secondary">.dev</span>
        </Link>
        
        <div className="hidden md:flex gap-4">
          <Link variant="default" size="lg" targetId="about">
            About
          </Link>
          <Link variant="default" size="lg" targetId="skills">
            Skills
          </Link>
          <Link variant="default" size="lg" targetId="experience">
            Experience
          </Link>
          <Link variant="default" size="lg" targetId="education">
            Education
          </Link>
          <Link variant="default" size="lg" targetId="projects">
            Projects
          </Link>
          <Link variant="default" size="lg" targetId="contact">
            Contact
          </Link>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? <Sun /> : <Moon />}
          </Button>
        </div>
      </div>
    </nav>
  )
} 