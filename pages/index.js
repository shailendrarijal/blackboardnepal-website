
import styles from '../styles/Home.module.css';
import { useAuth } from '.././utils/auth';
import Button from 'react-bootstrap/Button';
import services from '../lib/services';
import wikiList from '../lib/wikiList';
import appList from '../lib/appList';
import Image from 'react-bootstrap/Image';
import Head from 'next/head';
import CardForHomePage from '../components/CardForHomePage/CardForHomePage';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  homePagePaper: {
    margin: '20px auto',
    padding: '20px',
    width: '100%',
  },
  homePageCardContainer: {
    display: 'flex',
    columnGap: '20px',
  }
});

export default function Index() {
  const classes = useStyles();

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
       <p className="paragraphFont">Providing the services of NAATI CCL Nepali test resources, Nepali Vocabulary building resources, English Vocabulary building resources, Nepali Unit Converter app and educational blogs on different industries</p>
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
          
      <Paper elevation={3} className={classes.homePagePaper}>
          <h2>What do we currently have?</h2>
          <div className={classes.homePageCardContainer}>
          {services.map(service => {
            return (
              <CardForHomePage 
                key={service.id}
                name={service.name}
                description={service.description}
                link={service.link}
              />
            )
          })}
          </div>
        </Paper>

        <Paper elevation={3} className={classes.homePagePaper}>
          <h2>Inside Wiki</h2>
          <div className={classes.homePageCardContainer}>
          {wikiList.map(wiki => {
            return (
              <CardForHomePage 
                key={wiki.id}
                name={wiki.name}
                description={wiki.description}
                link={wiki.link}
              />
            )
          })}
          </div>
        </Paper>

      <Paper elevation={3} className={classes.homePagePaper}>
          <h2>Our Free Apps</h2>
          <div className={classes.homePageCardContainer}>
          {appList.map(app => {
            return (
              <CardForHomePage 
                key={app.id}
                name={app.name}
                description={app.description}
                link={app.link}
              />
            )
          })}
          </div>
        </Paper>

      <div className="jumbotron">
        <h3>We will be adding more and more stuffs! Make sure to stay around and follow our Facebook and LinkedIn pages</h3>
        <div>
        <Button href="https://www.facebook.com/blackboardnepal" className="m-1 facebook social-media-buttons rounded-circle text-center">f</Button>
          <Button href="https://www.linkedin.com/company/blackboard-nepal" className="m-1 linkedIn social-media-buttons rounded-circle text-center">in</Button>
        </div>
      </div>

      <style jsx>{`
        .btn-service{
          width: 10rem;
          height: 10rem;
          border-radius: 100%;
          font-size: 1.5rem;
          font-weight: 800;
          color: white;
          background-color: #0F52BA;
          margin-bottom: 1rem;
        }
        .home-page-paper{
          margin: auto;
          padding: 20px;
          
        }
        .home-page-card-container{
          display: flex;
          column-gap: 20px;
        }
      `}</style>
  </div>

}