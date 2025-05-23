import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";

interface TypographyProps {
  variant?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "p"
    | "blockquote"
    | "list"
    | "inline"
    | "lead"
    | "subdesc";
  className?: string;
  children: React.ReactNode;
  noMargin?: boolean;
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
  subdesc: "p"
} as const;

export function Typography({
  variant = "p",
  className,
  children,
  noMargin,
  ...props
}: TypographyProps) {
  const Component = variantElements[variant];

  const styles = cva(
    "tracking-tight text-[#252525] dark:text-white ",
    {
      variants: {
        variant: {
          h1: "font-bold text-[36px] dark:text-white tracking-tight",
          h2: "font-bold text-[30px] tracking-tight leading-[1.4]",
          h3: "font-bold text-2xl tracking-tight",
          h4: "font-bold text-[18px] leading-[1.55] tracking-tight",
          p: `leading-7 ${
            !noMargin ? "[&:not(:first-child)]:mt-6" : ""
          }`,
          blockquote: "font-bold mt-6 border-l-2 pl-6 italic",
          list: "font-bold my-6 ml-6 list-disc [&>li]:mt-2",
          lead: "text-[16px] leading-[1.56] opacity-80",
          inline: "inline-block",
          subdesc: "line-height-[1.5] font-medium text-[#777777] text-sm/6"
        },
      },
    }
  );

  return (
    <Component className={cn(styles({ variant }), className)} {...props}>
      {children}
    </Component>
  );
}

     
