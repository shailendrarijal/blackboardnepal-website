import { useEffect, useState } from 'react';

import Carousel from '../components/Layout/Carousel';
import styles from '../styles/Home.module.css';
import SignUpModal from '../components/Modals/SignUpModal';
import { useAuth } from '.././utils/auth';
import Button from 'react-bootstrap/Button';

import Head from 'next/head';

export default function Index() {
  const auth = useAuth();
  const isLoggedIn = auth.userId? true: false;

  return <div className={styles.container}>
      
      <Head>
        <title>Blackboard Nepal| Supporting the Nepalese community</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Blackboard Nepal aims to enhance the access of Nepalese community to information focusing on traditions, food, places and communities of Nepal." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      
     <div className="jumbotron">
      <h1>Welcome to Blackboard Nepal!</h1>
       <p>Providing the services of NAATI CCL Nepali test resources, Nepali Vocabulary building resources, English Vocabulary building resources, Nepali Unit Converter app and educational blogs on different industries</p>
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
      <div className="jumbotron">
        <Carousel />
      </div>
      <hr></hr>
      <div className="jumbotron">
        <h4>What do we currently have?</h4>
        <ul>
          <li>Nepali NAATI CCL test app: We have created an app with test format, vocabulary and tips for the preparation of Nepali NAATI CCL test. We are working to add dialogs in the app and are in the process of adding more vocabulary and tips.</li>
          <li>Nepali Unit Converter app: We have created an app where you can convert different measurement units of land area, weight and volume from and to Englishh and Nepali. Area converter is fully functional, volume converter is partially functional and weight converter is coming soon!</li>
          <li>Nepali Words collection app: We have created an app with Nepali words equivalent of English words and Nepali pronunciation of those words. We aim to create a collection of assorted Nepali vocabulary which might be useful for anyone to learn Nepali. We will definitely add more words and categories to the collection.</li>
          <li>Essential English Words Collection app: We have created an app with essential english words for those people who want to prepare for their english language test or simply want to update their english vocabulary. The words are categorized according to the alphabets.</li>

      </ul>
      </div>
      <div className="jumbotron">
        <h6>We will be adding more and more stuffs! Make sure to stay around and follow our Facebook and LinkedIn pages</h6>
      </div>
    </div>
}