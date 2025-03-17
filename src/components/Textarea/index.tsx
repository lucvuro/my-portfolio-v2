import { cva, type VariantProps } from "class-variance-authority";
import type React from "react";
import type { TextareaHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

const textareaCva = cva(["nes-textarea"], {
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

export type TTextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> &
  VariantProps<typeof textareaCva>;

const Textarea: React.FC<TTextareaProps> = ({
  variant,
  className,
  ...props
}) => {
  return (
    <textarea
      className={twMerge(textareaCva({ variant, className }))}
      {...props}
    ></textarea>
  );
};

export default Textarea;
