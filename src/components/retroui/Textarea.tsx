import React from "react";
import { cn } from "@/lib/utils";

export function Textarea({
  placeholder = "Enter text...",
  className = "",
  ...props
}) {
  return (
    <textarea
      placeholder={placeholder}
      rows={4}
      className={cn(
        `focus:outline-hidden focus:shadow-xs w-full border-2 border-border px-4 py-2 shadow-md transition placeholder:text-muted-foreground
        ${
          props["aria-invalid"]
            ? "border-red-500 text-red-500 shadow-md shadow-red-600"
            : ""
        }`,
        className,
      )}
      {...props}
    />
  );
}
