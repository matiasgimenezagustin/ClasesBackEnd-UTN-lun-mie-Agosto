import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() =>{
    fetch('http://localhost:4000/api/products', 
      {method: 'GET'}
    )
    .then((res) => res.json())
    .then(result => {
      setProducts(result.products)
      setLoading(false)
    })
  }, [])
    

  console.log(products)
  return (
    <div>
        <h1>Lista de productos</h1>
        {
          loading 
          ? <h2>Cargando..</h2>
          : products.map(product =>(
            <div key={product.id}>
              <h3>{product.nombre}</h3>
              <Link to={'/product/detail/' + product.id }>Ver detalle</Link>
            </div>
          )) 
        }
    </div>
  )
}

export default Home