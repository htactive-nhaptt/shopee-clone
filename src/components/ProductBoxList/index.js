import React from "react";
import { Row, Col, Card } from "antd";
import "./styles.css";
const { Meta } = Card;
const ProductsBoxList = (props) => {
  const { products = [], handleAddToCart, handleClickDetail } = props;

  const productListCard = products.map((product) => {
    return (
      <Col
        style={{ width: "182px", margin: "8px 0px" }}
        key={product.id}
        lg={4}
        md={4}
      >
        <Card
          onClick={() => handleClickDetail(product.id)}
          hoverable
          style={{ width: 189 }}
          cover={<img alt="" src={product.image} />}
        >
          <Meta title={product.title} />
          <div className="additional">
            <div className="price">${product.price}</div>
            <div className="sold">Đã bán 23</div>
          </div>
        </Card>
      </Col>
    );
  });

  return (
    <div className="products-container">
      <Row gutter={[32, 16]}>{productListCard}</Row>
    </div>
  );
};

export default ProductsBoxList;
