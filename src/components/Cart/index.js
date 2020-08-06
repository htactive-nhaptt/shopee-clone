import React from "react";
import { connect } from "react-redux";
import { getProductsFromCart, getTotal } from "../../util/cartUtils";
import { removeItem } from "../../actions/cardActions";
import { useHistory } from "react-router-dom";
import {
  CartContainer,
  TitleCart,
  Quantity,
  ButtonCart,
  CartItem,
  ImageBox,
  CenterCartItem,
  ItemTitle,
  RightCartItem,
  Price,
  DeleteButton,
} from "./styles";

const Cart = (props) => {
  const { productsInCart, deleteItem, cart } = props;
  const history = useHistory();
  const litmitCartItem = productsInCart.slice(0, 5);
  const cartItem = litmitCartItem.map((product) => {
    return (
      <CartItem key={product.id}>
        <ImageBox src={product.image}></ImageBox>
        <CenterCartItem>
          <ItemTitle>{product.title}</ItemTitle>
        </CenterCartItem>
        <RightCartItem>
          <Price>{product.price}</Price>
          <DeleteButton onClick={() => deleteItem(product.id)}>
            Delete
          </DeleteButton>
        </RightCartItem>
      </CartItem>
    );
  });

  const total = getTotal(cart);

  return (
    <CartContainer>
      <TitleCart>Sản phẩm mới thêm</TitleCart>
      {cartItem}
      <CartItem>
        <Quantity>{total} thêm vào giỏ hàng</Quantity>
        <ButtonCart onClick={() => history.push("/checkout")}>
          Checkout
        </ButtonCart>
      </CartItem>
    </CartContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    productsInCart: getProductsFromCart(state),
    cart: state.cart,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteItem: (id) => dispatch(removeItem(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
