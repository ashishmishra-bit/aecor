import Head from "next/head";
import Header from "../components/Header/Header";

import Navbar from "../components/NavBar/Navbar";
import Card from "../components/Card/card";
import Product from "../components/OurProduct/Product";
import Image from "next/image";
import Footer from "../components/Footer/Footer";
import We from '../components/WhyWe/We';

export default function Home() {

  return (
    <div >
      <Head>
        <title>Aecor</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon1.ico" />
      </Head>
      <Navbar />
      <div>
      <Header />
      <We />
      {/* Body of Home page */}
      <div className="py-10">
        <div className="mx-auto text-center mt-10 lg:text-4xl text-purple-900 font-bold mb-5 text-3xl">
          <p>What we Offer !</p>
        </div>
        <div className="absolute ml-5  hidden lg:block">
        <Image src = "/img/art.png" height={229} width={231}/>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-x-px justify-items-center rounded-lg z-10">

          <Card
            title="Stock"
            imgURL="/img/stock.png"
            description="Invest in thousands of companies and fractional shares with as little as $5 using our trading tools and analytics to create your own financial portfolio."
          />
          <Card
            title="Crypto"
            imgURL="/img/crypto.png"
            description="Invest in thousands of companies and fractional shares with as little as $5 using our trading tools and analytics to create your own financial portfolio."
          />
          <Card
            title="Insurance"
            imgURL="/img/insurance.png"
            description="Invest in thousands of companies and fractional shares with as little as $5 using our trading tools and analytics to create your own financial portfolio."
          />
        </div>
      </div>
    <Product />
    <Footer />
      </div>

    </div>
  );
}
