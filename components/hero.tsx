'use client';
import classNames from 'classnames';

interface HeroProps {
  children: React.ReactNode;
  className?: string;
}

interface HeroElementProps {
  children: React.ReactNode;
  className?: string;
}

export const HeroTitle = ({ children, className }: HeroElementProps) => {
  return <h1 className={classNames('text-gradient my-6 text-6xl md:text-8xl', className)}>{children}</h1>;
};

export const HeroSubtitle = ({ children, className }: HeroElementProps) => {
  return <p className={classNames('text-lg md:text-xl mb-12 text-primary-text', className)}>{children}</p>;
};
export default function Hero({ children }: HeroProps) {
  return <div className="text-center">{children}</div>;
}
