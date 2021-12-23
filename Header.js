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
                    Vietnam history and culture blog <br />
                    ✧･ﾟ: *✧･ﾟ:* 悉哿眾些調𤯨𥪝𣹟𤃡，仍吻固𠊛當𥈴𥆾匏𡗶𣋀。 *:･ﾟ✧*:･ﾟ✧
                </p>
                <a href="https://www.hannom-rcv.org/font.html" target="_blank" rel="noreferrer" className="nom-alert">This website uses Nôm characters.</a>
            </div>
            <Nav />
        </header>
    )
}