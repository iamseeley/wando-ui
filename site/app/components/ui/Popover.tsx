import { cva, VariantProps } from 'class-variance-authority';
import React, { useState } from 'react';

const popoverStyles = cva(
  'relative inline-block',
  {
    variants: {
      intent: {
        primary: 'text-neutral-700',
        secondary: 'text-orange-500',
      },
      open: {
        true: 'visible',
        
      },
    },
    defaultVariants: {
      open: false,
    },
  }
);

const contentStyles = cva(
  'absolute z-10 w-48 py-2 mt-2 bg-white rounded-md shadow-lg border',
  {
    variants: {
      open: {
        true: 'block',
        false: 'hidden',
      },
    },
  }
);

export interface PopoverProps extends VariantProps<typeof popoverStyles> {
  buttonContent: React.ReactNode,
  popoverContent: React.ReactNode,
  intent?: 'primary' | 'secondary',
}

export default function Popover({ buttonContent, popoverContent, intent = 'primary', ...props }: PopoverProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={popoverStyles({ intent, open: isOpen ? true : false })} {...props}>
      <button onClick={() => setIsOpen(!isOpen)}>{buttonContent}</button>
      <div className={contentStyles({ open: isOpen ? true : false })}>
        {popoverContent}
      </div>
    </div>
  );
}
