import React, { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'

const Detail = () => {

    const navigate = useNavigate()
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
   
    const handleDeleteProduct = () =>{
        
        fetch('http://localhost:4000/api/product/' + pid, {method: 'DELETE'})
        .then((res) => res.json())
        .then(data =>{
            if(data.ok){
                navigate('/')
            }
            else{
                alert('No se pudo eliminar el producto, intenta mas tarde')
            }
        })
    }
    console.log(productDetail)
  return (
    <div>
        <Link to='/'>Volver</Link>
        {
            productDetail 
            ? <div>
                <h2>{productDetail.nombre}</h2>
                <h3>Precio: ${productDetail.precio}</h3>
                <span>Stock: {productDetail.stock}</span>
                <p>{productDetail.descripcion}</p>
                <button onClick={handleDeleteProduct}>Eliminar</button>
                <button>Editar</button>
            </div>
            : <h2>Cargando...</h2>
        }
        
    </div>
  )
}

export default Detail