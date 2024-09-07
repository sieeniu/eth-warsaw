import Head from 'next/head';
import { PropsWithChildren } from 'react';

export const DefaultLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Head>
        <title>University dApp Cloud</title>
      </Head>
      {children}
    </>
  );
};
