import Head from 'next/head';
import Header from '../components/Header/Header';

import Navbar from '../components/NavBar/Navbar';
// import Navbar from "../components/NavBar/Navbar";
import Card from "../components/Card/card";
import Whywe from '../components/WhyWe/Whywe';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Aecor</title>
      </Head>
      <Navbar />
      <Header />
      <Whywe />

      {/* Body of Home page */}
      {/* <div className="mx-auto my-auto text-center">
        <h1 className="text-3xl md:text-4xl text-purple-900 font-bold">
          What Do we Offer ?
        </h1>
      </div>

      <section className="md:h-full flex items-center text-gray-600 mt-12">
      <div className="mx-auto my-auto flex gap-x-7 ">
        <Card
          title="Stock"
          imgURL="/img/stock.png"
          description="Invest in thousands of companies and fractional shares with as little as $5 using our trading tools and analytics to create your own financial portfolio."
        />
        <Card
          title="Crypto"
          imgURL="/img/crypto.png"
          description="nvest in thousands of companies and fractional shares with as little as $5 using our trading tools and analytics to create your own financial portfolio."
        />
        <Card
          title="Insurance"
          imgURL="/img/insurance.png"
          description="nvest in thousands of companies and fractional shares with as little as $5 using our trading tools and analytics to create your own financial portfolio."
        />
      </div>
      </section>    */}

    </div>
  );
}
