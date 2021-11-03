const withPWA = require('next-pwa');


module.exports = withPWA({
  images:{
    domains: ["https://finkarma.b-cdn.net/"],
  },
  eslint: {
    dirs: ['pages', 'utils'], // Only run ESLint on the 'pages' and 'utils' directories during production builds (next build)
  },
  pwa:{
    dest: "public",
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === 'development',
  }
});
