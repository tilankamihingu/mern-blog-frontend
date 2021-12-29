import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Articles = ({posts}) => {
    const[article, setArticle] = useState([])
    //DELETE ARTICLE BY ID
    const deleteArticle = id =>{
        axios.delete(`/articles/${id}`)
            .then(res => alert(res.data))
            setArticle(article.filter(elem => elem._id !== id));
    }
    return (
        <MainContainer>
            {posts.map((article, key) => (
                <div className="container" style={{boxShadow: "3px 5px 3px 0px #dee1ec", padding: "10px", marginBottom:"10px"}} key={key}>
                    <Link to={{
                        pathname: `/article/${article._id}`
                    }}>
                        <h2>{article.title}</h2>
                    </Link>
                    <p>{article.article}</p>
                    <span className="badge bg-secondary p-2">{article.authorname}</span>
                    <div className="container d-flex align-center justify-content-between my-5">
                        <div>
                            <Link to ={{pathname: `/article/${article._id}`}} className="btn btn-outline-info btn-sm">
                                Read Article
                            </Link>
                        </div>
                        <div>
                            <Link to={`update/${article._id}`}  className="btn btn-outline-success btn-sm">Edit Articles</Link>
                        </div>
                        <div >
                            <button onClick={() => deleteArticle(article._id)} className="btn btn-outline-danger btn-sm">Delete Articles</button>
                        </div>
                    </div>
                </div>
            ))}
        </MainContainer>
    )
}

export default Articles;

//MAIN CONTAINER
const MainContainer = styled.div`
    margin-top: 20px;

    a{
        text-decoration: none;
        color: #0e153a;
    }
`;
