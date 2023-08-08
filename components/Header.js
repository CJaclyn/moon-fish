import React, { useState } from "react";
import Link from "next/link";
import Nav from "./Nav";

export default function Header() {
  return (
    <header>
      <div className="header-top">
        <div className="logo">
          <Link href="/">
            <a>Moon Fish</a>
          </Link>
        </div>
        <p>A Vietnamese culture blog</p>
      </div>
      <Nav />
    </header>
  );
}
