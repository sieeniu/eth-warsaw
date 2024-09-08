import Head from 'next/head';
import { PropsWithChildren } from 'react';
import Navbar from "@/components/usable/Navbar";
import { IDKitVerification } from '@/components/usable/Verify';

export const DefaultLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Head>
        <title>University dApp Cloud</title>
        <meta name="description" content="Platforma dla dApp na uczelniach" />
      </Head>
      <header className="bg-white text-gray-600 p-4">
        <Navbar/>
        <IDKitVerification />

      </header>
      <main className="p-4">{children}</main>
    </>
  );
};
