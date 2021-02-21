import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../../utils/auth';
import { useUser } from '../../utils/users';

import { useArticle } from '../../utils/articles';
import { Form, Button, Dropdown } from "react-bootstrap";
import slugify from 'react-slugify';

function AddArticle() {

  const auth = useAuth();
  const userContext = useUser();

  const userId = auth.userId;
  const articleContext = useArticle();

  const router = useRouter();
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [isContributor, setIsContributor] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  const [article, setArticle] = useState({
      body: '',
      dateCreated: '',
      dateUpdated: '',
      published: false,
      slugName: '',
      title: '',
      category: '',
      subcategory: '',
      image: [],
      userId: '',
      firstname: '',
      lastname: '',
  });

  useEffect(() => {
    if (!auth.userId) return;
    if (auth.userId) {
        setIsLoggedIn(true);
    }
  }, [auth]);

  useEffect(() => {
    if (!isLoggedIn) return;
    if (isLoggedIn && isContributor) return;
    const userData = userContext.getUserData();
      setIsContributor(userData.isContributor);
  }, [userContext]);
  
  
  useEffect(() => {
    if (categories.length !== 0) return;
    setCategories(articleContext.getAllCategories());
    }, [categories]);

  function addArticle(published) {
        // Add a new document with a generated id.
      if (article.body === '') {
        alert('Missing text');
        return;
      }
      if (article.title === '') {
        alert('Missing title');
        return;
      }

      if (article.category === '') {
        alert('Missing category');
        return;
      }
      if (article.subcategory === '') {
        alert('Missing subcategory');
        return;
      }

    articleContext.addArticle({
      body: article.body,
      dateCreated: new Date().toISOString(),
      dateUpdated: new Date().toISOString(),
      published: published,
      slugName: slugify(article.title),
      title: article.title,
      category: article.category,
      subcategory: article.subcategory,
      image: [],
      userId: userId,
    }, published);

      if (published === true) alert('Article published');
      else alert('Article Saved as draft');
      router.push('/edublog/myarticles');
  };    
  
  function onInputchange(e){
        const { target: { name, value } } = e
        setArticle({...article, [name]: value});
  };

  function onSelectCategory(props) {
    setArticle({ ...article, category: props.name });
    setSubCategories(props.subcategories);
  }

  return (
    <div>
      <div className="buttonContainer">
        <Button className="publishButtons" variant="success" onClick={()=>addArticle(true)}>Publish</Button>
        <span>&nbsp;&nbsp;</span>
        <Button className="publishButtons" variant="secondary" onClick={() => addArticle(false)}>Save as draft</Button>
        
      </div>
      <div className="dropdown">
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic" size="sm" className="capitalize">
            {article.category? article.category : "Select a Category"}
            </Dropdown.Toggle>
              <Dropdown.Menu>
                {
                  categories.map(category => {
                    return (
                      <Dropdown.Item key={category.id} onSelect={()=>onSelectCategory(category)} value={article.category}>{category.name}</Dropdown.Item>
                    )
                  })
                }
              </Dropdown.Menu>
          </Dropdown>
        </div>
            
        <div className="dropdown">
          <Dropdown >
          <Dropdown.Toggle variant="success" id="dropdown-basic" size="sm" className="capitalize">
            {article.subcategory? article.subcategory : "Select a sub category"}
             </Dropdown.Toggle>
              <Dropdown.Menu>
                {
                  subCategories.map(subcategory => {
                  return (
                    <Dropdown.Item key={subcategory} disabled={article.category === ''} onSelect={()=>setArticle({...article, subcategory: subcategory})} value={article.subcategory}>{subcategory}</Dropdown.Item>
                  )
                })
                }
            </Dropdown.Menu>
          </Dropdown>
      </div>
      
      <Form.Group controlId="title" className="title">
          <Form.Control size="lg" type="text" placeholder="Enter title" name="title" value={article.title} onChange={(e)=>onInputchange(e)} autoComplete="off" required/>
      </Form.Group>

        
    
       <Form.Group controlId="body">
          <Form.Control as="textarea" rows={15 } name="body" placeholder="Write your article" value={article.body} onChange={(e)=>onInputchange(e)} autoComplete="off" required/>
        </Form.Group>
 
      


      <style jsx global>{`
        .publishButtons{
          width: 10rem;
          float:right;
          margin: auto 2rem;
        }
        .buttonContainer{
          margin: 1rem auto 2rem auto;
        }
        .category{
          width: 15rem;
          float: right;
          margin: 1rem 0 1rem 1rem;
        }
        .dropdown{
          margin: 0 1rem 1rem 0;
          float: left;
        }
        {/* .title{
          width: 30rem;
        } */}
      `}</style>

    </div>

  )
}

export default AddArticle

