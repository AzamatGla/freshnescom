import React from 'react'
import styled from 'styled-components';


const Container = styled.div`
    flex-basis: 48px;
    width: 93%;
    border-bottom: 1px solid #EFEFEF;
    display: flex;
    justify-content: space-between;
`;

const Info = styled.div`
    width: 28%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;
    
`;


const Nav = styled.div`
    width: 13%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
`;

const NavButton = styled.a`
    color: #6A983C;
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;
    cursor: pointer;
    &:hover {
        text-decoration: underline;
    }
`;

const Span = styled.span`
    color: #000;
`



const TopNavInfo = () => {
    return (
        <Container>
            <Info>
                <Span>Свяжитесь с нами</Span>
                <Span>+79160833619</Span>
                <Span>info@freshnescom.com</Span>
            </Info>
            <Nav>
                <NavButton>Блог</NavButton>
                <NavButton>О нас</NavButton>
                <NavButton>Карьера</NavButton>
            </Nav>
        </Container>
    )
}

export default TopNavInfo
