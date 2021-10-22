import '../styles/globals.css'
// import 'tailwindcss/tailwind.css'
// import '../styles/Home.css'
import { ThemeProvider } from "next-themes";
function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider defaultTheme="light" attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;