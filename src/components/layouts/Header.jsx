import React from 'react';
import styled from 'styled-components';


const Header = () => {
    return (
        <MainContainer>
            <h1>
               Add your Article<br />
                or Read Article
            </h1>
        </MainContainer>
    )
}

export default Header;

//MAIN CONTAINER

const MainContainer = styled.header`
    background: #071a52;
    height: 15rem;
    text-align: center;

    h1{
        transform: translate(-50%, -50%);
        color:#fff;
        font-weight:900;
        position:absolute;
        top:25%;
        left:50%;
    }
`;
