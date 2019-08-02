import React from "react";
import styled from "styled-components";
import ItemCard from "../Components/ItemCard";
import { useSelector } from "react-redux";

const CheckDiv = styled.div`
`;

const ItemContainer = styled.div`
    width: 70%;
    display: inline-block;
`;

const ItemDiv = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 10px;
    grid-row-gap: 10px;
`;

const SideBar = styled.div`
    display: inline-block;
    width: 30%;
`;

const CheckContainer = () => {
    const { item, check } = useSelector(state => state.check, []);
  return (
    <CheckDiv>
        <ItemContainer>
            <ItemDiv>
                {item.map((product, index) => (
                    <ItemCard key={index} item={product} />
                ))}
            </ItemDiv>
        </ItemContainer>
        <SideBar>
            {check.checkCount}
            {check.checkPrice}
        </SideBar>
    </CheckDiv>
  )
};

export default CheckContainer;
