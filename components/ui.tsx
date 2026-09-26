import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

export const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-sm text-[15px] font-[600] transition-all duration-micro focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal-blue focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-signal-blue text-white hover:bg-signal-blue-dark shadow-sm",
        secondary: "bg-white text-ink border border-line hover:bg-soft-canvas",
        outline: "border border-line bg-transparent hover:bg-soft-canvas text-ink",
        ghost: "hover:bg-soft-canvas text-ink",
        link: "text-signal-blue hover:text-signal-blue-dark p-0 h-auto font-[600] group",
        dark: "bg-white text-night hover:bg-soft-canvas",
      },
      size: { default: "h-11 px-6 py-2", lg: "h-12 px-8 py-2", sm: "h-9 px-4", icon: "h-11 w-11" },
    },
    defaultVariants: { variant: "primary", size: "default" },
  }
)
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean; showChevron?: boolean;
}
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, showChevron, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props}>
        {children}
        {showChevron && <ChevronRight className="ml-1 h-4 w-4 transition-transform duration-micro group-hover:translate-x-1" />}
      </Comp>
    )
  }
)
Button.displayName = "Button"

export const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("rounded-md border border-line bg-white text-ink shadow-card transition-shadow duration-ui", className)} {...props} />
))
Card.displayName = "Card"
export const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex flex-col space-y-1.5 p-6 pb-4", className)} {...props} />
))
CardHeader.displayName = "CardHeader"
export const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

export type FeatureStatus = "live" | "beta" | "coming-soon" | "planned"
export function StatusBadge({ status, label, className, ...props }: { status: FeatureStatus, label?: string } & React.HTMLAttributes<HTMLDivElement>) {
  const config = { "live": { c: "bg-success", l: "Live" }, "beta": { c: "bg-warning", l: "Beta" }, "coming-soon": { c: "bg-warning", l: "Coming Soon" }, "planned": { c: "bg-muted", l: "Planned" } }
  return (
    <div className={cn("inline-flex items-center gap-2 rounded-full border border-line bg-white px-2.5 py-1 text-[13px] font-medium text-ink shadow-sm", className)} {...props}>
      <span className="relative flex h-2 w-2">
        {status === "live" && <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-20"></span>}
        <span className={cn("relative inline-flex h-2 w-2 rounded-full", config[status].c)}></span>
      </span>
      {label || config[status].l}
    </div>
  )
}
