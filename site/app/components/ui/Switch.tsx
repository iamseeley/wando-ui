'use client'

import { cva, VariantProps } from 'class-variance-authority';
import React, { useState } from 'react';

const switchStyles = cva(
  'relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in',
  {
    variants: {
      intent: {
        primary: 'bg-neutral-200',
        secondary: 'bg-orange-200',
      },
      checked: {
        true: 'bg-blue-600',
        false: 'bg-gray-300',
      },
    },
  }
);

const switchToggleStyles = cva(
  'absolute block w-6 h-6 rounded-full bg-white border border-gray-300 shadow transform transition ease-in-out duration-200',
  {
    variants: {
      checked: {
        true: 'translate-x-full border-blue-600',
        false: 'translate-x-0',
      },
    },
  }
);

export interface SwitchProps {
  checked: boolean,
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void, 
  intent?: 'primary' | 'secondary',
}

export default function Switch({ checked, onChange, intent = 'primary' }: SwitchProps) {

    const [isSwitchOn, setIsSwitchOn] = useState(false);
    const handleSwitchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsSwitchOn(event.target.checked);
      };

    
  return (
    <label className={switchStyles({ intent, checked })}>
      <input type="checkbox" className="hidden" checked={isSwitchOn} onChange={handleSwitchChange} />
      <span className={switchToggleStyles({ checked })} />
    </label>
  );
}
