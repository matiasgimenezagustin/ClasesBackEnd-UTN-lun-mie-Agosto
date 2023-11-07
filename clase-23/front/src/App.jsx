import React, {useState} from 'react'

import './App.css'
import Products from './screens/products'
import { Route, Routes } from 'react-router-dom'
import ProductDetail from './screens/ProductDetail'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Products/>}/>
        <Route path='/product/:pid' element={<ProductDetail/>}/>
      </Routes>
  
    </>
  )
}

export default App
