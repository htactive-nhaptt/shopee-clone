import React from "react";
import { Row, Col, Card } from "antd";
import "./styles.css";
const { Meta } = Card;
const ProductsBoxList = (props) => {
  const { products = [], handleAddToCart, handleClickDetail } = props;

  const productListCard = products.map((product) => {
    return (
      <Col key={product.id} md={4}>
        <Card
          onClick={() => handleClickDetail(product.id)}
          hoverable
          style={{ width: 189 }}
          cover={<img alt="example" src={product.image} />}
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
      <Row gutter={[8, 16]}>{productListCard}</Row>
    </div>
  );
};

export default ProductsBoxList;
