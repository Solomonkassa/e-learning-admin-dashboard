import * as React from "react"
import { cn } from "@/lib/utils"

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, startIcon, endIcon, ...props }, ref) => (
    <div className="relative flex items-center">
      {startIcon && <div className="absolute left-3 pointer-events-none text-muted-foreground">{startIcon}</div>}
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-input px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          startIcon && "pl-10",
          endIcon && "pr-10",
          className,
        )}
        ref={ref}
        {...props}
      />
      {endIcon && <div className="absolute right-3 pointer-events-none text-muted-foreground">{endIcon}</div>}
    </div>
  ),
)
Input.displayName = "Input"

export { Input }
