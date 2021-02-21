import { useState, useEffect } from 'react';
import NepaliWordsApp from '../components/NepaliWordsApp';
import NepaliWordForm from '../components/NepaliWordForm';
import Button from 'react-bootstrap/Button';

import { useAuth } from '.././utils/auth';
import { useUser } from '.././utils/users';

import Head from 'next/head';

export default function NepaliWords() {
  const auth = useAuth();
  const user = useUser();
  const userId = auth.userId;
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isContributor, setIsContributor] = useState(false);

   useEffect(() => {
        if (!auth.userId) return;
        if (auth.userId) {
            setIsLoggedIn(true);
        }
      }, [auth]);

  useEffect(() => {
    if (!auth.userId) return;
    const userData = user.getUserData();
    userData.isContributor && setIsContributor(true);
  }, [user]);

  
    return (
      <div>
        <Head>
          <title>Learn Nepali Words | Blackboard Nepal</title>
          <link rel="icon" href="/favicon.ico" />
          <meta name="description" content="Learn Nepali words and how to pronunce them"/>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
        </Head>
          <div className="jumbotron">
            <h1>Build your nepali vocabulary</h1>
            <p>Use our Nepali words app to increase your vocabulary of Nepali words and their English equivalent words. Learn the words from different categories of words</p>
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
            <NepaliWordsApp />
        </div>
        {isContributor && (<NepaliWordForm />)}       
       
        <style jsx>{`
        `}</style>
  
      </div>
  
    )
  }

  