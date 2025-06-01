import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="fa" dir="rtl" className="">
      <Head />
      <body className=" mx-auto bg-[url('/images/headerBgDesktop.webp')] bg-contain  bg-top bg-no-repeat   dark:bg-zinc-800 ">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
