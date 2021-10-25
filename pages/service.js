import Navbar from "../components/NavBar/Navbar";
import Footer from "../components/Footer/Footer";
import Image from 'next/image';

const service = () => {
  return (
    <>
      <Navbar />
      <div className = "card">
        <div className="content">
            <h1>Stocks</h1>
            <p>lorem ipsum dolor sit amet, consectetur adip.Lorem ipsum dolor sit amet, consectetur adip.lorem ipsum dolor sit amet, consectetur adip</p>
        </div>
        <Image src='/img/mutualFunds.png' height={320} width={290} />

        <style jsx>{`
            .card {
                position: relative;
                width:500px;
                height:300px;
                margin:20px;
                display:flex;
                justify-content:flex-start;
                align-items:center;
                border-radius:20px;
                background:linear-gradient(135deg,#d41e31,#491f8f);
            }
        
        `}</style>

      </div>
      <Footer />
    </>
  );
};

export default service;
