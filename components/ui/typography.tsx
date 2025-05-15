import { cn } from "@/lib/utils"

interface TypographyProps {
  variant?: "h1" | "h2" | "h3" | "h4" | "p" | "blockquote" | "list" | "inline" | "lead"
  className?: string
  children: React.ReactNode
}

const variantElements = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  p: "p",
  blockquote: "blockquote",
  list: "ul",
  inline: "span",
  lead: "p",
} as const

export function Typography({
  variant = "p",
  className,
  children,
  ...props
}: TypographyProps) {
  const Component = variantElements[variant]

  const styles = {
    h1: "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
    h2: "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
    h3: "scroll-m-20 text-2xl font-semibold tracking-tight",
    h4: "scroll-m-20 text-md font-semibold tracking-tight",
    p: "leading-7 text-gray-700 [&:not(:first-child)]:mt-6",
    blockquote: "mt-6 border-l-2 pl-6 italic",
    list: "my-6 ml-6 list-disc [&>li]:mt-2",
    lead: "text-xl text-muted-foreground",
    inline: "inline-block",
  }

  return (
    <Component
      className={cn(styles[variant], className)}
      {...props}
    >
      {children}
    </Component>
  )
} 