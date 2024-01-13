import { cva, VariantProps } from 'class-variance-authority';
import React from 'react';

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

export interface FormProps extends VariantProps<typeof formStyles>, React.FormHTMLAttributes<HTMLFormElement> {
  children: React.ReactNode,
}

export default function Form({ children, intent, ...props }: FormProps) {
  return (
    <form className={formStyles({ intent })} {...props}>
      {children}
    </form>
  );
}
