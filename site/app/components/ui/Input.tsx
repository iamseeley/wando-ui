import React from 'react';
import { cva, VariantProps } from 'class-variance-authority';

const inputStyles = cva(
    'border p-2 rounded-md w-full',
    {
      variants: {
        intent: {
          primary: 'border-neutral-300 focus:border-blue-500 focus:ring focus:ring-blue-200',
          secondary: 'border-orange-300 focus:border-orange-500 focus:ring focus:ring-orange-200',
        },
      },
      defaultVariants: {
        intent: 'primary',
      },
    }
  );

  export interface InputProps extends VariantProps<typeof inputStyles>, React.InputHTMLAttributes<HTMLInputElement> {}

  export const Input: React.FC<InputProps> = ({ intent, ...props }) => (
    <input className={inputStyles({ intent })} {...props} />
  );


