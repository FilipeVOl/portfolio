"use client"

import { Button } from '@/components/ui/button'
import Dialog from '@/app/components/Dialog'
import { Link } from '@/components/ui/link'
import { Typography } from '@/components/ui/typography'
import { Moon, Sun, Flag, Menu } from "lucide-react"
import { useTheme } from "next-themes"
import { useState } from 'react'

export default function Navbar() {
  const { theme, setTheme } = useTheme()
  const [openMenu, setOpenMenu] = useState(false)

  const linkFields = [
    {
      id: "about",
      label: "About"
    }, 
    {
      id: "skills",
      label: "Skills"
    },
    {
      id: "experience",
      label: "Experience"
    },
    {
      id: "education",
      label: "Education"
    },
    {
      id: "portfolio",
      label: "Portfolio"
    },
    {
      id: "contact",
      label: "Contact"
    }
  ]

  return (
    <nav className="w-full px-6">
      <div className="container flex items-center justify-center md:justify-between h-full mx-auto">
        <Link variant="default" targetId="home">
          <Typography className='text-[24px]' variant="h2">Filipe<span className="text-secondary">.dev</span></Typography>
        </Link>

        <div className="relative slg:hidden block">
          <Dialog
          open={openMenu}
          onOpenChange={setOpenMenu}
          trigger={<Menu className="hover:scale-110 transition-all duration-300 hover:cursor-pointer text-secondary"/>}
          children={<ul className="flex flex-col items-center  gap-4 uppercase font-bold leading-[1.66]">
            {linkFields.map((link) => (
              <Link onClick={() => setOpenMenu(false)} variant="default" className='text-[12px] text-white hover:cursor-pointer hover:scale-105 transition-all duration-300' targetId={link.id}>
                {link.label}
              </Link>
            ))}
          </ul>
          }
          className="dialogMenu dark:bg-[#181818] text-white"
          />
        </div>
        
        <div className="hidden slg:flex flex gap-4">
          {linkFields.map((link) => (
            <Link variant="default" className='text-[12px]' targetId={link.id}>
              {link.label}
            </Link>
          ))}
          <div className="flex gap-2">
          <Button
            className="min-w-0"
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? <Sun /> : <Moon />}
          </Button>
          <Button className="min-w-4" variant="ghost" size="icon">
            <Flag />
          </Button>
          </div>
        </div>
      </div>
    </nav>
  )
} 