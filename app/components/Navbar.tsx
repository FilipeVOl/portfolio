"use client"

import { Button } from '@/components/ui/button'
import { Link } from '@/components/ui/link'
import { Typography } from '@/components/ui/typography'
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export default function Navbar() {
  const { theme, setTheme } = useTheme()

  return (
    <nav className="w-full px-6">
      <div className="container flex items-center justify-center md:justify-between h-full mx-auto">
        <Link variant="default" targetId="home">
          <Typography className='text-[24px]' variant="h2">Filipe<span className="text-secondary">.dev</span></Typography>
        </Link>
        
        <div className="hidden md:flex gap-4">
          <Link variant="default" className='text-[12px]' targetId="about">
            About
          </Link>
          <Link variant="default" className='text-[12px]' targetId="skills">
            Skills
          </Link>
          <Link variant="default" className='text-[12px]' targetId="experience">
            Experience
          </Link>
          <Link variant="default" className='text-[12px]' targetId="education">
            Education
          </Link>
          <Link variant="default" className='text-[12px]' targetId="projects">
            Projects
          </Link>
          <Link variant="default" className='text-[12px]' targetId="contact">
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