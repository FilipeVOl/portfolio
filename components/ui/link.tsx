import * as React from "react"
import NextLink from "next/link"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const linkVariants = cva(
  "items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-ring/50 focus-visible:ring-[3px]",
  {
    variants: {
      variant: {
        default: "text-primary-text hover:text-secondary/80",
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

interface LinkProps
  extends React.ComponentPropsWithoutRef<typeof NextLink>,
    VariantProps<typeof linkVariants> {
  asChild?: boolean
}

const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : NextLink

    return (
      <Comp
        className={cn(linkVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)

Link.displayName = "Link"

export { Link, linkVariants }
