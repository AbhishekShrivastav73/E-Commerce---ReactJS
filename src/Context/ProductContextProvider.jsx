import React, { useEffect, useState } from 'react'
import axios, { Axios } from "axios";
import ProductContext from './Product'
//Children basically ek parameter hai issme alag alag component aata rhega
const ProductContextProvider = ({children}) => {
   const [productsData,setProductData] =  useState([]);

   useEffect(() => {
    const api = `https://fakestoreapi.com/products`;

    axios
      .get(api)
      .then((response) => {
        console.log(response.data);
        setProductData(response.data);
        console.log(productsData);
        
      })
      .catch((error) => console.error("error hogya hai"));
  },[]);


  return (
    // isko wrapp to kr dnge pr ussme value dalna nahi bhulna hai [value] ..vo value saare children ko mil jaega
   <ProductContext.Provider value={{productsData,setProductData}}>{children}</ProductContext.Provider>
  )
}

export default ProductContextProvider