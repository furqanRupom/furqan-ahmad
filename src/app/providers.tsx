"use client";
import { ThemeProvider } from 'next-themes';
import * as React from 'react';

interface IProvidersProps {
    children:React.ReactNode
}

const Providers: React.FunctionComponent<IProvidersProps> = ({children}) => {
  return <>
  <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
    {children}
  </ThemeProvider>
  </>;
};

export default Providers;
