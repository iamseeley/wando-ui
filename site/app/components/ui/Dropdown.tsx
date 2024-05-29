'use client';

import { cva, VariantProps } from 'class-variance-authority';
import React, { useState, useEffect, useRef } from 'react';
import Button from './Button';

const dropdownMenuStyles = cva(
  'relative inline-block',
  {
    variants: {
      intent: {
        primary: 'text-neutral-800',
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
  'absolute w-48 py-2 bg-white rounded-md shadow-lg border flex flex-col px-2 mt-1',
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
  label: React.ReactNode;
  children: React.ReactNode;
  intent?: 'primary' | 'secondary';
}

export default function Dropdown({ label, children, intent = 'primary', ...props }: DropdownMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  const handleMouseEnter = () => setIsOpen(true);
  const handleMouseLeave = () => setIsOpen(false);

  return (
    <div
      ref={dropdownRef}
      className={dropdownMenuStyles({ intent, open: isOpen ? true : false })}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      <Button
        shadow={false}
        intent={intent}
        rounded={false}
        fullWidth={false}
        centered={false}
        className={`${isOpen ? 'underline' : ''} px-4  font-medium`}
      >
        {label}
      </Button>
      <div className={menuStyles({ open: isOpen ? true : false })}>
        {children}
      </div>
    </div>
  );
}
