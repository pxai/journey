import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { signOut, useSession } from 'next-auth/react';

export default function Nav () {
    const router = useRouter();
    const { data: session, status } = useSession();
    const isActive: (pathname: string) => boolean = (pathname) =>
    router.pathname === pathname;
    console.log("Session: ", session)
    return (
        <nav>
            <Link href="/">
                Home
            </Link>{' | '}
         { 
            !session ?
                <Link href="/api/auth/signin" data-active={isActive('/signup')}>
                    Log in
                </Link>
                :
                <>
                    <Link href="/addpoll">
                        Add Poll
                    </Link>{' | '}
                    <Link href="/api/auth/signout" data-active={isActive('/signup')}>
                        Log out
                    </Link>
                </>
         }
        </nav>
    )
}