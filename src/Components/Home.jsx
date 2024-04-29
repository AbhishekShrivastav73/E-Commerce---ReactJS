import axios, { Axios } from "axios";
import React, { useEffect, useState } from "react";
import ProductCards from "./ProductCards";

function Home() {
  const [products, setData] = useState([]);
  const news = [1,2,3,4,5,6]

  useEffect(() => {
    const api = `https://fakestoreapi.com/products`;

    axios
      .get(api)
      .then((response) => {
        console.log(response.data);
        setData(response.data);
        
      })
      .catch((error) => console.error("error hogya hai"));
  },[]);

  return (
    <div className="w-full h-fit p-1 relative">
      <img
        className="w-full md:h-[70vh] object-cover object-center"
        src="./public/hero.avif"
        alt=""
      />
      <div className="m-4">
        <h1 className="text-4xl md:text-6xl font-vold text-center mt-10">Great Indian Festival Is Here !!</h1>
      </div>
      <div className="p-5 flex items-center flex-shrink-0 flex-wrap">
      {products.map((elem,index)=><ProductCards key={index} productsData={elem}/>)}
      </div>

    </div>
  );
}

export default Home;
