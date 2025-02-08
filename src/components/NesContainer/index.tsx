import { cva, type VariantProps } from "class-variance-authority";
import type React from "react";
import type { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

const containerCva = cva(["nes-container"], {
  variants: {
    withTitle: {
      true: ["with-title"],
    },
    isCentered: {
      true: ["is-centered"],
    },
    isRounded: {
      true: ["is-rounded"],
    },
  },
  defaultVariants: {
    withTitle: false,
    isCentered: false,
    isRounded: false,
  },
});

export type TNesContainerProps = HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof containerCva> & {
    title?: string;
  };

const NesContainer: React.FC<TNesContainerProps> = ({
  withTitle,
  isCentered,
  isRounded,
  className,
  title,
  children,
  ...props
}) => {
  return (
    <div
      className={twMerge(
        containerCva({ withTitle, isCentered, isRounded, className }),
      )}
      {...props}
    >
      <p className="title">{title}</p>
      {children}
    </div>
  );
};

export default NesContainer;
