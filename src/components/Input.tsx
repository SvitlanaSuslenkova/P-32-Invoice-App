/*import React, { forwardRef } from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  type?: string;
  error?: string;
  className?: string;
}

export const Input: React.FC<InputProps> = forwardRef(({
  name,
  label,
  type = 'text',
  error,
  className = '',
  onChange,
  ...props
}, ref) => {
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
        onChange={onChange}
        ref={ref}
        {...props}
      />
    </div>
  );
});*/

import React, { forwardRef } from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  type?: string;
  error?: string;
  className?: string;
}

// Use forwardRef with correct typing for the ref
export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { name, label, type = 'text', error, className = '', onChange, ...props },
    ref
  ) => {
    return (
      <div className={`mb-4 ${className}`}>
        <label htmlFor={name} className={`grey13 capitalize`}>
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
