import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductsReads from './components/pages/ProductsReads'
import Layout from './components/layout/Layout'
import { Routes, Route } from 'react-router-dom'
import ProductById from './components/pages/ProductById'
import ProductCreate from './components/pages/ProductCreate'
import ProductEdit from './components/pages/ProductEdit'

function App() {
 

  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<ProductsReads />} />
          <Route path="/search" element={<ProductById />} />
          <Route path="/create" element={<ProductCreate />} />
          <Route path="/edit" element={<ProductEdit />} />
        </Routes>
      </Layout>
    </>
  )
}

export default App
