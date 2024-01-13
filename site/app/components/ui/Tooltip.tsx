import { cva, VariantProps } from 'class-variance-authority';
import React, { useState } from 'react';

const tooltipStyles = cva(
  'relative cursor-pointer',
  {
    variants: {
      intent: {
        primary: 'text-neutral-700',
        secondary: 'text-orange-500',
      },
      visible: {
        true: 'visible',
        
      },
    },
    defaultVariants: {
      visible: false,
    },
  }
);

const tooltipContentStyles = cva(
  'absolute z-10 w-32 py-2 px-2 mt-1 bg-white rounded-md shadow-lg border',
  {
    variants: {
      visible: {
        true: 'block',
        false: 'hidden',
      },
    },
  }
);

export interface TooltipProps extends VariantProps<typeof tooltipStyles> {
  content: string,
  intent?: 'primary' | 'secondary',
}

export default function Tooltip({ content, intent = 'primary', ...props }: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div 
      className={tooltipStyles({ intent, visible: isVisible ? true : false })} 
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      {...props}
    >
      {content}
      <span className={tooltipContentStyles({ visible: isVisible ? true : false })}>
        {content}
      </span>
    </div>
  );
}
