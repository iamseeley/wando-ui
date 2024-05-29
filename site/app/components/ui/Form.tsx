import { cva, VariantProps } from 'class-variance-authority';
import React from 'react';
import Button from './Button'; // Import the provided Button component

const formStyles = cva(
  'space-y-4',
  {
    variants: {
      intent: {
        primary: 'text-neutral-700',
        secondary: 'text-orange-500',
      },
    },
    defaultVariants: {
      intent: 'primary',
    },
  }
);

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

export interface FormProps extends VariantProps<typeof formStyles>, React.FormHTMLAttributes<HTMLFormElement> {
  children: React.ReactNode,
}

export interface InputProps extends VariantProps<typeof inputStyles>, React.InputHTMLAttributes<HTMLInputElement> {}

export const Input: React.FC<InputProps> = ({ intent, ...props }) => (
  <input className={inputStyles({ intent })} {...props} />
);

export default function Form({ children, intent, ...props }: FormProps) {
  return (
    <form className={formStyles({ intent })} {...props}>
      {children}
    </form>
  );
}
