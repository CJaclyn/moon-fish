import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Nav from './Nav'

export default function Header () {
    return (
        <header>
            <div className="header-top">
                <Link href="/">
                    <a className="logo">
                        <Image 
                            src="/logo_black_nobackground.svg" 
                            alt="moon fish logo"
                            width="150"
                            height="150"
                            className="nav-logo"
                        />
                    </a>
                </Link>
                <h1>Moon Fish</h1>
                <p>
                    Vietnam history and culture blog
                </p>
                <Link href="/post/what-is-chu-nom-what-is-the-difference-between-chu-nom-and-chu-quoc-ngu">
                    <a className="nom-alert">This website uses Nôm characters.</a>
                </Link>
            </div>
            <Nav />
        </header>
    )
}