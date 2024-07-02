"use client";
import { SessionProvider } from 'next-auth/react';
import { ThemeProvider } from 'next-themes';
import * as React from 'react';

interface IProvidersProps {
  children: React.ReactNode
}

const Providers: React.FunctionComponent<IProvidersProps> = ({ children }) => {
  return <>
    <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
      <SessionProvider>

        {children}

      </SessionProvider>
    </ThemeProvider>
  </>;
};

export default Providers;
