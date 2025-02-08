import { cva, type VariantProps } from "class-variance-authority";
import type React from "react";
import type { InputHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

const radioCva = cva(["nes-radio"], {
  variants: {
    isDark: {
      true: ["is-dark"],
    },
  },
  defaultVariants: {
    isDark: false,
  },
});

export type TRadioProps = InputHTMLAttributes<HTMLInputElement> &
  VariantProps<typeof radioCva> & {
    title?: string;
  };

const Radio: React.FC<TRadioProps> = ({
  isDark,
  className,
  title,
  ...props
}) => {
  return (
    <div>
      <label>
        <input
          type="radio"
          className={twMerge(radioCva({ isDark, className }))}
          {...props}
        />
        <span>{title}</span>
      </label>
    </div>
  );
};

export default Radio;
