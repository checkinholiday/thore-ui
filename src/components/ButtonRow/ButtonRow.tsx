import React from 'react';

export interface ButtonRowProps {
  children: any;
  dark?: boolean;
}

export interface ButtonRowChildProps {
  children: any;
  type: "primary" | "secondary" | "success" | "warning" | "error";
  disabled?: boolean;
}

export function ButtonRow({ children }: ButtonRowProps) {
  return (
    <div className="button-row">
      {children}
    </div>
  );
}

export function OutlinedButtonRow({ children, dark = false }: ButtonRowProps) {
  return (
    <div className={`outlined-button-row ${dark ? 'dark' : ''}`}>
      {children}
    </div>
  );
}

export function ButtonRowChild({ children, type, disabled = false }: ButtonRowChildProps) {
  return (
    <div className={`button-row-child ${type} ${disabled ? 'disabled' : ''}`}>
      {children}
    </div>
  );
}
