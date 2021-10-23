import '../styles/globals.css';
import { DefaultSeo } from 'next-seo'
import Layout from '../components/Layout';
import { ThemeProvider } from "next-themes";
import { AnimatePresence } from 'framer-motion';
function MyApp({ Component, pageProps,router }) {
  const url = `https://aecorcap.net/${router.route}`
  return (
    <>
      <DefaultSeo
                titleTemplate="%s - Aecor"
                openGraph={{
                    type: 'website',
                    locale: 'en_IE',
                    url,
                    description: 'Financial website that deals with stock marketing.',
                    site_name: 'Aecor | New World of Stocks',
                    images: [],
                }}
                canonical={url}
            />

    <AnimatePresence>     
      <ThemeProvider defaultTheme="light" attribute="class">
      <Layout>
      <Component {...pageProps} canonical={url} key={url}/>
      </Layout>
    </ThemeProvider>
    </AnimatePresence>
    </>
    
  );
}

export default MyApp;