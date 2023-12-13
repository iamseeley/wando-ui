import { cva, VariantProps } from 'class-variance-authority';
import { ReactNode } from 'react';

 const cardStyles = cva(
	'flex items-center justify-center px-10 py-10 rounded-lg',
	{
		variants: {
			intent: {
				primary: 'bg-white border shadow-sm text-white',
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



export interface CardProps extends
		VariantProps<typeof cardStyles> {
			children: ReactNode,
		}

export default function Card({ intent, children, fullWidth, centered, ...props }: CardProps) {
	return (
		<div className={cardStyles({ intent, fullWidth, centered })} {...props} >{children}</div>
	);
}
