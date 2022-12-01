import { GetServerSideProps } from 'next';
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import prisma from '../lib/prisma';
import { PollProps } from '../prisma/types';
import { useState } from 'react';
import Poll from './components/poll';
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Layout from './components/layout';

type Props = {
  polls: PollProps[]
}

export default function Home(props: Props) {
  const { t } = useTranslation()
  const [polls, setPolls] = useState(props.polls);
  return (
      <Layout>
        <main className={styles.main}>
          <h1 className={styles.title}>
            <Link href="/">{t('title')}</Link>
          </h1>
          <div>
            {
              polls.map((poll) => (
                <Poll key={poll.id} {...poll} />
              ))
            }
          </div>
        </main>
      </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  const polls = await prisma.poll.findMany({
    where: { published: true },
    include: {
      author: {
        select: { name: true, id: true },
      },
      answers: true
    },
    orderBy: {
      createdAt: 'desc',
    },
    take: 1,
  });

  return {
    props: { 
      polls: JSON.parse(JSON.stringify(polls)),
      ...(await serverSideTranslations(locale!, ['common']))
    }
  };
};
