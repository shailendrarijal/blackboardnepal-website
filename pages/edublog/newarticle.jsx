import { useState } from 'react';
import AddArticle from '../../components/EduBlog/AddArticle';
import Head from 'next/head';

export default function NewArticle() {

    return (
      <div>
        <Head>
            <title> New Article | Blackboard Nepal</title>
            <link rel="icon" href="/favicon.ico" />
            <meta name="description" content="Write an article, publish them or save as draft"/>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charset="utf-8" />
        </Head>
        <AddArticle />
       
        <style jsx>{`
        `}</style>
  
      </div>
  
    )
  }

  