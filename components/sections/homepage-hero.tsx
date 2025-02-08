'use client';

import React from 'react';
import { Button, Highlight } from '@/components/button';
import Hero, { HeroSubtitle, HeroTitle } from '@/components/hero';
import { ChevronIcon } from '@/components/icons/chevron';
import HeroImage from '../heroImage';

export default function HomepageHero() {
  return (
    <Hero>
      <Button className="translate-y-[-1rem] animate-fade-in opacity-0" href="/" variant="secondary" size="small">
        <span>Linear 2022 Release – Built for scale</span> <Highlight>→</Highlight>
      </Button>
      <HeroTitle className="animate-fade-in [--animation-delay:200ms] translate-y-[-1rem] opacity-0">
        Linear is a better way <br className="hidden md:block" />
        to build products
      </HeroTitle>
      <HeroSubtitle className="animate-fade-in [--animation-delay:400ms] translate-y-[-1rem] opacity-0">
        Meet the new standard for modern software development. <br className="hidden md:block" />
        Streamline issues, sprints, and product roadmaps.
      </HeroSubtitle>
      <Button
        className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]"
        href="/"
        variant="primary"
        size="large"
      >
        <span>Get Started </span>
        <Highlight>
          <ChevronIcon />
        </Highlight>
      </Button>
      <HeroImage />
    </Hero>
  );
}
