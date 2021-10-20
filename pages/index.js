import Head from 'next/head';
// import { Navbar } from '../components/Navbar';
import Navbar from '../components/NavBar/Navbar'


export default function Index() {
  return (
    <div>
      <Head>
        <title>Aecor</title>        
      </Head>
      <Navbar />
      <div className="font-bold title">Hello World</div>
    </div>
  );
}
