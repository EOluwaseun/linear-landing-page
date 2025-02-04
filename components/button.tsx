'use client';

import Link from 'next/link';
import React from 'react';
import { cva, VariantProps } from 'class-variance-authority';

interface ButtonProps extends VariantProps<typeof buttonClasses> {
  children: React.ReactNode;
  href: string;
}

const buttonClasses = cva('rounded-full inline-flex items-center', {
  variants: {
    variant: {
      primary: 'bg-primary-gradient hover:text-shadow hover:shadow-primary',
      secondary: '',
      tetiary: '',
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

export function Button({ children, href, variant, size }: ButtonProps) {
  return (
    <Link className={buttonClasses({ variant, size })} href={href}>
      {children}
    </Link>
  );
}
