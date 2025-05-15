"use client"

import { Link } from '@/components/ui/link'

export default function Navbar() {
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
          <Link variant="default" size="lg" targetId="projects">
            Projects
          </Link>
          <Link variant="default" size="lg" targetId="contact">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  )
} 