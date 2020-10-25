import Head from 'next/head'
import Link from 'next/link'

type Props = {
  children: React.ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="TODO"
        />
      </Head>
      <header>
        HEADER
      </header>
      <main>{children}</main>
      <div>
        <Link href="/">
          <a>← Back to home</a>
        </Link>
      </div>
    </div>
  )
}
