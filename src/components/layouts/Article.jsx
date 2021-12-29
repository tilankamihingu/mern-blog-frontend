import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Article = (props) => {
    const[title, setTitle] = useState('')
    const[article, setArticle] = useState('')
    const[authorname, setAuthorname] = useState('')

    useEffect(() =>{
        axios.get(`/articles/${props.match.params.id}`)
            .then(res => [
                setTitle(res.data.title),
                setArticle(res.data.article),
                setAuthorname(res.data.authorname)
            ])
            .catch(error => console.log(error))
    },[props])

    return (
        <MainContainer>
        
            <h2>{title}</h2>
            <p>{article}</p>
            <p className="badge bg-secondary">{authorname}</p>
            <br />
            <Link to="/" className="btn btn-primary">Back to Home</Link>
            
        </MainContainer>
    )
}

export default Article;

//MAIN CONTAINER
const MainContainer = styled.div`
    margin-top: 10px;
    margin-bottom: 10px;
    padding:20px;
    h2{
        text-align: center;
        font-weight: 900;
        color: var(--dark-green);
    }
    .btn-primary{
        background: var(--dark-green);
        border: none;
        &:hover{
            background: var(--light-green);
    }

    
`;
