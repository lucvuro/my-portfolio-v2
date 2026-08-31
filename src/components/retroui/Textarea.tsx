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
        `focus:outline-hidden w-full border-2 border-border bg-background px-4 py-2 text-foreground shadow-md transition placeholder:text-muted-foreground focus:shadow-xs
        ${
          props["aria-invalid"]
            ? "border-destructive bg-muted text-destructive shadow-xs"
            : ""
        }`,
        className,
      )}
      {...props}
    />
  );
}
