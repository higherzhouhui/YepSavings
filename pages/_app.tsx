import '@/styles/globals.css'
import { ThemeProvider } from "@material-tailwind/react";

import type { AppProps } from 'next/app'
import { Layout } from '@/components';
export default function App({ Component, pageProps }: AppProps) {
  return(
  <ThemeProvider>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </ThemeProvider>
  ) 
}