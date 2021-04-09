import Link from 'next/link';
import parse from 'html-react-parser';
import format from 'dateformat';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Button from 'react-bootstrap/Button';


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
     
    function parseHTML(props) {
        return parse(props);
    }

  return (
    <div>
        <div className="articleCard card text-center mx-3">
          <div className="card-header">
            <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">{article.title}</Tooltip>}>
              <span className="d-inline-block">
                <Button disabled style={{ pointerEvents: 'none' }} className="article-title capitalize" variant="primary">
                {article.title.length > 40 ? article.title.substring(0,40).concat("..."): article.title}
                </Button>
              </span>
            </OverlayTrigger>
          </div>     
        
          <div className="card-body">
            <div className="articleInfo">
            <span className="float-right capitalize">{article.authorFirstName}&nbsp;{article.authorLastName }</span><br></br>
            <span className="float-right">{format(article.dateUpdated, 'mmm dd, yyyy')}</span><br></br>
            <span className="float-right capitalize">{article.category}&nbsp;/{article.subcategory}</span><br></br>
          </div>
          <div>
            <span className="mt-3 text-left capitalize articleBody">{parseHTML(article.body.substring(0, 100).concat("..."))}</span>   
          </div>
          </div>

          <div className="card-footer">
            <Link className="btn-primary" href={{ pathname: '/edublog/article/', query: {pid: article.slugName }, }}><Button variant="primary">Read article</Button></Link>
          </div>
        </div>
      
  
        <style jsx global>{`
          .articleCard{
            margin: 1rem 0.5rem;
           height: 30rem;
           width: 20rem;
          }
 
          .card-body{
            height: 15rem;
          }
          .article-title{
            margin-bottom: 1rem; 
            font-size: 1.4rem;
          }
          .card-footer{
            margin: 1rem;
          }
          .articleInfo{
            font-size: 1rem;
            margin-bottom: 1rem;
          }
          .articleBody{
            font-size: 0.7rem;
          }
          
        `}</style>
  
      </div>
    )
}

export default ArticleCard