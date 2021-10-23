import '../styles/globals.css'
import Navbar from '../components/NavBar/Navbar';
import Footer from '../components/Footer/Footer'
import { ThemeProvider } from "next-themes";
function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider defaultTheme="light" attribute="class">
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  );
}

export default MyApp;