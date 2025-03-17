import { cva, type VariantProps } from "class-variance-authority";
import type React from "react";
import { useEffect, useRef, type DialogHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

const dialogCva = cva(["nes-dialog"], {
  variants: {
    variant: {
      default: [],
      rounded: ["is-rounded"],
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export type TDialogProps = DialogHTMLAttributes<HTMLDialogElement> &
  VariantProps<typeof dialogCva> & {
    isOpen?: boolean;
  };

const Dialog: React.FC<TDialogProps> = ({
  variant,
  className,
  isOpen,
  children,
  ...props
}) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (dialog) {
      if (isOpen) {
        dialog.showModal();
      } else {
        dialog.close();
      }
    }
  }, [isOpen]);

  return (
    <dialog
      className={twMerge(dialogCva({ variant, className }))}
      ref={dialogRef}
      {...props}
    >
      {children}
    </dialog>
  );
};

export default Dialog;
