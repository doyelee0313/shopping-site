import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  let{id} = useParams();
  const getProductDetail = async() => {
    let url = `http://localhost:4000/products/${id}`
    let response = await fetch(url);
    const data = await response.json();
    console.log(data);
  };
  useEffect(() => {
    getProductDetail();
  }, [])
  return (
    <div></div>
  )
}

export default ProductDetail
