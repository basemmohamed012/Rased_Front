import React from "react";
import { cn } from "../lib/utils";

export function Badge({ className, children }) {
  return (
    <span className={cn("inline-block rounded-full px-3 py-1 text-xs font-semibold", className)}>
      {children}
    </span>
  );
}
