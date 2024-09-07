/* eslint-disable @typescript-eslint/ban-types */
import { AppProps } from 'next/app';

import { NextPageWithLayout } from '@/types';

type AppPropsWithLayout<AP = unknown> = AppProps<AP> & {
  Component: NextPageWithLayout;
};

const App = ({ Component, pageProps }: AppPropsWithLayout<{}>) => {
  const getLayout = Component.getLayout || (page => page);

  return <>{getLayout(<Component {...pageProps} />)}</>;
};

export default App;
