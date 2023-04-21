import Head from "next/head";
import Header from "../sections/Header";
import Top from "../sections/Top";
import AboutMe from "../sections/AboutMe";

export default function Home() {
  return (
    <>
      <Head>
        <title>ADNAN | PORTOFOLIO</title>
        <meta
          name="description"
          content="Adnan Zahir's portofolio, showcasing my projects and skills in web design and development."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="wrapper center">
        <Header />
        <main>
          <Top />
          <AboutMe />
        </main>
      </div>
    </>
  );
}
