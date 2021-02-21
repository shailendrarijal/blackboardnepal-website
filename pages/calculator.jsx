import Head from 'next/head';
import { useState, useEffect } from 'react';
import { useAuth } from '.././utils/auth';
import SignUpModal from '../components/Modals/SignUpModal';

import AreaCalculator from '../components/Calculator/AreaCalculator';
import VolumeCalculator from '../components/Calculator/VolumeCalculator';
import WeightCalculator from '../components/Calculator/WeightCalculator';

import Button from 'react-bootstrap/Button';


export default function Calculator() {

    const auth = useAuth();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        if (!auth.userId) return;
        if (auth.userId) {
            setIsLoggedIn(true);
        }
      }, [auth]);  

  const [calculatorType, setCalculatorType] = useState("");

  function setCalculator(props) {
    setCalculatorType(props);
    
  };

  function showCalculator() {
      if (calculatorType === "WeightCalculator") {
        return <WeightCalculator />
      } else if (calculatorType === "VolumeCalculator") {
        return <VolumeCalculator />
      } else {
        return <AreaCalculator />
      }
    }

    return (
      <div>
        <Head>
          <title>Unit converter | Blackboard Nepal</title>
          <link rel="icon" href="/favicon.ico" />
          <meta name="description" content="Unit converters to convert Nepalese traditional units of measurement to english units of measurement for land and volume"/>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
        </Head>
        
         <div className="jumbotron">
            <h1>Nepali Units Converter</h1>
            <p>Use our simple to use online converter tool to convert units from Nepali measurement system to English measurement system. Select land area or volume, enter the value and hit the button to convert to Nepali units or to english units</p>
          <button className="btn-primary button-sm mx-auto rounded" onClick={() => setCalculator("AreaCalculator")}>Land Area</button>
          <span>&nbsp;</span>
          <button className="btn-primary button-sm mx-auto rounded" onClick={() => setCalculator("VolumeCalculator")}>Volume</button>
          {/* <button className="btn-primary button-sm mx-auto" onClick={() => setCalculator("WeightCalculator")}>Weight</button> */}  
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
        <div  className="jumbotron">
          {showCalculator()}
          <div>
            <p>Before the inroduction of English measurement systems, Nepal had its own measurement system. Some of them such as ropani and aana in land measurement are still widely used while some have integrated with english measurement system like pau and dhaarni with kilo. Here, we aim to develop a tool to convert those units of measurement to English. As of now, the units of land area and volume is present in our website          </p>
          </div>

        </div>
         
  
        <style jsx>{`
          .english-unit-button-container{
            width: 100%;
            padding: 1rem;
          }
          .nepali-unit-button-container{
            width: 30%;
            float: left;
            padding: 1rem;
          }
          .calculator-container{
            width: 30%;
            float: left;
          }

        `}</style>
  
      </div>
  
    )
  }
  