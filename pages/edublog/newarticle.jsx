import { useState } from 'react';
import AddArticle from '../../components/EduBlog/AddArticle';
import Head from 'next/head';

export default function NewArticle(props) {

  const dummy = useState({
    articleId:'',
  });
    return (
      <div>
        <Head>
            <title> New Article | Blackboard Nepal</title>
            <link rel="icon" href="/favicon.ico" />
            <meta name="description" content="Write an article, publish them or save as draft"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
        </Head>
        {props && (
          <AddArticle articleId={props} />
        )}
        {!props && (
          <AddArticle articleId={ dummy}/>
        )}
       
        <style jsx>{`
        `}</style>
  
      </div>
  
    )
  }

  