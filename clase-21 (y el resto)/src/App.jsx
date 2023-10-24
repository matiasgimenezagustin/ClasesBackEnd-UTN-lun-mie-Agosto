import React from 'react'

import './App.css'
import { Home } from './screens'
import { BrowserRouter } from 'react-router-dom'

function App() {

  return (
    <>
    
    <BrowserRouter>
    <Home/>
    </BrowserRouter>
      
    </>
  )
}

export default App


/* 
npm create vite@latest

elegir REACT > Javascript + SWC

npm install 

npm run dev

*/