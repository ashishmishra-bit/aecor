import React from 'react'
import { motion } from "framer-motion";
import Signin from '../components/Login/Login';

const Login = () => {
  const config = {
    type: "spring",
    damping: 20,
    stiffness: 100
  };
  return (
    <motion.div> 
      <section className = "loginHeader">
        <Signin />
      </section>      
    </motion.div>
  );
};

export default Login;

