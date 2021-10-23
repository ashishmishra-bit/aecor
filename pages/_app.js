import '../styles/globals.css';
import { DefaultSeo } from 'next-seo'
import Layout from '../components/Layout';

import { AnimatePresence , motion  } from 'framer-motion';
import { render } from 'react-dom';
function MyApp({ Component, pageProps,router }) {
  

  const url = `https://aecorcap.net/${router.route}`;
  

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
    
      
      <Layout>
        <motion.div key={router.route}
      initial="initial"
      animate="animate"
      variants={{
        initial: {
          opacity: 0,
        },
        animate: {
          opacity: 1,
        },
      }}>
      <Component {...pageProps} canonical={url} key={url}/>
      </motion.div>
      </Layout>

    </AnimatePresence>
    </>
    
  );
}

export default MyApp;