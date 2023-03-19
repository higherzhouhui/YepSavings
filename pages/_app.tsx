import '@/styles/globals.css'
import { ThemeProvider } from "@material-tailwind/react";

import type { AppProps } from 'next/app'
import { Layout, Message } from '@/components';
export default function App({ Component, pageProps }: AppProps) {
  return(
  <ThemeProvider>
    <Message />
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </ThemeProvider>
  ) 
}