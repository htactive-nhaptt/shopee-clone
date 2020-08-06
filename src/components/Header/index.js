import React from "react";
import {Popover, Card} from "antd";
import CartCustom from "../Cart";
import "./styles.css";
import "../../containers/styles/Container.css";
import {Link} from "react-router-dom";
import styled from "styled-components";
import {connect} from "react-redux";
import {getTotal} from "../../util/cartUtils";
import {ReactComponent as SearchIcon} from "../../assets/icons/searchIcon.svg";
import {ReactComponent as Logo} from "../../assets/icons/logo.svg";
import {ReactComponent as Cart} from "../../assets/icons/cart-header.svg";
import {ReactComponent as Notification} from "../../assets/icons/notification.svg";
import {ReactComponent as Help} from "../../assets/icons/notification.svg";

const content = () => {
    return <CartCustom/>;
};

const Header = (props) => {
    const Container = styled.div`
    margin-top: 100px;
  `;
    const {cart} = props;

    return (
        <Container>
            <div styled={{top: "150px"}} className="shopee-top shopee-top--sticky">
                <div className="navbar-wrapper container-wrapper">
                    <div className="container navbar">
                        <div className=" v-center QFNh9Y">
                            <a
                                href="https://banhang.shopee.vn/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="_3yPx2v"
                            >
                                Kênh Người Bán
                            </a>
                            <div className="_3yPx2v">
                                <div className="shopee-drawer">Tải ứng dụng</div>
                            </div>
                            <div className="flex _3yPx2v l5jiLT">Kết nối</div>
                            <div className="flex _3yPx2v _1_jwND">
                                <a
                                    className="FqA-ls pjy1mut-background pjy1mut-ic_facebook-2x-png"
                                />
                                <a
                                    rel="noopener noreferrer"
                                    className="vtDvhz pjy1mut-background pjy1mut-ic_instagram-2x-png"

                                />
                            </div>
                        </div>
                        <div className="navbar__spacer"></div>
                        <ul className="navbar__links">
                            <li className="navbar__link--notification navbar__link navbar__link--hoverable navbar__link--tappable">
                                <div className="stardust-popover">
                                    <div className="stardust-popover__target">
                                        <a
                                            className="_3hOI3V _3OzAcw"
                                            href="https://shopee.vn/user/notifications/order"
                                        >
                                            <Notification/>
                                            <span className="_3_Cb4x">Thông báo</span>
                                        </a>
                                    </div>
                                </div>
                            </li>
                            <li className="navbar__link navbar__link--tappable navbar__link--hoverable">
                                <div className="navbar__help-center-icon">
                                    <Help/>
                                </div>
                                <span className="navbar__link-text navbar__link--tappable navbar__link--hoverable">
                  trợ giúp
                </span>
                            </li>
                            <a
                                className="navbar__link navbar__link--account navbar__link--tappable navbar__link--hoverable navbar__link-text navbar__link-text--medium"
                                href="https://shopee.vn/buyer/login/signup?next=https%253A%252F%252Fshopee.vn%252F"
                            >
                                Đăng ký
                            </a>
                            <div className="navbar__link-separator"></div>
                            <a
                                className="navbar__link navbar__link--account navbar__link--tappable navbar__link--hoverable navbar__link-text navbar__link-text--medium"
                                href="https://shopee.vn/buyer/login?next=https%253A%252F%252Fshopee.vn%252F"
                            >
                                Đăng nhập
                            </a>
                        </ul>
                    </div>
                </div>
                <div className="container-wrapper header-with-search-wrapper">
                    <div className="container header-with-search">
                        <Link className="header-with-search__logo-section" to="/">
                            <Logo/>
                        </Link>
                        <div className="header-with-search__search-section">
                            <div className="shopee-searchbar">
                                <div className="shopee-searchbar__main">
                                    <form
                                        role="search"
                                        className="shopee-searchbar-input"
                                        autoComplete="off"
                                    >
                                        <input
                                            className="shopee-searchbar-input__input"
                                            autoComplete="off"
                                        />
                                    </form>
                                </div>
                                <button
                                    type="button"
                                    className="btn btn-solid-primary btn--s btn--inline"
                                >
                                    <SearchIcon/>
                                </button>
                            </div>
                        </div>
                        <div className="header-with-search__cart-wrapper">
                            <div className="stardust-popover">
                                <Popover
                                    trigger="hover"
                                    content={content}
                                    placement="bottomRight"
                                >
                                    <div className="stardust-popover__target">
                                        <div className="cart-drawer-container">
                                            <div className="cart-drawer flex v-center">
                                                <Cart/>
                                                <div
                                                    style={{height: "19px"}}
                                                    className="shopee-cart-number-badge"
                                                >
                                                    {getTotal(cart)}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Popover>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

const mapStateToProps = (state) => {
    return {
        cart: state.cart,
    };
};

export default connect(mapStateToProps)(Header);
