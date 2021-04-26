import React from 'react';
import styled from 'styled-components';
import LogoHeader from './LogoHeader';
import TopNavInfo from './TopNavInfo';

const MainHeaderContainer = styled.div`
    width: 100%;
    height: 178px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;


const Header = () => {
    return (
        <MainHeaderContainer>
            <TopNavInfo />
            <LogoHeader />
        </MainHeaderContainer>
    )
}

export default Header;


