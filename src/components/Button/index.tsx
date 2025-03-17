import { cva, type VariantProps } from "class-variance-authority";
import type React from "react";
import type { ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

const buttonCva = cva(["nes-btn"], {
  variants: {
    variant: {
      default: [],
      primary: ["is-primary"],
      success: ["is-success"],
      warning: ["is-warning"],
      error: ["is-error"],
      pattern: ["is-pattern"],
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export type TButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonCva>;

const Button: React.FC<TButtonProps> = ({ variant, className, ...props }) => {
  return (
    <button
      className={twMerge(buttonCva({ variant, className }))}
      {...props}
    ></button>
  );
};

export default Button;
