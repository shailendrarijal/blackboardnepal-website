import { useState, useEffect } from "react";
import ArticleCard from '../../components/EduBlog/ArticleCard';
import Head from 'next/head';
import { useArticle } from '../../utils/articles';

function BrowseArticles() {

    const articleContext = useArticle();

    const [articles, setArticles] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        if (categories.length !== 0) return;
        setCategories(articleContext.getAllCategories());
    }, [categories]);
    
    useEffect(() => {
      if (articles.length !== 0) return;
        setArticles(articleContext.getAllArticles());
  }, [articles]);

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
           </div>
                
            {categories.map((category) => {
                   return (
                            <li key={category.id} className="article-display-container">
                                <div className="category-container">
                                    <h2 className="capitalize">{category.name}</h2>
                                    <ul className="row">
                                   {articles.map((article) => {
                                       if (article.category === category.name) {
                                           if (!article) setEmptyCategory(true);
                                                return (
                                                <li key={article.id} className="article-display-container col-lg-4 col-md-6 col-sm-12">
                                                    <ArticleCard
                                                        data={{ ...article }} 
                                                        />
                                                </li>
                                            )
                                            }
                                            
                                        })}
                                    </ul>
                                </div>
                            </li>
                        )
               })}
            
          
           <style jsx>{`
           .article-display-container{
               list-style: none;
               display: grid;
           }
          .category-container{
              min-height: 400px;
              display: grid;
          }
        `}</style>
        </div>
    );
}

export default BrowseArticles;