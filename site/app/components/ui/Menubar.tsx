import { cva, VariantProps } from 'class-variance-authority';
import React from 'react';

const menubarStyles = cva(
  'flex items-center space-x-4 transition-all border rounded-md',
  {
    variants: {
      intent: {
        primary: 'bg-neutral-50 text-neutral-900',
        secondary: 'bg-orange-100 text-orange-600',
      },
      alignment: {
        left: 'justify-start',
        center: 'justify-center',
        right: 'justify-end',
      },
      spacing: {
        normal: 'space-x-4',
        large: 'space-x-8',
        small: 'space-x-2'
      },
      shadow: {
        true: 'shadow-md',
        false: '',
      },
    },
    defaultVariants: {
      intent: 'primary',
      alignment: 'left',
      spacing: 'normal',
    },
  }
);

export interface MenubarProps extends VariantProps<typeof menubarStyles> {
  children: React.ReactNode;
}

export default function Menubar({ children, intent, alignment, spacing, shadow, ...props }: MenubarProps) {
  return (
    <nav className={menubarStyles({ intent, alignment, spacing, shadow })} {...props}>
      {children}
    </nav>
  );
}
