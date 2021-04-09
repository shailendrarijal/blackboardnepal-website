import { useState, useEffect } from "react";
import ArticleCard from '../../components/EduBlog/ArticleCard';
import Head from 'next/head';
import { useArticle } from '../../utils/articles';
import { useAuth } from '../../utils/auth';

import Carousel from "react-bootstrap/Carousel";
import { CarouselItem, Button } from 'react-bootstrap';

function BrowseArticles() {

        const auth = useAuth();

    const articleContext = useArticle();

    const [articles, setArticles] = useState([]);
    const [categories, setCategories] = useState([]);
        const [isLoggedIn, setIsLoggedIn] = useState(false);


    useEffect(() => {
        if (categories.length !== 0) return;
        setCategories(articleContext.getAllCategories());
    }, [articleContext]);
    
    useEffect(() => {
      if (articles.length !== 0) return;
        setArticles(articleContext.getAllArticles());
    }, [articleContext]);

    useEffect(() => {
        if (!auth.userId) return;
        if (auth.userId) {
            setIsLoggedIn(true);
        }
     }, [auth]);

    return (
        <div>
            <Head>
                <title>Browse Articles | Blackboard Nepal</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name="description" content="Browse our collection of articles categorized under different sections"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
            </Head>
            <div className="jumbotron">
                <h1>EduBlog</h1>
                <p>We have educational blogs based on various categories such as tech, health, science, management, hospitality or history</p>
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
                
            {categories.map((category) => {
                   return (
                       <li key={category.id} className="article-display-container jumbotron">
                                <h2 className="capitalize">{category.name}</h2>
                               
                           <Carousel data-interval={1000} wrap={true}>
                                   {articles.map((article) => {
                                       if (article.category === category.name) {
                                           if (!article) setEmptyCategory(true);
                                                return (
                                                <CarouselItem key={article.id}>
                                                    <ArticleCard
                                                        data={{ ...article }} 
                                                        />
                                                </CarouselItem>
                                            )
                                            }
                                            
                                        })}
                                    </Carousel>
                               
                            </li>
                        )
               })}
            
          
           <style jsx>{`
           .article-display-container{
               list-style: none;
               display: grid;
           }
          .category-container{
              display: grid;
              overflow-x:scroll;
          }
        `}</style>
        </div>
    );
}

export default BrowseArticles;