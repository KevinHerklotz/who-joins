import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Who joins</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to my side project!
        </h1>

        <p className={styles.description}>
          I'm trying to build a website with <strong>Next.js</strong> that supports teams to organize themselves.
        </p>

      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
        {' '}|{' '}
        <Link href={`/about-me`}>about me</Link>
      </footer>
    </div>
  )
}

// Add static homepage
// Add Typescript
// add about page
// Add eslint
// Add prettier
// add scss support
// Connect to Vercel
// add mui
// Add jest
// Create login page
// Setup database
// Add notifications
// Make it a pwa