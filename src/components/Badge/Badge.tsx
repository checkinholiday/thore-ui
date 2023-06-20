import React from "react";

export interface BadgeProps {
  text: string;
  type: "default" | "primary" | "secondary" | "success" | "warning" | "error" | "primary-flat" | "secondary-flat" | "success-flat" | "warning-flat" | "error-flat";
}

export function Badge({ text, type }: BadgeProps) {
  return (
    <div className={`badge ${type}`}>
      {text}
    </div>
  );
}
