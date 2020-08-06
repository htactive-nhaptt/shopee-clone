import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../actions/productActions";
import ProductBoxList from "../components/ProductBoxList";
import { addToCart } from "../actions/cardActions";
import { useHistory } from "react-router-dom";

const HomePage = (props) => {
  const { products, fetchProducts, addToCart } = props;
  const history = useHistory();
  useEffect(() => {
    fetchProducts();
  }, []);

  const handleClickDetail = (id) => {
    history.push("/detail/" + id);
  };

  return (
    <ProductBoxList
      handleAddToCart={addToCart}
      handleClickDetail={handleClickDetail}
      products={products}
    ></ProductBoxList>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProducts: () => dispatch(fetchProducts()),
    addToCart: (id) => dispatch(addToCart(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
