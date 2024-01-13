import { cva, VariantProps } from 'class-variance-authority';
import React from 'react';

const datePickerStyles = cva(
  'border p-2 rounded-md',
  {
    variants: {
      intent: {
        primary: 'bg-neutral-50 border-neutral-200',
        secondary: 'bg-orange-100 border-orange-400',
      },
    },
    defaultVariants: {
      intent: 'primary',
    },
  }
);

export interface DatePickerProps extends VariantProps<typeof datePickerStyles> {
  value: string,
  onChange: (value: string) => void,
}

export default function DatePicker({ value, onChange, intent, ...props }: DatePickerProps) {
  return (
    <input 
      type="date" 
      value={value} 
      onChange={(e) => onChange(e.target.value)} 
      className={datePickerStyles({ intent })} 
      {...props} 
    />
  );
}
