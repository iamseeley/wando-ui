import { cva, VariantProps } from 'class-variance-authority';

const buttonStyles = cva(
	'flex items-center shadow-sm  justify-center px-4 py-1 font-medium text-shadow transition-all',
	{
	  variants: {
		intent: {
		  primary: 'bg-neutral-50 hover:bg-neutral-200 rounded-md',
		  secondary:
			'bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600 hover:border-orange-600 text-white',
		},
		fullWidth: {
		  true: 'w-full',
		},
		rounded: {
			true: 'rounded-full'
		},
		centered: {
		  true: 'm-auto'
		}
	  },
	  defaultVariants: {
		intent: 'primary',
	  },
	},
  );
  

export interface ButtonProps extends
		VariantProps<typeof buttonStyles> {
			children: string,
			href?: string
		}

export default function Button({ intent, children, fullWidth, rounded, centered, href, ...props }: ButtonProps) {
	// Conditional rendering based on the presence of 'href'
	return href ? (
		<a target='_blank' rel='noopener noreferrer' href={href} className={buttonStyles({ intent, fullWidth, centered, rounded })} {...props}>
		{children}
		</a>
	) : (
		<button className={buttonStyles({ intent, fullWidth, centered, rounded })} {...props}>
		{children}
		</button>
	);
}
