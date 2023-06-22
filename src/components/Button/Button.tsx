import React from 'react';

export interface ButtonProps {
  children: any;
  type: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
  disabled: boolean;
}

export function Button({ children, type, disabled }: ButtonProps) {
  return (
    <button className={`button ${type} ${disabled ? 'disabled' : ''}`}>
      {children}
    </button>
  );
}

export function ElevatedButton({ children, type, disabled }: ButtonProps) {
  return (
    <button className={`elevated-button ${type} ${disabled ? 'disabled' : ''}`}>
      {children}
    </button>
  );
}

export function OutlinedButton({ children, type, disabled }: ButtonProps) {
  return (
    <button className={`outlined-button ${type} ${disabled ? 'disabled' : ''}`}>
      {children}
    </button>
  );
}

export function RoundedButton({ children, type, disabled }: ButtonProps) {
  return (
    <button className={`rounded-button ${type} ${disabled ? 'disabled' : ''}`}>
      {children}
    </button>
  );
}

export function FlatButton({ children, type, disabled }: ButtonProps) {
  return (
    <button className={`flat-button ${type} ${disabled ? 'disabled' : ''}`}>
      {children}
    </button>
  );
}

export function LightButton({ children, type, disabled }: ButtonProps) {
  return (
    <button className={`light-button ${type} ${disabled ? 'disabled' : ''}`}>
      {children}
    </button>
  );
}

// export function ButtonRow({ text, type }: ButtonProps) {
//   return (
//     <div className={`badge ${type}`}>
//       {text}
//     </div>
//   );
// }

// export function OutlinedButtonRow({ text, type }: ButtonProps) {
//   return (
//     <div className={`badge ${type}`}>
//       {text}
//     </div>
//   );
// }
