import Layout from "@/components/layout/Layout";
import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import Head from "next/head";
import Providers from "@/redux/Providers";

export default function App({ Component, pageProps }) {
  return (
    <>

      <Head>
        <title>Coffee-Shop</title>
        <link rel="icon" href="/images/app-logo.png" />
      </Head>
      <ThemeProvider attribute="class" defaultTheme="system">
        <Providers>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Providers>
      </ThemeProvider>

    </>
  )
}
