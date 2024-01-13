import { cva, VariantProps } from 'class-variance-authority';
import React from 'react';

const selectStyles = cva(
  'block w-full pl-3 pr-10 py-2 text-base border rounded-md focus:outline-none focus:ring-1',
  {
    variants: {
      intent: {
        primary: 'border-neutral-300 focus:border-neutral-500 focus:ring-neutral-500',
        secondary: 'border-orange-300 focus:border-orange-500 focus:ring-orange-500',
      },
    },
    defaultVariants: {
      intent: 'primary',
    },
  }
);

export interface SelectProps extends VariantProps<typeof selectStyles>, React.SelectHTMLAttributes<HTMLSelectElement> {
  children: React.ReactNode,
}

export default function Select({ children, intent, ...props }: SelectProps) {
  return (
    <select className={selectStyles({ intent })} {...props}>
      {children}
    </select>
  );
}
