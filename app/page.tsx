import Container from '@/components/container';
import Hero, { HeroSubtitle, HeroTitle } from '@/components/hero';
// import Image from 'next/image';
// import { HeroSubtitle, HeroTitle } from '@/components/hero';

export default function Home() {
  return (
    <div>
      <main>
        <Container>
          <Hero>
            <HeroTitle>
              Linear is a better way <br />
              to build products
            </HeroTitle>
            <HeroSubtitle>
              Meet the new standard for modern software development. <br />
              Streamline issues, sprints, and product roadmaps.
            </HeroSubtitle>
            {/* <Image src="/img/hero.webp" alt="hero" fill /> */}
            <img src="img/hero.webp" alt="hero" />
          </Hero>
        </Container>
      </main>
    </div>
  );
}
