
import styles from '../styles/Home.module.css';
import { useAuth } from '.././utils/auth';
import Button from 'react-bootstrap/Button';
import services from '../lib/services';
import wikiList from '../lib/wikiList';
import appList from '../lib/appList';
import Image from 'react-bootstrap/Image';
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
      <div className="jumbotron">
        <h2>What do we currently have?</h2><br></br>
        <div className="row">
        {services.map(service => {
          return <div key={service.id} className="col-lg-4 col-md-6 col-sm-12 text-center">
              <Image src={service.imgUrl} /><br></br>
              <a href={service.link}><button className="btn-service">{service.name}</button></a>
              <h5>{service.description}</h5>
            </div>
        })}
        </div>
      </div>
      <hr></hr>
     
      <div className="jumbotron">
        <h2>Inside Wiki</h2><br></br>
        <div className="row">
        {wikiList.map(wiki => {
          return <div key={wiki.id} className="col-lg-4 col-md-6 col-sm-12 text-center">
              <Image src={wiki.imgUrl} /><br></br>
              <a href={wiki.link}><button className="btn-service">{wiki.name}</button></a>
              <h5>{wiki.description}</h5>
            </div>
        })}
        </div>
      </div>
      <div className="jumbotron">
        <h2>Our Free Apps</h2><br></br>
        <div className="row">
        {appList.map(app => {
          return <div key={app.id} className="col-lg-4 col-md-6 col-sm-12 text-center">
              <Image src={app.imgUrl} /><br></br>
              <a href={app.link}><button className="btn-service">{app.name}</button></a>
              <h5>{app.description}</h5>
            </div>
        })}
        </div>
      </div>

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
      `}</style>
  </div>

}