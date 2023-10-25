import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Detail = () => {
    const {pid} = useParams()
    const [productDetail, setProductDetail] = useState(null)
    useEffect(
        () =>{
            fetch('http://localhost:4000/api/product/' + pid)
            .then(res => res.json() )
            .then(result =>{
                setProductDetail(result.product)
            })
        },  []
    )
   
    console.log(productDetail)
  return (
    <div>
        {
            productDetail 
            ? <div>
                <h2>{productDetail.nombre}</h2>
                <h3>Precio: ${productDetail.precio}</h3>
                <span>Stock: {productDetail.stock}</span>
                <p>{productDetail.descripcion}</p>
            </div>
            : <h2>Cargando...</h2>
        }
    </div>
  )
}

export default Detail