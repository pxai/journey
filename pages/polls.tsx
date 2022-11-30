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

export default function Polls(props: Props) {
  const [polls, setPolls] = useState(props.polls);
  return (
    <div className={styles.container}>
      <Header />
      <Nav />
      <main className={styles.main}>
        <h1 className={styles.title}>
          Published Polls
        </h1>
        <div>
          {
            polls.map((poll) => (
              <div key={poll.id}>
                <h3><Link href={`/poll/${poll.id}`}>{poll.title}</Link></h3>
                <div><i>{poll.content}</i></div>
                <div>By {poll.author?.name} - {poll.createdAt}</div>
              </div>
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
      answers: {
        include: {
          votes: true
        }
      }
    },
  });

  return {
    props: { polls: JSON.parse(JSON.stringify(polls)) }
  };
};
