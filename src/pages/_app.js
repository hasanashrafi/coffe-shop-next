import Layout from "@/components/layout/Layout";
import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import Head from "next/head";

import { store } from '@/store/store';

export default function App({ Component, pageProps }) {
  return (
    <>

      <Head>
        <title>Coffee-Shop</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <ThemeProvider attribute="class" defaultTheme="system">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>

    </>
  )
}
