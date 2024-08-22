import React, { useEffect, useState} from 'react';
import ProductCard from '../component/ProductCard';
import { Container, Row, Col } from "react-bootstrap";

const ProductAll = () => {
    // Define the async function to get products
    const [productList, setProductlist] = useState([]);
    const getProducts = async () => {
        const url = 'http://localhost:4000/products';
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        setProductlist(data);
    };

    // Use useEffect to fetch data on component mount
    useEffect(() => {
        getProducts();
    }, []); // Empty dependency array means this runs once on mount

    return (
        <Container>
            <Row>
                {productList.map((menu) => (
                    <Col lg={3}><ProductCard item={menu}></ProductCard></Col>
                ))}
            </Row>
        </Container>
    );
}

export default ProductAll;
