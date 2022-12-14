import Head from 'next/head'
import Image from 'next/image'
import styles from 'src/styles/Home.module.css'
import React from 'react'
import { useCountriesQuery } from 'src/graphql/hooks'

export const Countries: React.FC = () => {
  const { data } = useCountriesQuery()
  const countries = (data?.countries || []).slice(0, 10)

  return (
    <div className={styles.container}>
      <Head>
        <title>Countries</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Countries page</h1>

        <p className={styles.description}>Countries list </p>

        <div className={styles.grid}>
          {countries.map((c) => (
            <a
              href="https://nextjs.org/docs"
              className={styles.card}
              key={c.name}
            >
              <h2>{c.name}</h2>
              <p>emoji: {c.emoji}</p>
            </a>
          ))}
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
