import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Header from './components/header'

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <Link href="/">Polls!</Link>
        </h1>
        <div>

        </div>
      </main>

      <footer className={styles.footer}>
          <Link href="https://github.com/pxai/nextjspolls">By Pello</Link>
      </footer>
    </div>
  )
}
