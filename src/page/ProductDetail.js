import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const ProductDetail = () => {
  let { id } = useParams();
  let [product, setProduct] = useState(null);

  const getProductDetail = async () => {
    let url = `https://my-json-server.typicode.com/doyelee0313/shopping-site/products/${id}`;
    let response = await fetch(url);
    const data = await response.json();
    setProduct(data);
  };

  useEffect(() => {
    getProductDetail();
  }, [id]);

  return (
    <Container>
      <Row className="product-detail">
        <Col xs={12} md={6} className="d-flex justify-content-center align-items-center">
          <img src={product?.img} alt={product?.title} className="product-img" />
        </Col>
        <Col xs={12} md={6} className="d-flex justify-content-center align-items-center">
          <div className="content">
            <h1 className="product-title">{product?.title}</h1>
            <p className="product-price">{"$"}{product?.price}</p>
            <DropdownButton id="dropdown-basic-button" title="Size" className="dropdown-button">
              <Dropdown.Item href="#/action-1">S</Dropdown.Item>
              <Dropdown.Item href="#/action-2">M</Dropdown.Item>
              <Dropdown.Item href="#/action-3">L</Dropdown.Item>
            </DropdownButton>
            <button className="buy-button">BUY</button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
