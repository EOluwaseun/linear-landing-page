'use client';

import classNames from 'classnames';
// import Image from 'next/image';
import React, { CSSProperties, useState } from 'react';
import { useInView } from 'react-intersection-observer';
// intersection obsever is used to know weather object is in view or not

export default function HeroImage() {
  const { ref, inView } = useInView({ threshold: 0.4, triggerOnce: true }); //ref is then passto DOM element
  //threashold is number from 0 - 1
  //if page is 40% in view
  // ========LINES========
  const [lines, setLines] = useState([
    { direction: 'to bottom', duration: 200, size: 20 },
    { direction: 'to right', duration: 200, size: 15 },
  ]);
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
        <div className="absolute w-full h-full left-0 top-0 z-20">
          {lines.map((line, i) => (
            <span
              key={i}
              style={{ '--direction': line.direction, '--size': line.size } as CSSProperties}
              className={classNames(
                'bg-glow-lines block absolute top-0',
                line.direction === 'to right' && 'left-0 h-[1px] w-[calc(var(--size)*0.5rem)]',
                line.direction === 'to bottom' && 'right-0 w-[1px] h-[calc(var(--size)*0.5rem)]'
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
