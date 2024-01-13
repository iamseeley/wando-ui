import { cva, VariantProps } from 'class-variance-authority';
import React from 'react';

const navigationMenuStyles = cva(
  'flex space-x-4',
  {
    variants: {
      intent: {
        primary: 'bg-neutral-50 text-neutral-900',
        secondary: 'bg-orange-100 text-orange-600',
      },
    },
    defaultVariants: {
      intent: 'primary',
    },
  }
);

export interface NavigationMenuProps extends VariantProps<typeof navigationMenuStyles> {
  children: React.ReactNode,
}

export default function NavigationMenu({ children, intent, ...props }: NavigationMenuProps) {
  return (
    <nav className={navigationMenuStyles({ intent })} {...props}>
      {children}
    </nav>
  );
}
