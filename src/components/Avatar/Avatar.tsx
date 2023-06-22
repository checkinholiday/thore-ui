import React from 'react';

export interface AvatarProps {
  size: "xs" | "sm" | "md" | "lg" | "xl";
  src?: string | null;
  text?: string | null;
  color?: "default" | "primary" | "secondary" | "success" | "warning" | "error";
  rounded?: boolean;
}

export function Avatar({ size, src = null, text = null, color = "default", rounded = false }: AvatarProps) {
  return (
    <div className={`avatar ${size} ${color} ${rounded ? 'rounded' : ''}`}>
      {src !== null && (
        <img src={src} alt="Avatar" />
      )}
      {text !== null && text}
    </div>
  );
}
