'use client'

import { cva, VariantProps } from 'class-variance-authority';
import React from 'react';
import { useState } from 'react';

const dialogStyles = cva(
  'fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full',
  {
    variants: {
      intent: {
        primary: 'bg-white',
        secondary: 'bg-orange-100',
      },
      open: {
        true: 'flex',
        false: 'hidden',
      },
    },
    defaultVariants: {
      intent: 'primary',
      open: false,
    },
  }
);

export interface DialogProps extends VariantProps<typeof dialogStyles> {
  isOpen: boolean,
  onClose: () => void,
  children: React.ReactNode,
}

export default function Dialog({ isOpen, onClose, children, intent, ...props }: DialogProps) {
    // State to manage if the Dialog is open
  const [isDialogOpen, setDialogOpen] = useState<boolean>(false);

  // Function to toggle the Dialog open/closed
  const toggleDialog = () => {
    setDialogOpen(!isDialogOpen);
  };


  // Function to close the Dialog
  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  return (
<>
    <button className='border border-neutral-200 rounded-md py-1 px-2 hover:bg-neutral-100' onClick={toggleDialog}>
        {isDialogOpen ? 'Close Dialog' : 'Open Dialog'}
    </button>
    {isDialogOpen && (
    <div className={dialogStyles({ intent, open: isOpen ? true : false })} {...props}>
      <div className="m-auto p-4 rounded-md shadow-lg bg-white">
        {children}
        <button className='mt-2 font-sm bg-neutral-50 px-2 border border-md border-neutral-200 hover:bg-neutral-100 rounded-md' onClick={handleCloseDialog}>Close</button>
      </div>
    </div>
    )}
</>
  );
}
