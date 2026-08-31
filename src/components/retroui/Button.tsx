import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import React, { type ButtonHTMLAttributes } from "react";

const buttonVariants = cva(
  "font-head transition-all outline-hidden cursor-pointer duration-200 font-medium flex items-center",
  {
    variants: {
      variant: {
        // Raised surface block; hover presses it down and inverts.
        default:
          "shadow-md hover:shadow-none bg-background text-foreground border-2 border-border transition hover:translate-y-1 hover:bg-foreground hover:text-background",
        // Already-pressed, inverted block - used for selected/active states.
        secondary:
          "shadow-none translate-y-1 bg-primary text-primary-foreground border-2 border-border transition hover:bg-primary-hover",
        outline:
          "shadow-md hover:shadow-none bg-transparent text-foreground border-2 border-border transition hover:translate-y-1 hover:bg-muted",
        link: "bg-transparent hover:underline",
      },
      size: {
        sm: "px-3 py-1 text-sm shadow hover:shadow-none",
        md: "px-4 py-1.5 text-base",
        lg: "px-8 py-3 text-lg",
        icon: "p-2",
      },
    },
    defaultVariants: {
      size: "md",
      variant: "default",
    },
  },
);

export interface IButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button = React.forwardRef<HTMLButtonElement, IButtonProps>(
  (
    {
      children,
      size = "md",
      className = "",
      variant = "default",
      ...props
    }: IButtonProps,
    forwardedRef,
  ) => (
    <button
      ref={forwardedRef}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    >
      {children}
    </button>
  ),
);

Button.displayName = "Button";
