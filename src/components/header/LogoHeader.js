import React from 'react'
import styled from 'styled-components';
import SearchBar from './SearchBar';
import LogoImage from '../../images/Freshnesecom.png';
import ProfileAndCart from '../header/ProfileAndCart';


const Container = styled.div`
    flex-basis: 130px;
    display: flex;
    width: 93%;
    justify-content: space-between;
    align-items: center
`;

const Logo = styled.div`
    width: 177px;
    height: 18px;
    background-image: url(${LogoImage});
    cursor: pointer;
`;


const LogoHeader = () => {
    return (
        <Container>
            <Logo></Logo>
            <SearchBar />
            <ProfileAndCart />
        </Container>
    )
}

export default LogoHeader
