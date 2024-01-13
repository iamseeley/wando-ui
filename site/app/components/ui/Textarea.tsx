import React from 'react';
import { cva, VariantProps } from 'class-variance-authority';

const textareaStyles = cva(
  'block w-full p-2 border rounded-md focus:outline-none focus:ring-1',
  {
    variants: {
      intent: {
        primary: 'border-neutral-300 focus:border-neutral-500 focus:ring-neutral-500',
        secondary: 'border-orange-300 focus:border-orange-500 focus:ring-orange-500',
      },
    },
    defaultVariants: {
      intent: 'primary',
    },
  }
);

export interface TextareaProps extends VariantProps<typeof textareaStyles>, React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea: React.FC<TextareaProps> = ({ intent, ...props }) => {
  return <textarea className={textareaStyles({ intent })} {...props} />;
};

export default Textarea;
