import { cva, VariantProps } from 'class-variance-authority';
import React from 'react';

const menubarStyles = cva(
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

export interface MenubarProps extends VariantProps<typeof menubarStyles> {
  children: React.ReactNode,
}

export default function Menubar({ children, intent, ...props }: MenubarProps) {
  return (
    <nav className={menubarStyles({ intent })} {...props}>
      {children}
    </nav>
  );
}
