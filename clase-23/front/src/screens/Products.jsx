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
    <div>
        {products.length != 0  && products.map((product) =>(
            <div key={product._id}>
                {product.thumbnail && <img src={'http://localhost:3040/images/' + product.thumbnail}  />}
                
                <h2>{product.nombre}</h2>

            </div>
        ))}
    </div>
  )
}

export default Products

/* Si entar los productos, renderizarlos por la pantalla (usando un map) */