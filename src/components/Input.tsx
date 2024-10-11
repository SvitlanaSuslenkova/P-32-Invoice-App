import React, { forwardRef } from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  type?: string;

  className?: string;
  errorMessage?: string;
}

// Use forwardRef with correct typing for the ref
export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      name,
      label,
      type = 'text',
      className = '',
      onChange,
      errorMessage,
      ...props
    },
    ref
  ) => {
    return (
      <div className={`mb-4 ${className}`}>
        <div className={`grid items-end grid-cols-[auto,auto] gap-x-0.5`}>
          <label
            htmlFor={name}
            className={`grey13 capitalize ${errorMessage ? 'text-delete' : ''}`}
          >
            {label}
          </label>
          {errorMessage && (
            <p className={`text-delete text-xs text-right`}>{errorMessage}</p>
          )}
        </div>
        <input
          name={name}
          id={name}
          type={type}
          className={`appearance-none overflow-visible mt-2 w-full px-5 py-4 border rounded focus:outline-none focus:ring-1 focus:ring-primary hover:ring-1 hover:ring-primary hover:cursor-pointer black15 ${
            errorMessage ? 'border-delete' : 'border-muted-darker'
          }`}
          ref={ref} // forward the ref to the actual input element
          onChange={onChange}
          {...props}
        />
      </div>
    );
  }
);

// Provide a displayName for the component for better debugging
Input.displayName = 'Input';
