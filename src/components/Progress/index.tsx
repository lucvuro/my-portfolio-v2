import { cva, type VariantProps } from "class-variance-authority";
import type { ProgressHTMLAttributes } from "react";
import type React from "react";
import { twMerge } from "tailwind-merge";

const progress = cva(["nes-progress"], {
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

export type TProgressProps = ProgressHTMLAttributes<HTMLProgressElement> &
  VariantProps<typeof progress>;

const Progress: React.FC<TProgressProps> = ({
  variant,
  className,
  ...props
}) => {
  return (
    <progress
      className={twMerge(progress({ variant, className }))}
      {...props}
    ></progress>
  );
};

export default Progress;
