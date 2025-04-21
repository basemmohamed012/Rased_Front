import React from "react";
import { cn } from "../lib/utils";

export function Card({ className, children }) {
  return (
    <div className={cn("bg-white shadow rounded-2xl border", className)}>
      {children}
    </div>
  );
}

export function CardContent({ className, children }) {
  return (
    <div className={cn("p-4", className)}>
      {children}
    </div>
  );
}
