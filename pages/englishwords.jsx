import { useState, useEffect } from 'react';
import EnglishWordsApp from '../components/EnglishWords/EnglishWordsApp';
import EnglishWordsForm from '../components/EnglishWords/EnglishWordsForm';
import { useAuth } from '../utils/auth';
import Firebase from 'firebase';

import Button from 'react-bootstrap/Button';
import Head from 'next/head';

export default function EnglishWords() {

 const auth = useAuth();

  const userId = auth.userId;
  const isLoggedIn = auth.userId ? true : false;
  const [role, setRole] = useState('');

  function getRole() {
    Firebase.firestore().collection('users').where('userId', '==', userId).get().then(
         function(querySnapshot) {
          querySnapshot.forEach(function(doc) {
            setRole(doc.data().role)
          });
          }
    );
  };

  useEffect(() => {
    if (!isLoggedIn) return;
    getRole();
  }, [isLoggedIn]);

  return(
      <div>
        <Head>
          <title>Learn English Words | Blackboard Nepal</title>
          <link rel="icon" href="/favicon.ico" />
          <meta name="description" content="Learn essential words and increase your vocabulary for english tests"/>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
        </Head>
        <div className="jumbotron">
          <h1>Learn Essential English Words</h1>
          <p>Build your English vocabulary by using our app for essential english words. Prepare for english language tests such as TOEFL, IELTS, PTE or for SAT and GRE by using our extensive collection of essential english words</p>
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
        <div>        
            <EnglishWordsApp />
        </div>
        
       {role && role !== '' && role === 'contributor' && (<EnglishWordsForm />)}  
       
        <style jsx>{`
        `}</style>
  
      </div>
  
    )
  }

  