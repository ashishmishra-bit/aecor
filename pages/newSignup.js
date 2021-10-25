import SignUpNew from "../components/SignUp/SignUpNew";
import Navbar from "../components/NavBar/Navbar";
import Footer from "../components/Footer/Footer";

const newSignup = () => {
  return (
    <>
      <Navbar />
      <div>
        <SignUpNew />
      </div>
      <Footer />
    </>
  );
};

export default newSignup;
