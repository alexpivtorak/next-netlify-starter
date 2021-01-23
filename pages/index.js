import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>pvtrk/blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Something cool is coming!" />
        <p className="description">stay tuned</p>
      </main>

      <Footer />
    </div>
  );
}
