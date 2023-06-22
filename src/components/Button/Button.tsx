import React from 'react';

export interface ButtonProps {
  children: any;
  type: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
  disabled?: boolean;
}

export function Button({ children, type, disabled = false }: ButtonProps) {
  return (
    <button className={`button ${type} ${disabled ? 'disabled' : ''}`}>
      {children}
    </button>
  );
}

export function ElevatedButton({ children, type, disabled = false }: ButtonProps) {
  return (
    <button className={`elevated-button ${type} ${disabled ? 'disabled' : ''}`}>
      {children}
    </button>
  );
}

export function OutlinedButton({ children, type, disabled = false }: ButtonProps) {
  return (
    <button className={`outlined-button ${type} ${disabled ? 'disabled' : ''}`}>
      {children}
    </button>
  );
}

export function RoundedButton({ children, type, disabled = false }: ButtonProps) {
  return (
    <button className={`rounded-button ${type} ${disabled ? 'disabled' : ''}`}>
      {children}
    </button>
  );
}

export function FlatButton({ children, type, disabled = false }: ButtonProps) {
  return (
    <button className={`flat-button ${type} ${disabled ? 'disabled' : ''}`}>
      {children}
    </button>
  );
}

export function LightButton({ children, type, disabled = false }: ButtonProps) {
  return (
    <button className={`light-button ${type} ${disabled ? 'disabled' : ''}`}>
      {children}
    </button>
  );
}
