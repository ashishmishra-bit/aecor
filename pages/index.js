import Head from 'next/head';
import Header from '../components/Header/Header';

import Navbar from '../components/NavBar/Navbar';
// import Navbar from "../components/NavBar/Navbar";
import Card from "../components/Card/card";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Aecor</title>
      </Head>
      <Navbar />
      {/* <Header/>     */}

    </div>
  );
}
