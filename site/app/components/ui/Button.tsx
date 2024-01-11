import { cva, VariantProps } from 'class-variance-authority';

const buttonStyles = cva(
	'flex items-center shadow-sm  justify-center px-4 py-1 rounded-full font-medium text-shadow hover:opacity-80  transition-all',
	{
	  variants: {
		intent: {
		  primary: 'bg-gradient-to-br from-neutral-50 to-neutral-100 hover:border-orange-600 ',
		  secondary:
			'bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600 hover:border-orange-600 text-white',
		},
		fullWidth: {
		  true: 'w-full',
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

export default function Button({ intent, children, fullWidth, centered, href, ...props }: ButtonProps) {
	// Conditional rendering based on the presence of 'href'
	return href ? (
		<a target='_blank' rel='noopener noreferrer' href={href} className={buttonStyles({ intent, fullWidth, centered })} {...props}>
		{children}
		</a>
	) : (
		<button className={buttonStyles({ intent, fullWidth, centered })} {...props}>
		{children}
		</button>
	);
}
