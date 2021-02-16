import React, { useState, useEffect, useContext, createContext } from 'react';
import 'firebase/auth';
import Firebase from 'firebase'
import { useAuth } from './auth';
import { useUser } from './users';
import slugify from 'react-slugify';


const articleContext = createContext();

export function ProvideArticle({ children }) {
    const article = useProvideArticle();
    return <articleContext.Provider value={article}>{children}</articleContext.Provider>
}

export const useArticle = () => {
    return useContext(articleContext);
}

function useProvideArticle() {

    const auth = useAuth();
    const user = useUser();

    const userId = auth.userId;

    const [categoryList, setCategoryList] = useState([]);
    const [articleList, setArticleList] = useState([]);
    const [myArticleList, setMyArticleList] = useState([]);
    const [authorInfo, setAuthorInfo] = useState({
        username: '',
        country: '',
        firstName: '',
        lastName: '',
        jobTitle: '',
        workPlace: '',
        email: '',
    });

    useEffect(() => {
        if (!auth.userId) return;
        getMyArticles();
    }, [auth])

     useEffect(() => {
        if (authorInfo.firstName !== '') return;
        const userData = user.getUserData();
        setAuthorInfo(userData.profileInfo);
     }, [user]);
    
    

    const getAllArticles = () => {
        Firebase.firestore().collection("articles").onSnapshot((snapshot)=> {
          const articles = snapshot.docs.map((doc) => ({
            id: doc.id,
              ...doc.data()
            
          }))
            setArticleList(articles);
        });
        return articleList;
    }

    const getAllCategories = () => {
        Firebase.firestore().collection("article-categories").onSnapshot((snapshot)=> {
          const categories = snapshot.docs.map((doc) => ({
            id: doc.id,
              ...doc.data()
          }))
            setCategoryList(categories);
        });
        return categoryList;

    }

    const getArticle = (docId) => {
        Firebase.firestore().collection('articles').doc(docId).get().then(
            function (snapshot) {
                const article = {
                    body: snapshot.data().body,
                    dateCreated: snapshot.data().dateCreated,
                    dateUpdated: snapshot.data().dateUpdated,
                    published: snapshot.data().published,
                    slugName: snapshot.data().slugName,
                    title: snapshot.data().title,
                    category: snapshot.data().category,
                    subCategory: snapshot.data().subcategory,
                    image: [],
                    userId: snapshot.data().userId,
                    firstname: snapshot.data().firstName,
                    lastname: snapshot.data().lastName,
                }
                return article;
            }).catch(err => {return err});
    }

    const addArticle = (article, published) => {
        Firebase.firestore().collection("articles").add({
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
            firstName: authorInfo.firstName,
            lastName: authorInfo.lastName,
        });
    }

    const editArticle = (article, published, docId) => {
        Firebase.firestore().collection("articles").doc(docId).update({
          body: article.body,
          dateCreated: article.dateCreated,
          dateUpdated: new Date().toISOString(),
          published: published,
          slugName: slugify(article.title),
          title: article.title,
          category: article.category,
          subcategory: article.subcategory,
          image: [],
            userId: userId,
            firstName: authorInfo.firstName,
            lastName: authorInfo.lastName,
        });
    }

    const deleteArticle = (docId) => {
        Firebase.firestore().collection('articles').doc(docId).delete().then(() => {
            alert('Article Deleted');
        }
        );
    }

    const getMyArticles = () => {
        Firebase.firestore().collection("articles").where('userId', '==', userId).onSnapshot((snapshot)=> {
          const articles = snapshot.docs.map((doc) => ({
            id: doc.id,
              ...doc.data()
            
          }))
            setMyArticleList(articles);
        });
        return myArticleList;
    }

    return {
        getAllArticles,
        getAllCategories,
        getArticle,
        addArticle,
        editArticle,
        getMyArticles,
        deleteArticle,
    };
}
