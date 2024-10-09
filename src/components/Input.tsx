import { useFormContext } from 'react-hook-form';
import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  type?: string;
  error?: string;
  className?: string;
}

export const Input: React.FC<InputProps> = ({
  name,
  label,
  type = 'text',
  error,
  className = '',

  ...props
}) => {
  const { setValue } = useFormContext();
  return (
    <div className={`mb-4 ${className}`}>
      <label htmlFor={label} className={`grey13 capitalize`}>
        {label}
      </label>
      {error && <p className="text-delete text-sm mt-1">{error}</p>}
      <input
        name={name}
        id={name}
        type={type}
        className={`appearance-none overflow-visible mt-2 w-full px-5 py-4 border rounded focus:outline-none focus:ring-1 focus:ring-primary hover:ring-1 hover:ring-primary hover:cursor-pointer black15 ${
          error ? 'border-delete' : 'border-muted-darker'
        }`}
        onChange={(e) => {
          setValue(name, e.target.value.toString());
        }}
        {...props}
      />
    </div>
  );
};
