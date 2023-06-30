import React from 'react';

export interface InputProps {
  label: string;
  value: string;
  setValue: Function;
  error?: boolean;
  subtext?: string;
  subtextColor?: "default" | "primary" | "secondary" | "error" | "warning" | "success";
  width?: number;
  dark?: boolean;
}

export function Input({
  label,
  value,
  setValue,
  error = false,
  subtext = '',
  subtextColor = 'default',
  dark = false,
  width = 300
}: InputProps) {
  return (
    <form className="input-container">
      <label style={{ width: width + "px" }} className={`input ${dark ? 'dark' : ''} ${error ? 'error' : ''} ${value.length > 0 ? 'active' : ''}`} htmlFor={label}>
        <input type="text" id={label} name={label} value={value} onChange={(e) => setValue(e.target.value)} autoComplete='off' required />
        <span>{label}</span>
      </label>
      <p className={`${subtextColor} ${dark ? 'dark' : ''}`}>{subtext}</p>
    </form>
  );
}
