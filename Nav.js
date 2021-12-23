import React, { useState } from 'react'
import ActiveLink from './components/ActiveLink'

export default function Nav () {
    return (
        <nav>
            <div className="nav-container">
                <ActiveLink href="/" className="nav-link">
                    Home
                </ActiveLink>
                <ActiveLink href="/all-posts" className="nav-link">
                    All Posts
                </ActiveLink>
            </div>
    </nav>
    )
}