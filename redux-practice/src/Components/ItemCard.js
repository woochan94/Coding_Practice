import React from "react";
import styled from "styled-components";

const Img = styled.img`
  width: 150px;
  height: 150px;
`;
const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  border: 1px solid #e6e6e6;
`;
const ItemInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const ItemCard = ({ item }) => {
  return (
    <Item>
      <input type="checkbox" />
      <Img src={item.img} />
      <ItemInfo>
        <span>{item.name}</span>
        <span>{item.price}</span>
      </ItemInfo>
    </Item>
  );
};

export default ItemCard;
