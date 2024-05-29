'use client';

import React, { useState, useEffect, useRef } from 'react';
import { cva, VariantProps } from 'class-variance-authority';

const popoverStyles = cva(
  'relative inline-block',
  {
    variants: {
      intent: {
        primary: 'text-neutral-700',
        secondary: 'text-orange-500',
      },
    },
  }
);

const contentStyles = cva(
  'absolute z-10 w-72 py-2 mt-1 bg-white rounded-md shadow-lg border left-1/2 transform -translate-x-1/2',
  {
    variants: {
      open: {
        true: 'block',
        false: 'hidden',
      },
      intent: {
        primary: 'border-neutral-200',
        secondary: 'border-orange-400',
      },
    },
  }
);

interface PopoverProps extends VariantProps<typeof popoverStyles> {
  trigger: React.ReactNode;
  popoverContent: React.ReactNode;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Popover: React.FC<PopoverProps> = ({ trigger, popoverContent, intent = 'primary', isOpen, setIsOpen }) => {
  const popoverRef = useRef<HTMLDivElement>(null);

  const togglePopover = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className={popoverStyles({ intent })} ref={popoverRef}>
      <div onClick={togglePopover} className="cursor-pointer">
        {trigger}
      </div>
      <div className={contentStyles({ open: isOpen, intent })}>
        {popoverContent}
      </div>
    </div>
  );
};

export default Popover;
