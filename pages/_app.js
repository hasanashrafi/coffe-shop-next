import Layout from "@/components/layout/Layout";
import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>

      <Head>
        <title>Coffee-Shop</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <ThemeProvider attribute="class">

      <Layout>
        <Component {...pageProps} />
      </Layout>
      </ThemeProvider>
    </>
  )
}
