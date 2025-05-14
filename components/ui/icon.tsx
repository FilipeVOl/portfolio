import { cn } from "@/lib/utils"
import { LucideIcon } from "lucide-react"
import { cva, type VariantProps } from "class-variance-authority"

const iconVariants = cva("transition-colors hover:scale-110 transition-transform duration-300 ease-in-out cursor-pointer", {
  variants: {
    variant: {
      default: "text-muted-foreground hover:text-secondary",
      primary: "text-muted-foreground hover:text-primary",
      destructive: "text-muted-foreground hover:text-destructive",
      ghost: "text-muted-foreground hover:text-foreground",
    },
    size: {
      default: "h-5 w-5",
      sm: "h-4 w-4",
      lg: "h-6 w-6",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
})

interface IconProps extends VariantProps<typeof iconVariants> {
  icon: LucideIcon
  className?: string
  href?: string
  onClick?: () => void
}

export function Icon({ icon: Icon, variant, size, className, href, onClick }: IconProps) {
  const IconComponent = (
    <Icon 
      className={cn(iconVariants({ variant, size, className }))}
      onClick={onClick}
    />
  )

  if (href) {
    return (
      <a 
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
      >
        {IconComponent}
      </a>
    )
  }

  return IconComponent
} 