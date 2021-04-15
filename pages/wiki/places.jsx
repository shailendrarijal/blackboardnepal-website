import { useState, useEffect } from "react";
// import ArticleCard from '../../components/EduBlog/ArticleCard';
import Head from 'next/head';
// import { useArticle } from '../../utils/articles';
import { useAuth } from '../../utils/auth';

// import Carousel from "react-bootstrap/Carousel";
// import { CarouselItem, Button } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

function Places() {

        const auth = useAuth();

    // const articleContext = useArticle();

    // const [articles, setArticles] = useState([]);
    // const [categories, setCategories] = useState([]);
        const [isLoggedIn, setIsLoggedIn] = useState(false);


    // useEffect(() => {
    //     if (categories.length !== 0) return;
    //     setCategories(articleContext.getAllCategories());
    // }, [articleContext]);
    
    // useEffect(() => {
    //   if (articles.length !== 0) return;
    //     setArticles(articleContext.getAllArticles());
    // }, [articleContext]);

    useEffect(() => {
        if (!auth.userId) return;
        if (auth.userId) {
            setIsLoggedIn(true);
        }
     }, [auth]);

    return (
        <div>
            <Head>
                <title>Browse Wiki | Blackboard Nepal</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name="description" content="Browse our collection of wiki"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
            </Head>
            <div className="jumbotron">
                <h1>Places</h1>
                <p>We will post about different places here</p>
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
                
            <h2>Coming Soon !!</h2>
            
          
           <style jsx>{`
        //    .article-display-container{
        //        list-style: none;
        //        display: grid;
        //    }
        //   .category-container{
        //       display: grid;
        //       overflow-x:scroll;
        //   }
        `}</style>
        </div>
    );
}

export default Places;