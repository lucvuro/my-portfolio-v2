import { cva, type VariantProps } from "class-variance-authority";
import type React from "react";
import type { InputHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

const badgeCva = cva(["nes-badge"], {
  variants: {
    variant: {
      default: [],
      primary: ["is-primary"],
      success: ["is-success"],
      warning: ["is-warning"],
      error: ["is-error"],
      pattern: ["is-pattern"],
    },
    isDark: {
      true: ["is-dark"],
    },
  },
  defaultVariants: {
    isDark: false,
    variant: "default",
  },
});

export type TRadioProps = InputHTMLAttributes<HTMLInputElement> &
  VariantProps<typeof badgeCva> & {
    title?: string;
  };

const Badge: React.FC<TRadioProps> = ({
  isDark,
  className,
  variant,
  ...props
}) => {
  return (
    <div className="nes-badge">
      <span
        className={twMerge(badgeCva({ variant, isDark, className }))}
        {...props}
      ></span>
    </div>
  );
};

export default Badge;
