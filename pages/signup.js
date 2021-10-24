import { motion } from "framer-motion";
import SignUp from '../components/SignUp/signUp';

const signup = () => {
  const config = {
    type: "spring",
    damping: 20,
    stiffness: 100
  };
  return (
    // <motion.div transition={config}
    // initial={{ scale: 0, opacity: 0 }}
    // animate={{ scale: 1, opacity: 1 }}
    // exit={{ x: 0, opacity: 0 }}>
    <motion.div> 
      <section className = "signUpHeader">
        {/* <img src="/img/diwali.png" className="object-cover w-full h-full" alt="" /> */}
        <SignUp />
      </section>      
    </motion.div>
  );
};

export default signup;
