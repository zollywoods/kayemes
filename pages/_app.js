// import '../styles/globals.css'
// import { Analytics } from '@vercel/analytics/react'
// ;
// // import '../styles/luke.modules.css'

// function MyApp({ Component, pageProps }) {
//   <> 
//     return <Component {...pageProps} />
//     <Analytics/>
//   </>

// }

// export default MyApp

import '../styles/globals.css'
import { AppProps } from 'next/app';
import { Analytics } from '@vercel/analytics/react';
 
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}
 
export default MyApp;
