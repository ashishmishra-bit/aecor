import Navbar from '../components/NavBar/Navbar';
import Footer from '../components/Footer/Footer';
import { motion } from "framer-motion";

const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
}

const Layout = ({ children }) => {
    return (
        <div>
        
            <Navbar />
            <motion.main>
            {children}
            </motion.main>           
            <Footer />
        </div>
    )
}

export default Layout
