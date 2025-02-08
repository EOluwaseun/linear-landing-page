/* eslint-disable @next/next/no-img-element */
import Container from '@/components/container';
import Clients from '@/components/sections/client';
import HomepageHero from '@/components/sections/homepage-hero';
// import Image from 'next/image';
// import { HeroSubtitle, HeroTitle } from '@/components/hero';

export default function Home() {
  return (
    <>
      <div className="overflow-hidden pb-[16.4rem] md:pb-[25.6rem]">
        <Container className="pt-[6.4rem] overflow-hidden">
          <HomepageHero />
        </Container>
      </div>
      <Container>
        <Clients />
      </Container>
    </>
  );
}
