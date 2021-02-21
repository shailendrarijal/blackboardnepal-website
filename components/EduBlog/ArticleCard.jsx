import Link from 'next/link';

function ArticleCard({ ...articleData }) {
  const data = articleData.data;
  
  const article = {
    body: data.body,
    dateCreated: data.dateCreated,
    dateUpdated: data.dateUpdated,
    published: data.published,
    slugName: data.slugName,
    title: data.title,
    category: data.category,
    subcategory: data.subcategory,
    image: [],
    userId: data.userId,
    authorFirstName: data.firstName,
    authorLastName: data.lastName,
  }

  function getDate(props) {
    const date = new Date(props).getUTCDate();
    const month = new Date(props).getUTCMonth();
    const year = new Date(props).getUTCFullYear();
    return `${date}/${month}/${year}`
  }

  return (
    <div>
        <div className="articleCard card text-center mx-3">
          <div className="card-header">
            <h4 className="article-title capitalize">{article.title}</h4>
          </div>     
        
          <div className="card-body">
            <span className="float-right capitalize">{article.authorFirstName}&nbsp;{article.authorLastName }</span><br></br>
            <span className="float-right">{getDate(article.dateUpdated)}</span><br></br>
            <span className="float-right capitalize">{article.category}&nbsp;/{article.subcategory}</span><br></br>
            <p className="mt-3 text-left capitalize">{article.body.substring(0, 100)}</p>   
          </div>

          <div className="card-footer">
            <Link className=" btn-primary" href={{ pathname: '/edublog/article/', query: {pid: article.slugName }, }}>Read article</Link>

          </div>
        </div>
      
  
        <style jsx global>{`
          .articleCard{
            margin: 3rem;
           min-height: 300px;
           min-width: 200px;
          
          }
          .card-header{
            height: 5rem; 
          }
          .card-body{
            height: 15rem;
          }
          .article-title{
             height: 2rem;
             margin-bottom: 1rem; 
          }
          .card-footer{
            margin: 1rem;
          }

          
        `}</style>
  
      </div>
    )
}

export default ArticleCard