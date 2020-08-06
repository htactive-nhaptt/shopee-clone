import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import {
  getProductsFromCart,
  getTotal,
  allItemsPrice,
} from "../util/cartUtils";
import { removeItem, subQuantity, addQuantity } from "../actions/cardActions";
import "./styles/Container.css";
import "./styles/bundle.css";

const CartPageContainer = styled.div`
  margin-top: 130px;
  padding: 0 100px;
`;


const GroupInput = styled.div`
    display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
`;


const CartPage = (props) => {
  const { productsInCart, deleteItem, subQuantity, cart, addQuantity } = props;
  const totalAllItems = allItemsPrice(productsInCart);
  const total = getTotal(cart);

  const items = productsInCart.map((item) => {
    return (
      <div key={item.id} className="cart-page-shop-section">
        <div className="cart-page-shop-section__items">
          <div className="cart-item">
            <div className="cart-item__content">
              <div className="cart-item__cell-checkbox">
                <label className="stardust-checkbox">
                  <input className="stardust-checkbox__input" type="checkbox" />
                </label>
              </div>
              <div className="cart-item__cell-overview">
                <div className="cart-item__cell-overview--line">
                  <a
                    className="cart-item-overview__thumbnail-wrapper"
                    title="Korean Style Women Shoulder / Tote  Bag [JESSICA]"
                    href=""
                  >
                    <div
                      className="cart-item-overview__thumbnail"
                      alt="cart_thumbnail"
                      style={{
                        backgroundImage: "url(" + item.image + ")",
                      }}
                    ></div>
                  </a>
                  <div className="cart-item-overview__product-name-wrapper">
                    <a
                      className="cart-item-overview__name"
                      title="Korean Style Women Shoulder / Tote  Bag [JESSICA]"
                      href="https://shopee.sg/Korean-Style-Women-Shoulder-Tote-Bag-JESSICA--i.72368600.1208689186"
                    >
                      {item.title}
                    </a>
                    <div className="cart-item-overview__message"></div>
                  </div>
                </div>
              </div>

              <div className="cart-item__cell-unit-price">
                <div>
                  <span className="cart-item__unit-price cart-item__unit-price--after">
                    ${item.price}
                  </span>
                </div>
              </div>

                <GroupInput>
                  <button
                      onClick={() => subQuantity(item.id)}
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
                      value={item.quantity}
                  />
                  <button
                      onClick={() => addQuantity(item.id)}
                      disabled={item.inventory > 0 ? '' : 'disabled'  }                  className="_1zT8xu"
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
                </GroupInput>











              <div className="cart-item__cell-total-price">
                <span>${item.quantity * item.price}</span>
              </div>
              <div className="cart-item__cell-actions">
                <button
                  onClick={() => {
                    deleteItem(item.id);
                  }}
                  className="cart-item__action"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <CartPageContainer>
      <div id="main">
        <div className="">
          <div className="shopee-progress-bar"></div>
          <div className="shopee-page-wrapper">
            <div className="cart-page cart-page--opc">
              <div
                className="tracking-impression-placeholder"
                style={{
                  position: "fixed",
                  zIndex: "99999",
                  bottom: "0px",
                  left: "0px",
                }}
              ></div>
              <div className="container">
                <div
                  role="main"
                  className="cart-page__content cart-page__content--opc"
                  style={{ marginBottom: "0px" }}
                >
                  <div className="cart-page-product-header">
                    <div className="cart-item__cell-checkbox">
                      <label className="stardust-checkbox">
                        <input
                          className="stardust-checkbox__input"
                          type="checkbox"
                        />
                      </label>
                    </div>
                    <div className="cart-page-product-header__product">
                      product
                    </div>
                    <div className="cart-page-product-header__unit-price">
                      unit price
                    </div>
                    <div className="cart-page-product-header__quantity">
                      Quantity
                    </div>
                    <div className="cart-page-product-header__total-price">
                      total price
                    </div>
                    <div className="cart-page-product-header__action">
                      actions
                    </div>
                  </div>
                  <div>{items}</div>
                </div>
                <div className="cart-page-footer cart-page-footer--overlap">
                  <div className="_1HyPTI cart-page-footer__row1">
                    <svg
                      className="shopee-svg-icon icon-voucher-line"
                      fill="none"
                      viewBox="0 -2 23 22"
                    >
                      <g filter="url(#voucher-filter0_d)">
                        <mask id="a" fill="#fff">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M1 2h18v2.32a1.5 1.5 0 000 2.75v.65a1.5 1.5 0 000 2.75v.65a1.5 1.5 0 000 2.75V16H1v-2.12a1.5 1.5 0 000-2.75v-.65a1.5 1.5 0 000-2.75v-.65a1.5 1.5 0 000-2.75V2z"
                          ></path>
                        </mask>
                        <path
                          d="M19 2h1V1h-1v1zM1 2V1H0v1h1zm18 2.32l.4.92.6-.26v-.66h-1zm0 2.75h1v-.65l-.6-.26-.4.91zm0 .65l.4.92.6-.26v-.66h-1zm0 2.75h1v-.65l-.6-.26-.4.91zm0 .65l.4.92.6-.26v-.66h-1zm0 2.75h1v-.65l-.6-.26-.4.91zM19 16v1h1v-1h-1zM1 16H0v1h1v-1zm0-2.12l-.4-.92-.6.26v.66h1zm0-2.75H0v.65l.6.26.4-.91zm0-.65l-.4-.92-.6.26v.66h1zm0-2.75H0v.65l.6.26.4-.91zm0-.65l-.4-.92-.6.26v.66h1zm0-2.75H0v.65l.6.26.4-.91zM19 1H1v2h18V1zm1 3.32V2h-2v2.32h2zm-.9 1.38c0-.2.12-.38.3-.46l-.8-1.83a2.5 2.5 0 00-1.5 2.29h2zm.3.46a.5.5 0 01-.3-.46h-2c0 1.03.62 1.9 1.5 2.3l.8-1.84zm.6 1.56v-.65h-2v.65h2zm-.9 1.38c0-.2.12-.38.3-.46l-.8-1.83a2.5 2.5 0 00-1.5 2.29h2zm.3.46a.5.5 0 01-.3-.46h-2c0 1.03.62 1.9 1.5 2.3l.8-1.84zm.6 1.56v-.65h-2v.65h2zm-.9 1.38c0-.2.12-.38.3-.46l-.8-1.83a2.5 2.5 0 00-1.5 2.29h2zm.3.46a.5.5 0 01-.3-.46h-2c0 1.03.62 1.9 1.5 2.3l.8-1.84zM20 16v-2.13h-2V16h2zM1 17h18v-2H1v2zm-1-3.12V16h2v-2.12H0zm1.4.91a2.5 2.5 0 001.5-2.29h-2a.5.5 0 01-.3.46l.8 1.83zm1.5-2.29a2.5 2.5 0 00-1.5-2.3l-.8 1.84c.18.08.3.26.3.46h2zM0 10.48v.65h2v-.65H0zM.9 9.1a.5.5 0 01-.3.46l.8 1.83A2.5 2.5 0 002.9 9.1h-2zm-.3-.46c.18.08.3.26.3.46h2a2.5 2.5 0 00-1.5-2.3L.6 8.65zM0 7.08v.65h2v-.65H0zM.9 5.7a.5.5 0 01-.3.46l.8 1.83A2.5 2.5 0 002.9 5.7h-2zm-.3-.46c.18.08.3.26.3.46h2a2.5 2.5 0 00-1.5-2.3L.6 5.25zM0 2v2.33h2V2H0z"
                          mask="url(#a)"
                        ></path>
                      </g>
                      <path
                        clipRule="evenodd"
                        d="M6.49 14.18h.86v-1.6h-.86v1.6zM6.49 11.18h.86v-1.6h-.86v1.6zM6.49 8.18h.86v-1.6h-.86v1.6zM6.49 5.18h.86v-1.6h-.86v1.6z"
                      ></path>
                      <defs>
                        <filter
                          id="voucher-filter0_d"
                          x="0"
                          y="1"
                          width="20"
                          height="16"
                          filterUnits="userSpaceOnUse"
                          colorInterpolationFilters="sRGB"
                        >
                          <feflood
                            floodOpacity="0"
                            result="BackgroundImageFix"
                          ></feflood>
                          <fecolormatrix
                            in="SourceAlpha"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          ></fecolormatrix>
                          <feoffset></feoffset>
                          <fegaussianblur stdDeviation=".5"></fegaussianblur>
                          <fecolormatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0"></fecolormatrix>
                          <feblend
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow"
                          ></feblend>
                          <feblend
                            in="SourceGraphic"
                            in2="effect1_dropShadow"
                            result="shape"
                          ></feblend>
                        </filter>
                      </defs>
                    </svg>
                    <div className="_1BXRKo">Platform Voucher</div>
                    <div className="_27xHsH"></div>
                    <span className="q39jUl">
                      <span>Select or enter code</span>
                    </span>
                  </div>
                  <div className="xfpmZ0 cart-page-footer__row2"></div>
                  <div className="cart-page-footer__row3 cart-item__cell-checkbox cart-page-footer__row-checkbox _1VLul3">
                    <label className="stardust-checkbox stardust-checkbox--disabled">
                      <input
                        className="stardust-checkbox__input"
                        type="checkbox"
                      />
                    </label>
                  </div>
                  <div className="cart-page-footer__row3 _1MmL9v cart-page-footer__row-title _LqXv5">
                    <div className="stardust-popover _1X-iqk">
                      <div className="stardust-popover__target">
                        <div>
                          <svg
                            className="shopee-svg-icon _2wiQX1 icon-help"
                            enableBackground="new 0 0 15 15"
                            viewBox="0 0 15 15"
                            x="0"
                            y="0"
                          >
                            <g>
                              <circle
                                cx="7.5"
                                cy="7.5"
                                fill="none"
                                r="6.5"
                                strokeMiterlimit="10"
                              ></circle>
                              <path
                                d="m5.3 5.3c.1-.3.3-.6.5-.8s.4-.4.7-.5.6-.2 1-.2c.3 0 .6 0 .9.1s.5.2.7.4.4.4.5.7.2.6.2.9c0 .2 0 .4-.1.6s-.1.3-.2.5c-.1.1-.2.2-.3.3-.1.2-.2.3-.4.4-.1.1-.2.2-.3.3s-.2.2-.3.4c-.1.1-.1.2-.2.4s-.1.3-.1.5v.4h-.9v-.5c0-.3.1-.6.2-.8s.2-.4.3-.5c.2-.2.3-.3.5-.5.1-.1.3-.3.4-.4.1-.2.2-.3.3-.5s.1-.4.1-.7c0-.4-.2-.7-.4-.9s-.5-.3-.9-.3c-.3 0-.5 0-.7.1-.1.1-.3.2-.4.4-.1.1-.2.3-.3.5 0 .2-.1.5-.1.7h-.9c0-.3.1-.7.2-1zm2.8 5.1v1.2h-1.2v-1.2z"
                                stroke="none"
                              ></path>
                            </g>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="xfpmZ0 cart-page-footer__row4"></div>
                  <div className="cart-page-footer__row _2rKNkP cart-page-footer__row5">
                    <div className="cart-item__cell-checkbox cart-page-shop-header__checkbox-wrapper">
                      <label className="stardust-checkbox">
                        <input
                          className="stardust-checkbox__input"
                          type="checkbox"
                        />
                      </label>
                    </div>

                    <div className="cart-page-footer__remove-inactive"></div>
                    <div className="cart-page-footer__gap"></div>
                    <div className="cart-page-footer__summary">
                      <div className="cart-page-footer__first-summary">
                        <div className="cart-page-footer-summary__subtotal">
                          <div className="cart-page-footer-summary__subtotal-text">
                            Merchandise Subtotal ({total} items):
                          </div>
                          <div className="cart-page-footer-summary__subtotal-amount">
                            ${totalAllItems}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="cart-page-footer__checkout">
                      <button className="shopee-button-solid shopee-button-solid--primary">
                        <span className="cart-page-footer__checkout-text">
                          check out
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <footer role="contentinfo" className="_3hdpJC">
              <div className="_2KaIm4">
                <div>
                  <div></div>
                </div>
              </div>
            </footer>
          </div>
          <div></div>
        </div>
      </div>
    </CartPageContainer>
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
    subQuantity: (id) => dispatch(subQuantity(id)),
    addQuantity: (id) => dispatch(addQuantity(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);
