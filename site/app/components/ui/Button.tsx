import { cva, VariantProps } from 'class-variance-authority';

 const buttonStyles = cva(
	'flex items-center justify-center px-4 py-2 rounded font-medium focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-white dark:focus:ring-offset-black focus:ring-offset-1 disabled:opacity-60 disabled:pointer-events-none hover:bg-opacity-80',
	{
		variants: {
			intent: {
				primary: 'bg-orange-500 text-white',
				secondary:
					'bg-gray-200 text-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-100 focus:ring-gray-500',
				danger: 'bg-red-500 text-white focus:ring-red-500',
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
