import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-bold uppercase tracking-wider transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none border-2 font-mono relative overflow-hidden",
  {
    variants: {
      variant: {
        default:
          "bg-[#00D9FF] text-[#0B1426] border-[#00D9FF] hover:bg-[#00FF88] hover:border-[#00FF88] hover:shadow-[0_0_20px_rgba(0,217,255,0.5)] hover:scale-105 active:scale-95 font-black",
        destructive:
          "bg-[#FF3366] text-white border-[#FF3366] hover:bg-[#FF1A4D] hover:shadow-[0_0_20px_rgba(255,51,102,0.5)] hover:scale-105 active:scale-95 font-black",
        outline:
          "bg-transparent text-[#00D9FF] border-[#00D9FF] hover:bg-[#00D9FF] hover:text-[#0B1426] hover:shadow-[0_0_20px_rgba(0,217,255,0.5)] hover:scale-105 active:scale-95 font-black",
        secondary:
          "bg-[#2A3441] text-white border-[#2A3441] hover:bg-[#3A4451] hover:shadow-[0_0_20px_rgba(42,52,65,0.5)] hover:scale-105 active:scale-95 font-black",
        ghost:
          "bg-transparent text-white border-transparent hover:bg-[#1A2332] hover:border-[#00D9FF] hover:scale-105 active:scale-95 font-black",
        link: "text-[#00D9FF] underline-offset-4 hover:underline border-transparent bg-transparent font-black",
        success: "bg-[#00FF88] text-[#0B1426] border-[#00FF88] hover:bg-[#00E67A] hover:shadow-[0_0_20px_rgba(0,255,136,0.5)] hover:scale-105 active:scale-95 font-black",
        warning: "bg-[#FFB800] text-[#0B1426] border-[#FFB800] hover:bg-[#FFA500] hover:shadow-[0_0_20px_rgba(255,184,0,0.5)] hover:scale-105 active:scale-95 font-black",
        brutal: "bg-[#FF6B35] text-[#0B1426] border-[#FF6B35] hover:shadow-[0_0_20px_rgba(255,107,53,0.5)] hover:scale-105 active:scale-95 before:absolute before:inset-0 before:bg-[#00D9FF] before:translate-x-full before:transition-transform hover:before:translate-x-0 before:z-[-1] font-black",
      },
      size: {
        default: "h-12 px-6 py-3 has-[>svg]:px-4",
        sm: "h-10 gap-1.5 px-4 py-2 has-[>svg]:px-3 text-xs",
        lg: "h-14 px-8 py-4 has-[>svg]:px-6 text-base",
        icon: "size-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
