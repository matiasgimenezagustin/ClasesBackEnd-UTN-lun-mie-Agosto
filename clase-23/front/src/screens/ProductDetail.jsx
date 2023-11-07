import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ProductDetail = () => {
    const {pid} = useParams()
    const [productSelect, setProductSelect] = useState(null)
    useEffect(() =>{
        fetch('http://localhost:3040/api/products/' + pid)
        .then(res => res.json())
        .then((result) => setProductSelect(result.product))
    }, [])
  return (
    <div>
        ProductDetail
        {   
        productSelect 
            ?
            (<div>
                {productSelect.nombre}
            </div>)
            :
            <h2>Cargando</h2>
        }
        
    </div>
  )
}

export default ProductDetail