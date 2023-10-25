import React from 'react'
import { useParams } from 'react-router-dom'

const Detail = () => {
    const {pid} = useParams()
    fetch('http://localhost:4000/api/product/' + pid)
  return (
    <div>Detail</div>
  )
}

export default Detail