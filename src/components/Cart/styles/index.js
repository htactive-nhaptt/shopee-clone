import styled from "styled-components";

export const CartContainer = styled.div`
  width: 400px;
  margin: 5px 5px;
  display: flex;
  flex-direction: column;
`;

export const TitleCart = styled.div`
  width: 390px;
  height: 40px;
  padding-left: 10px;
`;

export const CartItem = styled.div`
  width: 390px;
  height: 52px;
  display: flex;
`;

export const ImageBox = styled.img`
  height: 40px;
  width: 40px;
`;

export const CenterCartItem = styled.div`
  width: 260px;
  height: 42px;
  display: flex;
  flex-direction: column;
`;

export const ItemTitle = styled.div`
  font-weight: 500;
  font-size: 0.875rem;
`;

export const RightCartItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 100px;
  height: 42px;
`;

export const Price = styled.div`
  color: #ee4d2d;
`;

export const DeleteButton = styled.div`
  cursor: pointer;
`;

export const Quantity = styled.div`
  width: 160px;
  height: 42px;
`;

export const ButtonCart = styled.div`
  width: 120px;
  height: 42px;
  margin-left: 20px;
  background-color: #ee4d2d;
  cursor: pointer;
  box-shadow: inset 0 2px 1px 0 rgba(0, 0, 0, 0.05);
  color: white;
  padding-left: 15px;
  border-radius: 2px;
  padding-top: 10px;
`;
