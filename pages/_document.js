import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="fa" dir="rtl" className="">
      <Head />
      <body className="max-w-[95%] mx-auto bg-[url('/images/headerBgDesktop.webp')]  bg-top bg-no-repeat   dark:bg-zinc-800 p-10">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
