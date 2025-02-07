'use client';

import Link from 'next/link';
import React, { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import classNames from 'classnames';

// interface ButtonProps extends VariantProps<typeof buttonClasses> {
//   children: React.ReactNode;
//   href: string;
// }
type ButtonBaseProps = VariantProps<typeof buttonClasses> & {
  children: React.ReactNode;
};

interface ButtonAsAnchorProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

interface ButtonAsButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  href?: never;
}

type ButtonProps = ButtonBaseProps & (ButtonAsAnchorProps | ButtonAsButtonProps);

export const Highlight = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <span className={classNames('highlight', className)}>{children}</span>
);

const buttonClasses = cva('rounded-full inline-flex items-center', {
  variants: {
    variant: {
      // primary: 'bg-primary-gradient hover:text-shadow hover:shadow-primary',
      primary: [
        'bg-primary-gradient hover:text-shadow hover:shadow-primary transition-[shadow,text-shadow]',
        '[&_.highlight]:ml-2',
      ],
      secondary: [
        'text-off-white bg-white bg-opacity-10 border border-transparent-white backdrop-filter-[12px] hover:bg-opacity-20 transition-colors ease-in',
        '[&_.highlight]:bg-transparent-white [&_.highlight]:rounded-full [&_.highlight]:px-2 [&_.highlight:last-child]:ml-2 [&_.highlight:last-child]:-mr-2 [&_.highlight:first-child]:-ml-2 [&_.highlight:first-child]:mr-2',
      ],
    },
    size: {
      small: 'text-xs px-3 h-7', //h-28px/4
      medium: 'text-sm px-4 h-8', //font sizes are the text,16px of padding x-axis,h-32px/4
      large: 'text-md px-6 h-12',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'medium',
  },
});

// export function Button({ children, href, variant, size }: ButtonProps) {
//   return (
//     <Link className={buttonClasses({ variant, size })} href={href}>
//       {children}
//     </Link>
//   );
// }

export const Button = ({ children, variant, size, ...props }: ButtonProps) => {
  const classes = buttonClasses({ variant, size, className: props.className });

  if ('href' in props && props.href !== undefined) {
    return (
      <Link {...props} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button {...props} className={classes}>
      {children}
    </button>
  );
};
