"use client"

import { Link } from '@/components/ui/link'

export default function Navbar() {
  return (
    <nav className="h-full flex items-center justify-between container mx-auto px-6">
      <Link variant="default" className="font-medium text-base" targetId="home">
        Filipe<span className="text-secondary">.dev</span>
      </Link>
      
      <div className="flex gap-4">
        <Link variant="default" targetId="about">
          About
        </Link>
        <Link variant="default" targetId="projects">
          Projects
        </Link>
        <Link variant="default" targetId="contact">
          Contact
        </Link>
      </div>
    </nav>
  )
} 