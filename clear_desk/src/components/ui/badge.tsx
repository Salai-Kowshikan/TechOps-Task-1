import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "outline";
}

export const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant = "default", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium",
          variant === "default" && "bg-blue-600 text-white",
          variant === "outline" &&
            "border border-gray-300 bg-white text-gray-800",
          className
        )}
        {...props}
      />
    );
  }
);
Badge.displayName = "Badge";
