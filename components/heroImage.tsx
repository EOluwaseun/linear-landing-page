'use client';

import classNames from 'classnames';
// import Image from 'next/image';
import React, { CSSProperties, useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
// intersection obsever is used to know weather object is in view or not

const randomNumberBetween = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

interface Line {
  id: string;
  direction: 'to top' | 'to left';
  size: number;
  duration: number;
}

export default function HeroImage() {
  const { ref, inView } = useInView({ threshold: 0.4, triggerOnce: true }); //ref is then passto DOM element
  //threashold is number from 0 - 1
  //if page is 40% in view
  // ========LINES========
  const [lines, setLines] = useState<Line[]>([]);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  //this removes the line after it has moved once
  const removeLine = (id: string) => {
    setLines((prev) => prev.filter((line) => line.id !== id));
  };

  //for that
  useEffect(() => {
    if (!inView) return; //if not inview, dont show no lines

    const renderLine = (timeout: number) => {
      timeoutRef.current = setTimeout(() => {
        setLines((lines) => [
          ...lines,
          {
            direction: Math.random() > 0.5 ? 'to top' : 'to left',
            duration: randomNumberBetween(1300, 3500),
            size: randomNumberBetween(10, 30), //100px to 300px
            id: Math.random().toString(36).substring(7),
          },
        ]);

        renderLine(randomNumberBetween(800, 2500));
      }, timeout);
    };

    renderLine(randomNumberBetween(800, 1300));

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [inView, setLines]);

  return (
    // for translate x to work, it needs to be wrapped in perspective div
    <div ref={ref} className="mt-[12.8rem] [perspective:2000px]">
      <div
        className={classNames(
          'relative rounded-lg bg-hero-gradient bg-white bg-opacity-[0.01] border border-transparent',
          inView ? 'animate-image-rotate' : '[transform:rotateX(25deg)]',
          'before:w-full before:h-full before:top-0 before:left-0 before:absolute before:[filter:blur(120px)] before:bg-hero-glow before:opacity-0',
          inView && 'before:animate-image-glow'
        )}
      >
        {/* moving lines */}
        <div className="absolute top-0 left-0 z-20 h-full w-full">
          {lines.map((line) => (
            <span
              key={line.id}
              onAnimationEnd={() => removeLine(line.id)}
              style={
                {
                  '--direction': line.direction,
                  '--size': line.size,
                  '--animation-duration': `${line.duration}ms`,
                } as CSSProperties
              }
              className={classNames(
                'absolute top-0 block h-[1px] bg-glow-lines',
                line.direction === 'to left' &&
                  `left-0 h-[1px] w-[calc(var(--size)*0.5rem)] animate-glow-line-horizontal md:w-[calc(var(--size)*1rem)]`,
                line.direction === 'to top' &&
                  `right-0 h-[calc(var(--size)*0.5rem)] w-[1px] animate-glow-line-vertical md:h-[calc(var(--size)*1rem)]`
              )}
            />
          ))}
        </div>

        <svg
          className={classNames(
            'absolute left-0 top-0 h-full w-full',
            '[&_path]:stroke-white [&_path]:[strokeOpacity:0.2] [&_path]:[stroke-dasharray:1] [&_path]:[stroke-dashoffset:1]',
            inView && '[&_path]:animate-sketch-lines'
          )}
          width="100%"
          viewBox="0 0 1499 778"
          fill="none"
        >
          <path pathLength="1" d="M1500 72L220 72"></path>
          <path pathLength="1" d="M1500 128L220 128"></path>
          <path pathLength="1" d="M1500 189L220 189"></path>
          <path pathLength="1" d="M220 777L220 1"></path>
          <path pathLength="1" d="M538 777L538 128"></path>
        </svg>
        {/* <Image src="/img/hero.webp" alt="hero" fill /> */}
        <img
          src="img/hero.webp"
          alt="hero"
          className={classNames('z-10 relative transition-opacity delay-[600ms]', inView ? 'opacity-100' : 'opacity-0')}
        />
      </div>
    </div>
  );
}
