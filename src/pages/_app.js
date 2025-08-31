import Layout from "@/components/layout/Layout";
import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import Head from "next/head";
import Providers from "@/redux/Providers";
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';//
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

// Create a client
// const queryClient = new QueryClient({
//   defaultOptions: {
//     queries: {
//       staleTime: 5 * 60 * 1000, // 5 minutes
//       cacheTime: 10 * 60 * 1000, // 10 minutes
//       retry: 1,
//       refetchOnWindowFocus: false,
//     },
//   },
// });

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Coffee-Shop</title>
        <link rel="icon" href="/images/app-logo.png" />
      </Head>
      {/* <QueryClientProvider client={queryClient}> */}
        <ThemeProvider attribute="class" defaultTheme="system">
          <Providers>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </Providers>
        </ThemeProvider>
        {/* <ReactQueryDevtools initialIsOpen={false} /> */}
      {/* </QueryClientProvider> */}
    </>
  )
}
