import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="fa" dir="rtl" className="light">
      <Head />
      <body className=" dark:bg-zinc-800 ">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
