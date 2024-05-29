import React, { useState } from 'react';
import { cva, VariantProps } from 'class-variance-authority';

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
      expanded: false,
    },
  }
);

export interface CollapsibleProps extends VariantProps<typeof collapsibleStyles> {
  children: React.ReactNode,
  label: string,
}

export default function Collapsible({ children, label, intent, ...props }: CollapsibleProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIcon = isOpen ? '➖' : '➕'; // Unicode characters for arrows

  return (
    <div {...props}>
      <button 
        className="font-medium flex items-center border border-neutral-200  hover:bg-neutral-200  rounded-md p-2 gap-8 text-sm" 
        onClick={() => setIsOpen(!isOpen)}
      >
        {label} <span className="text-xs ml-2">{toggleIcon}</span>
      </button>
      <div className={collapsibleStyles({ intent, expanded: isOpen })}>
        {isOpen && children}
      </div>
    </div>
  );
}
