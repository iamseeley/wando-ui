'use client'

import { cva, VariantProps } from 'class-variance-authority';
import React, { useState, useEffect, useRef } from 'react';

const dropdownMenuStyles = cva(
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

const menuStyles = cva(
  'absolute w-48 py-1 mt-2 bg-white rounded-md shadow-lg border',
  {
    variants: {
      open: {
        true: 'block',
        false: 'hidden',
      },
    },
  }
);

export interface DropdownMenuProps extends VariantProps<typeof dropdownMenuStyles> {
  label: React.ReactNode,
  children: React.ReactNode,
  intent?: 'primary' | 'secondary',
}

export default function Dropdown({ label, children, intent = 'primary', ...props }: DropdownMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Event listener to close the dropdown if clicked outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div ref={dropdownRef} className={dropdownMenuStyles({ intent, open: isOpen ? true : false })} {...props}>
      <button onClick={() => setIsOpen(!isOpen)}>{label}</button>
      <div className={menuStyles({ open: isOpen ? true : false })}>
        {children}
      </div>
    </div>
  );
}
