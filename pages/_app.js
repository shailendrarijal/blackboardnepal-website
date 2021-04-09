import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css'

import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { ProvideAuth } from '.././utils/auth';
import { ProvideUser } from '../utils/users';

import Navbars from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';

import Button from 'react-bootstrap/Button';

import * as gtag from '../lib/gtag';
import { ProvideArticle } from '../utils/articles';

function App({ Component, pageProps }) {
//need to add the auth check logic in this file so that it checks if user is logged in or not on every page; 
  // first need to check if the user is logged in, only then, if user is logged in and is not verified, then send them to the page to verify their email
  // it is fine if they are not logged in - without being logged in, they are not able to view the blogs, profile or home page anyway... But if somebody is logged in, they have to be verified.
  const router = useRouter();

  useEffect(() => {
    if (process.env.NODE_ENV === 'development') return;
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events]); 

  return <div>
    <ProvideAuth session={pageProps.session}>
      <ProvideUser>
        <ProvideArticle>
      <Navbars />
    
      <section className="col-lg-8 col-md-8 col-sm-12 mt-3">
        <Component {...pageProps} />
      </section>
      <aside className="col-lg-3 col-md-3 col-sm-12 mt-2">
        <h6>Our Social Media pages</h6>
          <Button href="https://www.facebook.com/blackboardnepal" className="m-1 facebook social-media-buttons rounded-circle text-center">f</Button>
          <Button href="https://www.linkedin.com/company/blackboard-nepal" className="m-1 linkedIn social-media-buttons rounded-circle text-center">in</Button>
        <hr></hr>  
        <h6>Our Apps</h6>
        <Button href="/naati" variant="outline-info" className="btn-md button-transparent asideButton button my-1">Nepali NAATI CCL</Button>
        <Button href="/calculator" variant="outline-info" className="btn-md button-transparent asideButton button my-1">Nepali Unit Converter</Button>
        <Button href="/nepaliwords" variant="outline-info" className="btn-md button-transparent asideButton button my-1">Nepali Words</Button>
        <Button href="/englishwords" variant="outline-info" className="btn-md button-transparent asideButton button my-1">English Words</Button>
      </aside>
          <Footer />
          </ProvideArticle>
        </ProvideUser>
      </ProvideAuth>
      
      <style jsx>{`
        
      `}</style>
    </div>
}

export default App