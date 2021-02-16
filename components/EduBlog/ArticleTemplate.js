function ArticleTemplate(props) {  
  const article = {
    body: props.data.body,
    dateCreated: props.data.dateCreated,
    dateUpdated: props.data.dateUpdated,
    published: props.data.published,
    slugName: props.data.slugName,
    title: props.data.title,
    category: props.data.category,
    subcategory: props.data.subcategory,
    image: [],
    userId: props.data.userId,
    firstname: props.data.firstname,
    lastname: props.data.lastname,
  };

  function getDate(props) {
    const date = new Date(props).getUTCDate();
    const month = new Date(props).getUTCMonth();
    const year = new Date(props).getUTCFullYear();

    return `${date}/${month}/${year}`
  }

  return (
    <div>
      
          <div className="container-fluid">
              <div className="article-introduction-container jumbotron">
                <h1 className="text-center">{article.title}</h1>
                  <div className="text-right">
                    <span>{getDate(article.dateUpdated)}</span><br></br>
                    <span className="capitalize">{article.firstname}&nbsp;{article.lastname }</span><br></br>
                    <span>{ }</span>
                    <span className="capitalize">Category: {article.category}, {article.subcategory}</span>
                  </div>
              </div>
              <div className="article-container">
                  <p>{ article.body}</p>
              </div>
          </div>
      
  
        <style jsx global>{`
        `}</style>
  
      </div>
    )
}

export default ArticleTemplate;