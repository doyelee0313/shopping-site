import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({item}) => {
    const navigate = useNavigate();
    const showDetail=()=>{
        navigate(`/product/${item.id}`)
    }
  return (
    <div class="card margin">
        <img width="150px" height="250px" src={item?.img}/>
        <p class="heading">{item?.title}</p>
        <p className="product-info">
        {"$"}{item?.price}{" "}
        {item?.new && <span className="badge new">New</span>}
        {item?.choice && <span className="badge conscious">Conscious Choice</span>}
        </p>        
        <button onClick={showDetail}><span class="text">Buy</span></button>
    </div>
  )
}

export default ProductCard