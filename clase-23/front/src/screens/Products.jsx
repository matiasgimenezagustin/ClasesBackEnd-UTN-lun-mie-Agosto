import React, { useEffect, useState } from 'react'

const Products = () => {
    
     const [products, setProducts] = useState([])
    useEffect(() =>{
        fetch('http://localhost:3040/api/products')
        .then(res => res.json())
        .then(result => setProducts(result.products))
    }, [])
    console.log(products)
  return (
    <div>products</div>
  )
}

export default Products