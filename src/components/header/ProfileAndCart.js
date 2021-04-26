import React from 'react';
import styled from 'styled-components';
import ProfileIconImage from '../../images/icons/ic-actions-user.png';
import CartIconImage from '../../images/icons/ic-ecommerce-basket.png';


const ProfileAndCartIcons = styled.div`
    width: 70px;
    height: 35px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const ProfileIcon = styled.div`
    width: 20px;
    height: 100%;
    background-image: url(${ProfileIconImage});
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    cursor: pointer;

`;

const CartIcon = styled.div`
    width: 20px;
    height: 100%;
    background-image: url(${CartIconImage});
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    cursor: pointer;
`;

const ProfileAndCart = () => {
    return (
        <ProfileAndCartIcons>
            <ProfileIcon></ProfileIcon>
            <CartIcon></CartIcon>
        </ProfileAndCartIcons>
    )
}

export default ProfileAndCart;
