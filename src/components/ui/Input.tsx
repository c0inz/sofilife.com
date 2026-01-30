"use client";

import { forwardRef, InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, helperText, id, ...props }, ref) => {
    const inputId = id || label?.toLowerCase().replace(/\s+/g, "-");

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={inputId}
            className="block text-small font-medium text-charcoal mb-2"
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={cn(
            "w-full px-4 py-3 bg-white border border-border rounded-none",
            "text-body text-charcoal placeholder:text-stone",
            "transition-all duration-200",
            "focus:outline-none focus:ring-2 focus:ring-charcoal focus:border-transparent",
            "disabled:bg-muted disabled:cursor-not-allowed",
            error && "border-error focus:ring-error",
            className
          )}
          {...props}
        />
        {(error || helperText) && (
          <p
            className={cn(
              "mt-2 text-small",
              error ? "text-error" : "text-stone"
            )}
          >
            {error || helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };
