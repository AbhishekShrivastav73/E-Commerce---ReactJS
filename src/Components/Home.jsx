
import React, { useContext, useEffect, useState } from "react";
import ProductCards from "./ProductCards";
import ProductContext from "../Context/Product";
import Sections from "./Sections";

function Home() {
  const [sectionData,setData] = useState([
    {sec : `Today's`, title : "Flash Sales"},
    {sec : `Categories`, title : "Browse By Category"},
    {sec : `This Month`, title : "Best Selling Products"},
    {sec : `Our Products`, title : "Explore Our Products"},
  ])
  const {productsData,setProductData} = useContext(ProductContext);

  const topRatted = productsData.filter((elem)=> elem.rating.rate > 4);

  return (
    <div className="w-full h-fit p-4 relative ">
      <img
        className="w-full mb-12 md:h-[70vh] object-cover object-center"
        src="./public/hero.avif"
        alt=""
      />
      <section className="todays w-full mb-12">

     {sectionData.map((elem)=>{
       if(elem.sec === `Today's`) return <Sections data={elem}/>
      })}


      <div className=" flex items-center px-8 overflow-x-auto m-4 gap-5">
      {topRatted.map((elem,index)=><ProductCards key={elem.id} value={elem}/>)}
      </div>
  
      </section>

      <section>

      {sectionData.map((elem)=>{
        if(elem.sec === `Categories`) return <Sections data={elem}/>
      })}
      </section>


      
    </div>
  );
}

export default Home;
