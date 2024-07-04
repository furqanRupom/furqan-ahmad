"use client";
import { SessionProvider } from 'next-auth/react';
import { ThemeProvider } from 'next-themes';
import * as React from 'react';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

interface IProvidersProps {
  children: React.ReactNode
}

const Providers: React.FunctionComponent<IProvidersProps> = ({ children }) => {
  const queryClient = new QueryClient()

  return <>
    <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
      <SessionProvider>

        <QueryClientProvider client={queryClient}>

          {children}
        </QueryClientProvider>


      </SessionProvider>
    </ThemeProvider>
  </>;
};

export default Providers;
