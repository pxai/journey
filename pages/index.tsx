import { GetServerSideProps } from 'next';
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Header from './components/header'
import prisma from '../lib/prisma';
import { PollProps } from '../prisma/types';
import { useState } from 'react';
import Poll from './components/poll';
import Nav from './components/nav';

type Props = {
  polls: PollProps[]
}

export default function Home(props: Props) {
  const [polls, setPolls] = useState(props.polls);
  return (
    <div className={styles.container}>
      <Header />
      <Nav />
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <Link href="/">Polls!</Link>
        </h1>
        <div>
          {
            polls.map((poll) => (
              <Poll key={poll.id} {...poll} />
            ))
          }
        </div>
      </main>

      <footer className={styles.footer}>
          <Link href="https://github.com/pxai/nextjspolls">By Pello</Link>
      </footer>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const polls = await prisma.poll.findMany({
    where: { published: true },
    include: {
      author: {
        select: { name: true, id: true },
      },
      answers: true
    },
  });

  return {
    props: { polls: JSON.parse(JSON.stringify(polls)) }
  };
};
