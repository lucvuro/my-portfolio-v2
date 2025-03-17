import Text from "@/components/Text";
import { cva, type VariantProps } from "class-variance-authority";
import type React from "react";
import type { InputHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

const inputCva = cva(["nes-input"], {
  variants: {
    variant: {
      default: [],
      primary: ["is-primary"],
      success: ["is-success"],
      warning: ["is-warning"],
      pattern: ["is-pattern"],
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export type TInputProps = InputHTMLAttributes<HTMLInputElement> &
  VariantProps<typeof inputCva> & {
    helperText?: string;
    error?: boolean;
  };

const Input: React.FC<TInputProps> = ({
  variant,
  className,
  helperText,
  error,
  ...props
}) => {
  return (
    <div>
      <input
        className={twMerge(
          error && "is-error",
          inputCva({ variant, className }),
        )}
        {...props}
      />
      <Text
        className="ml-2 text-xs sm:text-sm"
        variant={error ? "error" : "default"}
      >
        {" "}
        {helperText}
      </Text>
    </div>
  );
};

export default Input;
