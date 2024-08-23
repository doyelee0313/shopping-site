import React, { useEffect, useState} from 'react';
import ProductCard from '../component/ProductCard';
import { Container, Row, Col } from "react-bootstrap";
import { useSearchParams } from 'react-router-dom';
import { queryAllByAltText } from '@testing-library/react';

const ProductAll = () => {
    // Define the async function to get products
    const [productList, setProductlist] = useState([]);
    const [query, setQuery] = useSearchParams();
    const getProducts = async () => {
        let searchQuery = query.get("q");
        const url = `https://my-json-server.typicode.com/doyelee0313/shopping-site/products?q=${searchQuery}`; //json server 에서 알아서 찾아줌
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        setProductlist(data);
    };

    // Use useEffect to fetch data on component mount
    useEffect(() => {
        getProducts();
    }, [query]); // Empty dependency array means this runs once on mount

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
