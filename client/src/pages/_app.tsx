import { useEffect } from 'react';
import { ThemeProvider } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/style.css';

import type { AppProps } from 'next/app';

const App = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    // Load Bootstrap JS dynamically
    const bootstrapScript = document.createElement('script');
    bootstrapScript.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js';
    bootstrapScript.async = true;
    document.body.appendChild(bootstrapScript);     




    return () => {
      document.body.removeChild(bootstrapScript);
    };  
  }, []);

  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
