import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from './components/header'

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="/">Polls!</a>
        </h1>
        <div>

        </div>
      </main>

      <footer className={styles.footer}>
          <a href="https://github.com/pxai/nextjspolls">By Pello</a>
      </footer>
    </div>
  )
}
