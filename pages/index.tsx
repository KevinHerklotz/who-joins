/* eslint-disable jsx-a11y/accessible-emoji */
import Head from 'next/head'
import Link from 'next/link'
import React, { useState } from 'react'

import styles from './index.module.scss'

export default function Home() {
  const [testText, setTestText] = useState('initialState (SSR)')
  React.useEffect(() => {
    setTestText('updated')
  }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>Who joins</title>
      </Head>

      <main className={styles.main}>
        <h1>{testText}</h1>
        <h1 className={styles.title}>Welcome to my side project!</h1>

        <p className={styles.description}>
          I&apos;m trying to build a website with
          {' '}
          <strong>Next.js</strong>
          {' '}
          that supports teams to organize themselves.
        </p>
        <h2>TODOS:</h2>
        <ol>
          <li>✅ Add static homepage</li>
          <li>✅ Add Typescript</li>
          <li>✅ Add eslint</li>
          <li>✅ Add prettier</li>
          <li>✅ add about page</li>
          <li>✅ add scss support</li>
          <li>✅ add scss linter</li>
          <li>✅ add MUI</li>
          <li>✅ fix Prettier overwriting eslint</li>
          <li>✅ add directory shortcuts</li>
          <li>✅ Connect to Vercel</li>
          <li>Add Header and Footer to every page</li>
          <li>Create login page</li>
          <li>Add jest</li>
          <li>Setup database</li>
          <li>Add notifications</li>
          <li>Light theme dark theme</li>
          <li>
            Make it a
            {' '}
            <a href="https://itnext.io/pwa-with-next-js-create-next-app-in-2020-%EF%B8%8F-9ee0e1a6313d">PWA</a>
          </li>
          <li>check Lighthouse</li>
        </ol>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by
          {' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
        {' '}
        |
        {' '}
        <Link href="/about">
          <a>about me</a>
        </Link>
      </footer>
    </div>
  )
}
