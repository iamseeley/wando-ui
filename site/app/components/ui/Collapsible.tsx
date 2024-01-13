import { cva, VariantProps } from 'class-variance-authority';
import React, { useState } from 'react';

const collapsibleStyles = cva(
  'transition-all overflow-hidden',
  {
    variants: {
      intent: {
        primary: 'bg-neutral-50 text-neutral-900',
        secondary: 'bg-orange-100 text-orange-600',
      },
      expanded: {
        true: 'max-h-screen',
        false: 'max-h-0',
      },
    },
    defaultVariants: {
      intent: 'primary',
      expanded: false
    },
  }
);

export interface CollapsibleProps extends VariantProps<typeof collapsibleStyles> {
  children: React.ReactNode,
  label: string,
}

export default function Collapsible({ children, label, intent, expanded, ...props }: CollapsibleProps) {
  const [isOpen, setIsOpen] = useState(expanded === true);

  return (
    <div {...props}>
      <button className='border-2 p-2 rounded-sm' onClick={() => setIsOpen(!isOpen)}>{label}</button>
      <div className={collapsibleStyles({ intent, expanded: isOpen ? true : false })}>
        {isOpen && children}
      </div>
    </div>
  );
}
