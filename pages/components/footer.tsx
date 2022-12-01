import Link from "next/link";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetServerSideProps } from 'next';

export default function Header () {
    return <footer>
        <Link href="https://github.com/pxai/nextjspolls">By Pello</Link>
    </footer>;
}


export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
    return {
      props: { 
        ...(await serverSideTranslations(locale!, ['common']))
      }
    };
};
