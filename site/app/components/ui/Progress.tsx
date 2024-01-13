import { cva, VariantProps } from 'class-variance-authority';
import React from 'react';

const progressBarStyles = cva(
  'w-full h-4 bg-gray-200 rounded-full overflow-hidden',
  {
    variants: {
      intent: {
        primary: 'bg-neutral-200',
        secondary: 'bg-orange-100',
      },
    },
  }
);

const progressStyles = cva(
  'h-full rounded-full',
  {
    variants: {
      intent: {
        primary: 'bg-blue-600',
        secondary: 'bg-orange-500',
      },
    },
  }
);

export interface ProgressProps extends VariantProps<typeof progressStyles> {
  value: number, // Percentage of progress
}

export default function Progress({ value, intent, ...props }: ProgressProps) {
  return (
    <div className={progressBarStyles({ intent })} {...props}>
      <div className={progressStyles({ intent })} style={{ width: `${value}%` }} />
    </div>
  );
}
