import { ReactElement } from 'react';

import { DefaultLayout } from '@/layouts';
import { NextPageWithLayout } from '@/types';

const DashboardPage: NextPageWithLayout = () => {
  return <>Hello world</>;
};

DashboardPage.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page} </DefaultLayout>;
};

export default DashboardPage;
