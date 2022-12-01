import Head from 'next/head'
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetServerSideProps } from 'next';

export default function Header () {
    return <Head>
    <title>Polls</title>
    <meta name="description" content="Generated by create next app" />
    <meta name="author" content="Pello Altadill" />
    <link rel="icon" href="/favicon.ico" />
</Head>;
}

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
    return {
      props: { 
        ...(await serverSideTranslations(locale!, ['common']))
      }
    };
};
