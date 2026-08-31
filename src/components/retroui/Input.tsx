import React, { type InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export const Input: React.FC<InputProps> = ({
  type = "text",
  placeholder = "Enter text",
  className = "",
  ...props
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`focus:outline-hidden w-full border-2 border-border bg-background px-4 py-2 text-foreground shadow-md transition placeholder:text-muted-foreground focus:shadow-xs ${
        props["aria-invalid"]
          ? "border-destructive bg-muted text-destructive shadow-xs"
          : ""
      } ${className}`}
      {...props}
    />
  );
};
