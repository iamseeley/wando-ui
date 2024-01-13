import { cva, VariantProps } from 'class-variance-authority';

const badgeStyles = cva(
  'inline-flex items-center px-2 py-1 rounded-full text-xs font-medium',
  {
    variants: {
      intent: {
        primary: 'bg-neutral-200 text-neutral-900 hover:bg-neutral-100',
        secondary: 'bg-orange-400 text-white',
      },
    },
    defaultVariants: {
      intent: 'primary',
    },
  }
);

export interface BadgeProps extends VariantProps<typeof badgeStyles> {
  children: React.ReactNode,
}

export default function Badge({ children, intent, ...props }: BadgeProps) {
  return (
    <span className={badgeStyles({ intent })} {...props}>
      {children}
    </span>
  );
}
