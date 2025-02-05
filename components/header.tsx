'use client';

import React, { useEffect, useState } from 'react';
import Container from './container';
import Link from 'next/link';
import { Logo } from './icons/logo';
import { Button } from './button';
import { HamburgerIcon } from './icons/hamburger';
import classNames from 'classnames';

export default function Header() {
  const [hamburgerMenuIsOpen, setHamburgerMenuIsOpen] = useState(false);
  //this will make d navigation not to scroll
  useEffect(() => {
    const html = document.querySelector('html'); //this return null
    if (html) html.classList.toggle('overflow-hidden', hamburgerMenuIsOpen);
  }, [hamburgerMenuIsOpen]);

  //the below remove d overflow hiiden if we resize or changeorientation of the browser
  useEffect(() => {
    const closeHamburgerNavigation = () => setHamburgerMenuIsOpen(false);

    window.addEventListener('orientationchange', closeHamburgerNavigation);
    window.addEventListener('resize', closeHamburgerNavigation);

    return () => {
      window.removeEventListener('orientationchange', closeHamburgerNavigation);
      window.removeEventListener('resize', closeHamburgerNavigation);
    };
  }, [setHamburgerMenuIsOpen]);

  return (
    <header className="w-full fixed top-0 left-0 border-b border-transparent-white backdrop-blur-[12px]">
      <Container className="flex h-navigation-height">
        <Link href="/" className="flex items-center text-md">
          <Logo className="w-[1.8rem] h-[1.8rem] mr-4" /> Linear
        </Link>
        <div
          className={classNames(
            'transition-[visibility] md:visible',
            hamburgerMenuIsOpen ? 'visible' : 'delay-500 invisible'
          )}
        >
          <nav
            // height of nav is screen height minus header height
            className={classNames(
              // 'h-[calc(100vh_-_var(--navigation-height))] overflow-auto w-full md:block left-0 fixed md:relative top-navigation-height bg-background',
              // hamburgerMenuIsOpen ? '' : 'hidden'
              'fixed top-navigation-height left-0 h-[calc(100vh_-_var(--navigation-height))] w-full overflow-auto bg-background transition-opacity duration-500 md:relative md:top-0 md:block md:h-auto md:w-auto md:translate-x-0 md:overflow-hidden md:bg-transparent md:opacity-100 md:transition-none',
              hamburgerMenuIsOpen ? 'translate-x-0 opacity-100' : 'translate-x-[-100vw] opacity-0'
            )}
          >
            {/* [&_li]:ml-6 This target all li in the ul tag */}
            <ul
              className={classNames(
                'flex h-full flex-col md:flex-row md:items-center [&_li]:ml-6 [&_li]:border-b [&_li]:border-grey-dark md:[&_li]:border-none',
                'ease-in [&_a:hover]:text-grey [&_a]:flex [&_a]:h-navigation-height [&_a]:w-full [&_a]:translate-y-8 [&_a]:items-center [&_a]:text-lg [&_a]:transition-[color,transform] [&_a]:duration-300 md:[&_a]:translate-y-0 md:[&_a]:text-sm [&_a]:md:transition-colors',
                hamburgerMenuIsOpen && '[&_a]:translate-y-0'
              )}
            >
              <li>
                <Link href={'/'}>Features</Link>
              </li>
              <li>
                <Link href={'/'}>Methods</Link>
              </li>
              <li className="md:hidden lg:block">
                <Link href={'/'}>Customers</Link>
              </li>
              <li className="md:hidden lg:block">
                <Link href={'/'}>Changelogs</Link>
              </li>
              <li className="md:hidden lg:block">
                <Link href={'/'}>Integrations</Link>
              </li>
              <li className="">
                <Link href={'/'}>Pricing</Link>
              </li>
              <li className="">
                <Link href={'/'}>Company</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="ml-auto h-full flex items-center">
          {/* <Link href={'/'}>
            <Logo className="w-[1.8rem] h-[1.8rem] mr-4" />
          </Link> */}
          <Link href={'/'} className="text-sm mr-6">
            Log in
          </Link>
          <Button href="/">Sign up</Button>
          <button onClick={() => setHamburgerMenuIsOpen((open) => !open)} className="ml-6 md:hidden">
            <span className="sr-only">Toggle menu</span>
            {/* any button with an icon must have a screen reader, only visible to the browser */}
            <HamburgerIcon />
          </button>
        </div>
      </Container>
    </header>
  );
}
