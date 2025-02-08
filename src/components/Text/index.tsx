import { cva, type VariantProps } from "class-variance-authority";
import type React from "react";
import type { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

const textCva = cva(["nes-text"], {
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

export type TTextProps = HTMLAttributes<HTMLParagraphElement> &
  VariantProps<typeof textCva>;

const Text: React.FC<TTextProps> = ({ variant, className, ...props }) => {
  return (
    <p className={twMerge(textCva({ variant, className }))} {...props}></p>
  );
};

export default Text;
