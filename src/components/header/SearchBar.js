import React from 'react'
import styled from 'styled-components';
import searchIcon from '../../images/icons/ic-actions-search.png';

const Container = styled.div`
    width: 500px;
    height: 42px;
    border: 1px solid #D1D1D1;
    border-radius: 10px;
    background-color: #F9F9F9;
    display: flex;
    justify-content: space-between;
    align-items: center
`;

const DropdownMenu = styled.div``;
const SearchInput = styled.input`
    border: none;
    height: 20px;
    width: 262px;
    border-left: 1px solid rgb(232, 232, 232);
    outline: none;
    background-color: transparent;
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    padding-left: 24px;
`;
const SearchButton = styled.button`
    width: 16px;
    height: 16px;
    background-image: url(${searchIcon});
    background-position: center;
    margin: 15px 16px;
    background-color: transparent;
    background-size: contain;
    border: none;
    padding: 0;
    cursor: pointer;
`;

const SearchBar = () => {
    return (
        <Container>
            <DropdownMenu></DropdownMenu>
            <SearchInput type="text" placeholder="Искать продукты..."></SearchInput>
            <SearchButton></SearchButton>
        </Container>
    )
}

export default SearchBar
