import { useState, useEffect } from "react";

import { useAuth } from '../../utils/auth';
import { useUser } from '../../utils/users';
import { useArticle } from '../../utils/articles';
import { useRouter } from 'next/router';

import Table from 'react-bootstrap/Table';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab'
import Button from 'react-bootstrap/Button';

import Head from 'next/head';
import EditArticle from "../../components/EduBlog/EditArticle";

function MyArticles() {

 
     const auth = useAuth();
    const userId = auth.userId;
      const userContext = useUser();

    const articleContext = useArticle();

      const router = useRouter()
    const [renderArticle, setRenderArticle] = useState(false);
    const [selectedArticle, setSelectedArticle] = useState({});
    const [isLoggedIn, setIsLoggedIn] = useState(false);
      const [isContributor, setIsContributor] = useState(false);


    const [articles, setArticles] = useState([]);

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
        if (articles.length !== 0) return;
        setArticles(articleContext.getMyArticles());
    }, [articles]);

    const renderEditArticle = (props) => {
        setRenderArticle(true);
        setSelectedArticle(props);
    }

    const deleteArticle = (props) => {
        articleContext.deleteArticle(props);
        getMyArticles();
    }

    return (
        <div>
            <Head>
                <title>My Articles | Blackboard Nepal</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name="description" content="Manage your articles"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
            </Head>
            {renderArticle && (
                <EditArticle article={{...selectedArticle}} />
            )}
            {!renderArticle && (
                <div>
                    <div className="jumbotron">
                            <h1>My Articles</h1>
                            <p>Select any of your articles, complete them and publish them</p>
                    </div>

                        <Tabs defaultActiveKey="Draft" id="uncontrolled-tab-example">
                            <Tab eventKey="Draft" title="Draft">
                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th className="table-header-title">Title</th>
                                            <th className="table-header-article">Article</th>
                                            <th className="table-header-created">Created On:</th>
                                            <th className="table-header-updated">Last Edited:</th>
                                            <th className="table-header-button"></th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        {articles.length > 0 && articles.filter(article=> article.published === false).map((article) => {
                                                return (
                                                    <tr key={article.id}>
                                                        <td className="table-header-title">{article.title}</td>
                                                        <td className="table-header-article">{article.body.substring(50)}</td>
                                                        <td className="table-header-created">{article.dateCreated}</td>
                                                        <td className="table-header-updated">{article.dateUpdated}</td>
                                                        <td className="table-header-button">
                                                            <Button variant="outline-success" block onClick={() => renderEditArticle(article)}>Edit</Button>
                                                            <Button variant="outline-danger" block onClick={() => deleteArticle(article.id)}>Delete</Button>
                                                        </td>
                                                        
                                                    </tr>
                                                )
                                            })}
                                    </tbody>
                                </Table>
                            </Tab>
                            <Tab eventKey="Published" title="Published">
                            <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th className="table-header-title">Title</th>
                                            <th className="table-header-article">Article</th>
                                            <th className="table-header-created">Created On:</th>
                                            <th className="table-header-updated">Last Edited:</th>
                                            <th className="table-header-button"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {articles.length > 0 && articles.filter(article=> article.published === true).map((article) => {
                                                return (
                                                    <tr key={article.id}>
                                                        <td className="table-header-title">{article.title}</td>
                                                        <td className="table-header-article">{article.body.substring(50)}</td>
                                                        <td className="table-header-created">{article.dateCreated}</td>
                                                        <td className="table-header-updated">{article.dateUpdated}</td>
                                                        <td className="table-header-button">
                                                            <Button variant="outline-danger" block onClick={() => deleteArticle(article.id)}>Delete</Button>
                                                        </td>
                                                    </tr>
                                                )
                                            })}
                                    </tbody>
                                </Table>
                            </Tab>
                        </Tabs>
                </div>
            )}


            

           <style jsx>{`
           .table-header-title{
               width: 15rem;
           }
           .table-header-article{
               width: 30rem;
           }
           .table-header-created{
               width: 15rem;
           }
           .table-header-updated{
               width: 15rem;
           }
          .table-header-button{
               width: 10rem;
           }
        `}</style>
        </div>
    );
}

export default MyArticles;