import React from 'react';

export interface ButtonRowProps {
  children: any;
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

export function OutlinedButtonRow({ children }: ButtonRowProps) {
  return (
    <div className="outlined-button-row">
      {children}
    </div>
  );
}

export function ButtonRowChild({ children, type, disabled = true }: ButtonRowChildProps) {
  return (
    <div className={`button-row-child ${type} ${disabled ? 'disabled' : ''}`}>
      {children}
    </div>
  );
}

