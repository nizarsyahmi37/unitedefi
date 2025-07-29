import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "file:text-white placeholder:text-[#8B9BB8] selection:bg-[#00D9FF] selection:text-[#0B1426] bg-[#1A2332] border-[#00D9FF] flex h-12 w-full min-w-0 border-2 px-4 py-3 text-base font-mono transition-all outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 text-white uppercase tracking-wider font-bold",
        "focus:border-[#00FF88] focus:shadow-[0_0_20px_rgba(0,217,255,0.5)] focus:bg-[#1A2332]/80",
        "hover:border-[#00FF88] hover:shadow-[0_0_10px_rgba(0,217,255,0.3)]",
        "aria-invalid:border-[#FF3366] aria-invalid:shadow-[0_0_20px_rgba(255,51,102,0.5)]",
        className
      )}
      {...props}
    />
  )
}

export { Input }
