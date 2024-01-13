import { cva, VariantProps } from 'class-variance-authority';

const avatarStyles = cva(
  'inline-block align-middle rounded-full',
  {
    variants: {
      intent: {
        primary: 'border-2 border-neutral-50',
        secondary: 'border-2 border-orange-400',
      },
      size: {
        small: 'w-8 h-8',
        medium: 'w-12 h-12',
        large: 'w-16 h-16',
      },
    },
    defaultVariants: {
      intent: 'primary',
      size: 'medium',
    },
  }
);

export interface AvatarProps extends VariantProps<typeof avatarStyles> {
  src: string,
  alt: string,
}

export default function Avatar({ src, alt, intent, size, ...props }: AvatarProps) {
  return (
    <img src={src} alt={alt} className={avatarStyles({ intent, size })} {...props} />
  );
}
