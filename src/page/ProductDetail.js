import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from "react-bootstrap";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const ProductDetail = () => {
  let{id} = useParams();
  let [product, setProduct] = useState(null);
  const getProductDetail = async() => {
    let url = `https://my-json-server.typicode.com/doyelee0313/shoppingwebsite/${id}`
    let response = await fetch(url);
    const data = await response.json();
    console.log(data);
    setProduct(data);
  };
  useEffect(() => {
    getProductDetail();
  }, [])
  return (
    <Container>
      <Row>
        <Col classname="product-img">
          <img src={product?.img}></img>
        </Col>
        <Col>
        <div className="content">
          <div>{product?.title}</div>
            <div>{"$"}{product?.price}</div>
            <DropdownButton id="dropdown-basic-button" title="size">
            <Dropdown.Item href="#/action-1">S</Dropdown.Item>
            <Dropdown.Item href="#/action-2">M</Dropdown.Item>
            <Dropdown.Item href="#/action-3">L</Dropdown.Item>
            </DropdownButton>
            <button>BUY</button>
        </div>
        </Col>
      </Row>
    </Container>
  )
}

export default ProductDetail
