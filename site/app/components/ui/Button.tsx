import { cva, VariantProps } from 'class-variance-authority';
import Link from 'next/link';
import React from 'react';

const buttonStyles = cva(
  'flex items-centerjustify-center px-4 py-1 font-medium text-shadow transition-all no-underline',
  {
    variants: {
      intent: {
        primary: 'bg-neutral-50 hover:underline rounded-md',
        secondary: 'bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600 hover:border-orange-600 text-white',
      },
      fullWidth: {
        true: 'w-full',
      },
      rounded: {
        true: 'rounded-full',
      },
      centered: {
        true: 'm-auto',
      },
	  shadow: {
		true: 'shadow-sm',
		false: '',
	  },
    },
    defaultVariants: {
      intent: 'primary',
	  shadow: true,
    },
  }
);

export interface ButtonProps extends VariantProps<typeof buttonStyles> {
  children: React.ReactNode;
  href?: string;
}

const Button: React.FC<ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement> & React.AnchorHTMLAttributes<HTMLAnchorElement>> = ({
  intent,
  children,
  fullWidth,
  rounded,
  centered,
  shadow,
  href,
  ...props
}) => {
  const commonProps = {
    className: buttonStyles({ intent, fullWidth, centered, rounded, shadow }),
    ...props,
  };

  return href ? (
    <Link {...commonProps} href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </Link>
  ) : (
    <button {...commonProps}>
      {children}
    </button>
  );
};

export default Button;
