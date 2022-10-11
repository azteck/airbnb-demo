import '../styles/globals.css';
import '../styles/styles.css';

import 'antd/dist/antd.css';
import ProgressBar from '@badrap/bar-of-progress';
import { Router } from 'next/router';

/* ************************ PROGRESS BAR ************************
Show page load progress as a straight line moving across the top */

const progress = new ProgressBar({
  size: 4,
  color: '#FE595E',
  className: 'z-50',
  delay: 100,
});

Router.events.on('routeChangeStart', progress.start);
Router.events.on('routeChangeComplete', progress.finish);
Router.events.on('routeChangeError', progress.finish);

// ********************* END PROGRESS BAR ***********************

// Default function which loads Home Page from pages/index.js

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
