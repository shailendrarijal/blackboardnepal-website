import { useEffect, useState } from 'react';
import Head from 'next/head';
import { useAuth } from '.././utils/auth';
import { Button } from 'react-bootstrap';
import ArticleCard from '.././components/EduBlog/ArticleCard';

import { useArticle } from '.././utils/articles';

function Home() {

  const auth = useAuth();
      const articleContext = useArticle();

  const isLoggedIn = auth.userId ? true : false;
  
  const [articles, setArticles] = useState([]);

   useEffect(() => {
        setArticles(articleContext.getAllArticles());
  }, [articleContext]);

      if (!isLoggedIn) return null;
    return (
      <div>
        <Head>
          <title>Home | Blackboard Nepal</title>
          <link rel="icon" href="/favicon.ico" />
          <meta name="description" content="Blackboard Nepal is committed to increasing access of Nepalese public to information"/>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
        </Head>
        <div className="jumbotron">
          <h1>Namaste,</h1>
          <p>Go to your profile to add your information so that you can interact with other users</p>
          <Button href="/profile">Profile</Button>
        </div>
        <div className="jumbotron">
          <h2>Top Articles</h2>
            <ul className="row">
              {articles.slice(0,5).map((article) => {
                  return (
                          <li key={article.id} className="article-display-container col-lg-4 col-md-6 col-sm-12">
                              <ArticleCard
                                  
                                  data={article} 
                                  dateCreated={article.dateCreated}
                                  dateUpdated={article.dateUpdated}
                                  />
                          </li>
                      ) 
                  })}
              </ul>
        </div>
         
  
        <style jsx>{`
           .article-display-container{
             list-style: none;
           }
        `}</style>
  
      </div>
  
    )
  }
  
export default Home; 