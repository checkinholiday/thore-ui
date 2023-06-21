import React from 'react';

export interface ButtonProps {
  children: any;
  type: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
}

export function Button({ children, type }: ButtonProps) {
  return (
    <button className={`button ${type}`}>
      {children}
    </button>
  );
}

export function ElevatedButton({ children, type }: ButtonProps) {
  return (
    <button className={`elevated-button ${type}`}>
      {children}
    </button>
  );
}

export function OutlinedButton({ children, type }: ButtonProps) {
  return (
    <button className={`outlined-button ${type}`}>
      {children}
    </button>
  );
}

export function RoundedButton({ children, type }: ButtonProps) {
  return (
    <button className={`rounded-button ${type}`}>
      {children}
    </button>
  );
}

export function FlatButton({ children, type }: ButtonProps) {
  return (
    <button className={`flat-button ${type}`}>
      {children}
    </button>
  );
}

export function LightButton({ children, type }: ButtonProps) {
  return (
    <button className={`light-button ${type}`}>
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
