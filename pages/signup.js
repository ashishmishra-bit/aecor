
import SignUp from '../components/SignUp/signUp';
import Navbar from "../components/NavBar/Navbar";
import Footer from "../components/Footer/Footer";
const signup = () => {
  
  return (

    <div> 
      <Navbar />
      <section>
        {/* <img src="/img/diwali.png" className="object-cover w-full h-full" alt="" /> */}
        <SignUp />
      </section> 
      <Footer />
         
    </div>
  );
};

export default signup;
