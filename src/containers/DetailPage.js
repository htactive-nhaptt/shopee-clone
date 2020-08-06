import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import "../containers/detailsSyles/s1.css";
import "../containers/detailsSyles/s2.css";
import { getProduct } from "../util/cartUtils";
import { fetchProducts } from "../actions/productActions";
import { addToCart, subQuantity, addQuantity } from "../actions/cardActions";

const ContainerDetailPage = styled.div`
  padding-top: 100px;
`;

const DetailPage = (props) => {
  const { product = {}, fetchProducts, addToCart } = props;
  const [numProduct, setNumProduct] = useState(1);
  const [disableButton, setDisableButton] = useState(false);

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleChange = (event) => {
    const value = event.target.value;
    if (value > product.inventory) {
      setNumProduct(product.inventory);
      return;
    }
    if (value < 1) {
      setNumProduct(1);
      return;
    }
    setNumProduct(event.target.value);
  };
  const increaseNumProduct = () => {
    if (numProduct < product.inventory) setNumProduct(numProduct + 1);
    else setDisableButton(false);
  };
  const decreaseNumProduct = () => {
    if (numProduct > 0) setNumProduct(numProduct - 1);
    else setDisableButton(true);
  };

  return (
    <ContainerDetailPage>
      <div className="page-product">
        <div
          className="tracking-impression-placeholder"
          style={{
            position: "fixed",
            zIndex: "99999",
            bottom: "0px",
            left: "0px",
          }}
        ></div>
        <div role="main" className="container">
          <div className="product-briefing flex card _2cRTS4">
            <div></div>
            <div className="_30iQ1-">
              <div className="flex flex-column">
                <div className="_1eNVDM">
                  <div className="_1anaJP">
                    <div className="_24R4uR" style={{ display: "none" }}>
                      <div className="shopee-image-placeholder _1bTOZs">
                        <svg
                          className="stardust-icon stardust-icon-shopee icon-shopee-tiny"
                          enableBackground="new 0 0 54 61"
                          viewBox="0 0 54 61"
                        >
                          <path
                            stroke="none"
                            d="M35.67,44.95 C35.34,47.70 33.67,49.91 31.09,51.01 C29.65,51.63 27.72,51.96 26.19,51.85 C23.81,51.76 21.57,51.18 19.50,50.12 C18.77,49.74 17.67,48.99 16.82,48.28 C16.61,48.10 16.58,47.99 16.73,47.78 C16.80,47.67 16.94,47.46 17.25,47.01 C17.71,46.34 17.76,46.26 17.81,46.18 C17.96,45.96 18.19,45.94 18.42,46.12 C18.45,46.14 18.45,46.14 18.47,46.16 C18.50,46.19 18.50,46.19 18.59,46.26 C18.68,46.33 18.74,46.37 18.76,46.39 C20.99,48.13 23.58,49.13 26.20,49.24 C29.84,49.19 32.46,47.55 32.93,45.03 C33.44,42.27 31.27,39.88 27.02,38.54 C25.69,38.13 22.33,36.78 21.71,36.42 C18.80,34.71 17.44,32.47 17.64,29.71 C17.93,25.88 21.49,23.03 25.98,23.01 C27.98,23.01 29.99,23.42 31.91,24.23 C32.60,24.52 33.81,25.18 34.23,25.50 C34.47,25.68 34.52,25.88 34.38,26.11 C34.31,26.24 34.18,26.44 33.91,26.87 L33.91,26.87 C33.55,27.44 33.54,27.46 33.46,27.59 C33.32,27.80 33.15,27.82 32.90,27.66 C30.84,26.28 28.55,25.58 26.04,25.53 C22.91,25.59 20.57,27.45 20.42,29.99 C20.38,32.28 22.09,33.95 25.80,35.22 C33.33,37.64 36.21,40.48 35.67,44.95 M26.37,5.43 C31.27,5.43 35.27,10.08 35.46,15.90 L17.29,15.90 C17.47,10.08 21.47,5.43 26.37,5.43 M51.74,17.00 C51.74,16.39 51.26,15.90 50.66,15.90 L50.64,15.90 L38.88,15.90 C38.59,8.21 33.10,2.08 26.37,2.08 C19.64,2.08 14.16,8.21 13.87,15.90 L2.07,15.90 C1.48,15.91 1.01,16.40 1.01,17.00 C1.01,17.03 1.01,17.05 1.01,17.08 L1.00,17.08 L2.68,54.14 C2.68,54.25 2.69,54.35 2.69,54.46 C2.69,54.48 2.70,54.50 2.70,54.53 L2.70,54.60 L2.71,54.61 C2.96,57.19 4.83,59.26 7.38,59.36 L7.38,59.37 L44.80,59.37 C44.81,59.37 44.83,59.37 44.85,59.37 C44.87,59.37 44.88,59.37 44.90,59.37 L44.98,59.37 L44.98,59.36 C47.57,59.29 49.67,57.19 49.89,54.58 L49.89,54.58 L49.90,54.54 C49.90,54.51 49.90,54.49 49.90,54.46 C49.90,54.39 49.91,54.33 49.91,54.26 L51.74,17.05 L51.74,17.05 C51.74,17.04 51.74,17.02 51.74,17.00"
                          ></path>
                        </svg>
                      </div>
                      <div className="center _1X5pEb">
                        <video
                          data-dashjs-player="true"
                          className="_1KPtur"
                          autoPlay=""
                        ></video>
                      </div>
                    </div>
                    <div className="_3ZDC1p">
                      <div
                        className="_2JMB9h _3XaILN"
                        style={{
                          backgroundImage: "url(" + product.image + ")",
                          backgroundSize: "contain",
                          backgroundRepeat: "no-repeat",
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-auto k-mj2F">
              <div className="flex-auto flex-column _2TJgvU">
                <div className="qaNIZv">
                  <span>{product.title}</span>
                </div>
                <div style={{ marginTop: "10px" }}>
                  <div className="flex flex-column">
                    <div className="flex flex-column KHpkTU">
                      <div className="flex items-center">
                        <div className="flex items-center _2n_9_X">
                          <div className="flex items-center">
                            <div className="_3n5NQx">${product.price}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="_3DepLY">
                  <div className="flex flex-column">
                    <div className="flex _3dRJGI">
                      <label className="_2iNrDS">Description</label>
                      <div className="flex items-center _2sa_lL">
                        <div className="_3hCb11">Buy and earn up to</div>
                      </div>
                    </div>
                    <div className="flex _3dRJGI _3a2wD-">
                      <div className="flex flex-column">
                        <div className="flex items-center _1FzU2Y">
                          <div className="_2iNrDS">Quantity</div>
                          <div className="flex items-center">
                            <div style={{ marginRight: "15px" }}>
                              <div className="_19lAw4 shopee-input-quantity">
                                <button
                                  onClick={decreaseNumProduct}
                                  className="_1zT8xu"
                                >
                                  <svg
                                    className="shopee-svg-icon"
                                    enableBackground="new 0 0 10 10"
                                    viewBox="0 0 10 10"
                                    x="0"
                                    y="0"
                                  >
                                    <polygon points="4.5 4.5 3.5 4.5 0 4.5 0 5.5 3.5 5.5 4.5 5.5 10 5.5 10 4.5"></polygon>
                                  </svg>
                                </button>
                                <input
                                  className="_1zT8xu _18Y8Ul"
                                  type="text"
                                  value={numProduct}
                                  onChange={handleChange}
                                />
                                <button
                                  onClick={increaseNumProduct}
                                  className="_1zT8xu"
                                >
                                  <svg
                                    className="shopee-svg-icon icon-plus-sign"
                                    enableBackground="new 0 0 10 10"
                                    viewBox="0 0 10 10"
                                    x="0"
                                    y="0"
                                  >
                                    <polygon points="10 4.5 5.5 4.5 5.5 0 4.5 0 4.5 4.5 0 4.5 0 5.5 4.5 5.5 4.5 10 5.5 10 5.5 5.5 10 5.5"></polygon>
                                  </svg>
                                </button>
                              </div>
                            </div>
                            <div>{product.inventory} piece available</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div style={{ marginTop: "15px" }}>
                  <div className="OJJX3D">
                    <div className="_2O0llP">
                      <button
                        onClick={() => addToCart(product.id)}
                        type="button"
                        className="btn btn-tinted btn--l YtgjXY _3a6p6c"
                        aria-disabled="false"
                      >
                        <svg
                          className="shopee-svg-icon _343Jzb icon-add-to-cart"
                          enableBackground="new 0 0 15 15"
                          viewBox="0 0 15 15"
                          x="0"
                          y="0"
                        >
                          <g>
                            <g>
                              <polyline
                                fill="none"
                                points=".5 .5 2.7 .5 5.2 11 12.4 11 14.5 3.5 3.7 3.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeMiterlimit="10"
                              ></polyline>
                              <circle
                                cx="6"
                                cy="13.5"
                                r="1"
                                stroke="none"
                              ></circle>
                              <circle
                                cx="11.5"
                                cy="13.5"
                                r="1"
                                stroke="none"
                              ></circle>
                            </g>
                            <line
                              fill="none"
                              strokeLinecap="round"
                              strokeMiterlimit="10"
                              x1="7.5"
                              x2="10.5"
                              y1="7"
                              y2="7"
                            ></line>
                            <line
                              fill="none"
                              strokeLinecap="round"
                              strokeMiterlimit="10"
                              x1="9"
                              x2="9"
                              y1="8.5"
                              y2="5.5"
                            ></line>
                          </g>
                        </svg>

                        <span>add to cart</span>
                      </button>
                      <button
                        type="button"
                        className="btn btn-solid-primary btn--l YtgjXY"
                        aria-disabled="false"
                      >
                        buy now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </ContainerDetailPage>
  );
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const product = getProduct(state.products, id);
  console.log(product);
  return {
    product,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProducts: () => dispatch(fetchProducts()),
    addToCart: (id) => dispatch(addToCart(id)),
    subQuantity: (id) => dispatch(subQuantity(id)),
    addQuantity: (id) => dispatch(addQuantity(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailPage);
