import { useState, useEffect } from 'react';
import Head from 'next/head';
import NaatiApp from '../components/NaatiAll/NaatiApp';
import { useAuth } from '.././utils/auth';
import SignUpModal from '../components/Modals/SignUpModal';
import Button from 'react-bootstrap/Button';

export function Naati() {

    const auth = useAuth();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    
    const [displayBox, setDisplayBoxes] = useState(true);
    function changeDisplay() {
        setDisplayBoxes(!displayBox);
    }
    
     useEffect(() => {
        if (!auth.userId) return;
        if (auth.userId) {
            setIsLoggedIn(true);
        }
     }, [auth]);
    
    return (
        <div>
            <Head>
                <title>Naati CCL Nepali | Blackboard Nepal</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name="description" content="Free NAATI CCL Nepali test resources"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
            </Head>
        <div>
            
            {displayBox? 
                    <div>
                        <div className="jumbotron">
                            <h1>Get ready for your Naati CCL Nepali Test</h1>
                            <p>Use our free NAATI CCL Nepali test resources to practice for your upcoming NAATI CCL Nepali test. Go to our NAATI app to get section-wise information for format, vocabulary, and tips for your NAATI CCL Nepali test.</p> 
                            <button className="btn-lg btn-primary button mx-auto align-center" onClick={changeDisplay}>NAATI app</button>
                            {isLoggedIn ? 
                                <div className="float-right">
                                <Button href={'/profile'}>Profile</Button>
                                </div>
                                :
                                <div className="float-right">
                                <Button href={'/signup'} variant="success">
                                    Sign Up
                                </Button>
                                <span>&nbsp;&nbsp;</span>
                                    <Button href={'/signin'} variant="secondary">
                                    Sign In
                                </Button>
                                </div>
                            }
                        </div>
                    <div className="row">
                        <div className="card testFormat col-lg-3 col-md-5 col-sm-12">
                            <h4 className="card-header">Test Format</h4>
                            <div className="card-body">Learn about the test format, marking structure, pass marks, and test environment</div>
                            
                        </div>
                        <div className="card vocabulary col-lg-3 col-md-5 col-sm-12">
                        <h4 className="card-header">Vocabulary</h4>
                            <div className="card-body">Build your vocabulary with our vocabulary app and get ready for the test</div>
                        
                        </div>
                        <div className="card tips col-lg-3 col-md-5 col-sm-12">
                        <h4 className="card-header">Tips</h4>
                            <div className="card-body">Have a look at some of the tips that will help you prepare and give your best in your test</div>
                        
                        </div>
                    </div>
                </div>
                :
                <NaatiApp />
            }
          
            
        </div>
       
            
  
  
        <style jsx>{`
            .card{
                margin: 3rem auto;
            }

          .button{
              padding: 0.5rem;
              box-shadow: 0.1rem 0.1rem #ccc;
              border-radius: 10px;
          }
          
        `}</style>
  
      </div>
  
    )
}
  
export default Naati;

  