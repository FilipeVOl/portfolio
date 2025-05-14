import { Link } from '@/components/ui/link'

export default function Navbar() {
  return (
    <nav className="h-full flex items-center justify-between mx-6 my-2">
      <Link href="/" variant="default" className="font-medium text-base">
        Filipe<span className="text-secondary">.dev</span>
      </Link>
      
      <div className="flex gap-4">
        <Link href="/projects" variant="default">
          About
        </Link>
        <Link href="/about" variant="default">
          Projects
        </Link>
        <Link href="/contact" variant="default">
          Contact
        </Link>
      </div>
    </nav>
  )
} 