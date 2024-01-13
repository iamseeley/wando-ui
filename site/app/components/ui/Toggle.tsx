import { cva, VariantProps } from 'class-variance-authority';
import React, { useState } from 'react';

const toggleStyles = cva(
  'relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in',
  {
    variants: {
      intent: {
        primary: 'bg-neutral-200',
        secondary: 'bg-orange-200',
      },
      on: {
        true: 'bg-blue-600',
        false: 'bg-gray-300',
      },
    },
  }
);

const toggleCircleStyles = cva(
  'absolute block w-6 h-6 rounded-full bg-white border border-gray-300 shadow transform transition ease-in-out duration-200',
  {
    variants: {
      on: {
        true: 'translate-x-full border-blue-600',
        false: 'translate-x-0',
      },
    },
  }
);

export interface ToggleProps {
    defaultOn?: boolean, // Optional prop to set the initial state
    onChange?: (isOn: boolean) => void, // Optional callback
    intent?: 'primary' | 'secondary',
  }
  
  const Toggle: React.FC<ToggleProps> = ({ defaultOn = false, onChange, intent = 'primary' }) => {
    const [isOn, setIsOn] = useState(defaultOn);
  
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const newState = event.target.checked;
      setIsOn(newState);
      onChange?.(newState); // Call the onChange callback if it exists
    };
  
    return (
      <label className={toggleStyles({ intent, on: isOn })}>
        <input 
          type="checkbox" 
          className="hidden" 
          checked={isOn} 
          onChange={handleChange} 
        />
        <span className={toggleCircleStyles({ on: isOn })} />
      </label>
    );
  };
  
  export default Toggle;
