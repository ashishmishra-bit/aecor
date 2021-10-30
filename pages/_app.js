import "../styles/globals.css";
import { DefaultSeo } from "next-seo";
// import Layout from '../components/Layout';
import Loader from "../assets/Preloader";
import React from "react"

import { render } from "react-dom";
function MyApp({ Component, pageProps, router }) {
  const url = `https://aecorcap.net/${router.route}`;
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <>
      <DefaultSeo
        titleTemplate="%s - Aecor"
        openGraph={{
          type: "website",
          locale: "en_IE",
          url,
          description: "Financial website that deals with stock marketing.",
          site_name: "Aecor | New World of Stocks",
          images: [],
        }}
        canonical={url}
      />

      
        <div
          key={router.route}
          initial="initial"
          animate="animate"
          variants={{
            initial: {
              opacity: 0,
            },
            animate: {
              opacity: 1,
            },
          }}
        >
          {/* <Component {...pageProps} canonical={url} key={url} /> */}

          {!loading ? (
        <React.Fragment>
          <Component {...pageProps} canonical={url} key={url} />
        </React.Fragment>
      ) : (
        <Loader />
      )}
        </div>
      
    </>
  );
}

export default MyApp;
