"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const linkVariants = cva(
  "items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-ring/50 focus-visible:ring-[3px] cursor-pointer",
  {
    variants: {
      variant: {
        default: "text-primary-text hover:text-secondary/80 ",
        secondary: "text-secondary-text hover:text-secondary-text/80",
        underline: "underline-offset-4 hover:underline",
        icon: "inline-flex items-center gap-2",
      },
      size: {
        sm: "text-sm px-3",
        default: "text-base px-4 py-2",
        lg: "text-lg px-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

interface LinkProps extends VariantProps<typeof linkVariants> {
  asChild?: boolean
  targetId?: string
  className?: string
  onClick?: () => void
  children?: React.ReactNode
}

const Link = React.forwardRef<HTMLDivElement, LinkProps>(
  ({ className, variant, size, asChild = false, targetId, onClick, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "div"

    const handleClick = () => {
      if (targetId) {
        const element = document.getElementById(targetId)
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
        }
      }
      onClick?.()
    }

    return (
      <Comp
        className={cn(linkVariants({ variant, size, className }))}
        ref={ref}
        onClick={handleClick}
        {...props}
      >
        {children}
      </Comp>
    )
  }
)

Link.displayName = "Link"

export { Link, linkVariants }
