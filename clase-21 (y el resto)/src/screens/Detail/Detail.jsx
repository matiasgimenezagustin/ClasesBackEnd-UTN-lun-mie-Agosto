import React, { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'

const Detail = () => {

    const navigate = useNavigate()
    const {pid} = useParams()
    const [productDetail, setProductDetail] = useState(null)
    const [isEditModeActive, setIsEditModeActive] = useState(false)
    const [stockValue, setStockValue] = useState()
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
    const handleActiveEditMode =() =>{
        setIsEditModeActive(true)
        setStockValue(productDetail.stock)
    }
    console.log(productDetail)

    const handleConfirmNewStock = () =>{
        fetch('http://localhost:4000/api/product/' + pid + '?stock=' + stockValue, {method: 'PUT'})
        .then((res) => res.json())
        .then(result => {
            if(result.ok){
                setProductDetail(result.product)
            }else{
                alert(result.error)
            }
        })
        setIsEditModeActive(false)
    }
  return (
    <div>
        <Link to='/'>Volver</Link>
        {
            productDetail 
            ? <div>
                <h2>{productDetail.nombre}</h2>
                <h3>Precio: ${productDetail.precio}</h3>
                <span>Stock: { 
                isEditModeActive 
                ? <input value={stockValue} onChange={(e) =>{setStockValue(e.target.value)}} type='number'/>
                :productDetail.stock
                }</span>
                <p>{productDetail.descripcion}</p>
                <button onClick={handleDeleteProduct}>Eliminar</button>
                {isEditModeActive 
                ? <button onClick={handleConfirmNewStock}>Confirmar</button>
                : <button onClick={handleActiveEditMode}>Modificar stock</button>}
            </div>
            : <h2>Cargando...</h2>
        }
        
    </div>
  )
}

export default Detail