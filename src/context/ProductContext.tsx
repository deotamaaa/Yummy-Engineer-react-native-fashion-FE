import axios from 'axios'
import React, { createContext, ReactNode, useState } from 'react'

export const ProductContext = createContext<any>({})


interface ProductContextProps {
  children: ReactNode
}

const ProductContextProvider = ({ children }: ProductContextProps) => {
  const [products, setProducts] = useState([])

  const getProducts = async () => {
    await axios
      .get('/products')
      .then((result) => {
        setProducts(result.data)
      }).catch((err) => {
        console.log(err)
      })
    return (
      <ProductContext.Provider value={{ products, getProducts }}>
        {children}
      </ProductContext.Provider>
    )
  }
}
export default ProductContextProvider