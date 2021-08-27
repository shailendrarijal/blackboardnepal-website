// import ArticleTemplate from '../../components/EduBlog/ArticleTemplate';
// import { useRouter } from 'next/router';
// import { useState, useEffect } from 'react';
// import firebase from 'firebase';

// const Article = () => {
//   const router = useRouter()
//   const { pid } = router.query
//   const [article, setArticle] = useState({});

//   useEffect(() => {
//     if (pid === '' || pid === undefined) return;
//     firebase.firestore().collection('articles').where('slugName', '==', pid).get().then(
//       function (snapshot) {
//               const art = snapshot.docs.map((doc) => ({
//                 id: doc.id,
//                 ...doc.data()
              
//               }))
//         setArticle(...art);
//             }
//         );
//   }, [router])

//   return <ArticleTemplate data = {article}/>
// }

// export default Article

const WikiArticle = () => {

  return <h2>Wiki Coming Soon !!!</h2>
}

export default WikiArticle