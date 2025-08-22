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
      className={`focus:outline-hidden focus:shadow-xs w-full border-2 px-4 py-2 shadow-md transition ${
        props["aria-invalid"]
          ? "shadow-xs border-red-500 text-red-500 shadow-red-600"
          : ""
      } ${className}`}
      {...props}
    />
  );
};
