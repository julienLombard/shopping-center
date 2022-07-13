import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export const Layout = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title ? title : 'Shopping-Center'}</title>
        <meta name="description" content="E-commerce web sites Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex min-h-screen flex-col justify-between ">
        <header>
          <nav className="flex h-12 items-center px-4 justify-between shadow-md">
            <Link href="/">
              <a className="text-lg font-bold">Shopping Center</a>
            </Link>
            <div>
              <Link href="/shop/first-shop">
                <a className="p-2">First-shop</a>
              </Link>
              <Link href="/shop/second-shop">
                <a className="p-2">Second-shop</a>
              </Link>
              <Link href="/shop/third-shop">
                <a className="p-2">Third-shop</a>
              </Link>
            </div>
          </nav>
        </header>
        <main className="container m-auto mt-4 px-4">{children}</main>
        <footer className="flex h-10 justify-center items-center shadow-inner">
          <p>Shopping-Center - 2022</p>
        </footer>
      </div>
    </>
  );
};
