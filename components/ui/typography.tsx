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
    "scroll-m-20 tracking-tight text-[#333333]",
    {
      variants: {
        variant: {
          h1: "font-bold scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
          h2: "font-bold scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
          h3: "font-bold scroll-m-20 text-2xl font-semibold tracking-tight",
          h4: "font-bold scroll-m-20 text-md font-semibold tracking-tight",
          p: `leading-7 ${
            !noMargin ? "[&:not(:first-child)]:mt-6" : ""
          }`,
          blockquote: "font-bold mt-6 border-l-2 pl-6 italic",
          list: "font-bold my-6 ml-6 list-disc [&>li]:mt-2",
          lead: "text-sm/6 font-medium",
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

     
