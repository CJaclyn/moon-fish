import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Nav from './Nav';

export default function Header() {
  return (
    <header>
      <div className='header-top'>
        <div className='logo'>
          <Link href='/'>
            <a>
              <Image
                src='/moon_fish_logo.svg'
                alt='Moon Fish'
                layout='fill'
                className='nav-logo'
              />
            </a>
          </Link>
        </div>
        <p>Vietnamese culture blog.</p>
      </div>
      <Nav />
    </header>
  );
}
