import Head from 'next/head';
export default function About() {

    return (
      <div>
        <Head>
          <title>About | Blackboard Nepal</title>
          <link rel="icon" href="/favicon.ico" />
          <meta name="description" content="Blackboard Nepal is committed to increasing access of information to public"/>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
        </Head>
        <div className="jumbotron">
          <h3>About Us</h3>
          <div>
            <p>Blackboard Nepal was created with the vision of enhancing access to information among Nepalese community. We want to contribute to the society by increasing the access of information to Nepalese public. Currently, we have information for NAATI test, which is a crucial test for Nepalese living in Australia and are approaching for Permanent Residency. Slowly, we will expand our services and provide more and more information regarding various places, food and culture and different traditions of Nepal. Keep supporting us!</p>
          </div>
        </div>         
  
        <style jsx>{`
           .jumbotron{
               box-shadow: 0.5rem 0.5rem #ccc;
               margin: 1rem 0.5rem 2rem;
               padding: 2rem 1rem;
           }
           h1{
               color: teal;
           }
        `}</style>
  
      </div>
  
    )
  }
  