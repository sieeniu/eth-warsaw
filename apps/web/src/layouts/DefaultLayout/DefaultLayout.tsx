import Head from 'next/head';
import { PropsWithChildren } from 'react';

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import { IDKitVerification } from '@/components/usable/Verify';

export const DefaultLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Head>
        <title>University dApp Cloud</title>
        <meta name="description" content="Platforma dla dApp na uczelniach" />
      </Head>
      <header className="bg-white text-gray-600 p-4">
        <nav>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink href="/">Strona główna</NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="/tasks">Zadania</NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="/about">O nas</NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <IDKitVerification />
        </nav>
      </header>
      <main className="p-4">{children}</main>
    </>
  );
};
