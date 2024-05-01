import React, { useContext, useEffect, useState } from "react";
import ProductCards from "./ProductCards";
import ProductContext from "../Context/Product";
import Sections from "./Sections";

function Home() {
  const [sectionData, setData] = useState([
    { sec: `Today's`, title: "Flash Sales" },
    { sec: `Men's`, title: "Men's Clothings" },
    { sec: `Women's`, title: "Women's Clothings" },
    { sec: `This Month`, title: "Best Selling Products" },
    { sec: `Our Products`, title: "Explore Our Products" },
  ]);
  const { productsData, setProductData } = useContext(ProductContext);

  const topRatted = productsData.filter((elem) => elem.rating.rate > 4);
  const mens = productsData.filter((elem) => elem.category == `men's clothing`);
  const womens = productsData.filter((elem) => elem.category == `women's clothing`);

  return (
    <div className="w-full h-fit p-4 relative ">
      <img
        className="w-full mb-12 md:h-[70vh] object-cover object-center"
        src="./public/hero.avif"
        alt=""
      />
      <section className="todays w-full mb-12 flex flex-col  gap-4">
        {sectionData.map((elem) => {
          if (elem.sec === `Today's`) return <Sections data={elem} />;
        })}

        <div className=" flex items-center px-8 overflow-x-auto m-4 gap-6">
          {topRatted.map((elem, index) => (
            <ProductCards key={elem.id} value={elem} />
          ))}
        </div>
        <button className="bg-[#db4444] px-4 py-2 mx-auto text-white font-bold rounded-sm w-fit">
          View All Products
        </button>
      </section>

      <section className="category w-full mb-12 flex flex-col  gap-4">
        {sectionData.map((elem) => {
          if (elem.sec === `Men's`) return <Sections data={elem} />;
        })}
        <div className=" flex items-center px-8 overflow-x-auto m-4 gap-6">
          {mens.map((elem, index) => (
            <ProductCards key={elem.id} value={elem} />
          ))}
        </div>
        <button className="bg-[#db4444] px-4 py-2 mx-auto text-white font-bold rounded-sm w-fit">
          View All Products
        </button>
      </section>

      <section className="category w-full mb-12 flex flex-col  gap-4">
        {sectionData.map((elem) => {
          if (elem.sec === `Women's`) return <Sections data={elem} />;
        })}
        <div className=" flex items-center px-8 overflow-x-auto m-4 gap-6">
          {womens.map((elem, index) => (
            <ProductCards key={elem.id} value={elem} />
          ))}
        </div>
        <button className="bg-[#db4444] px-4 py-2 mx-auto text-white font-bold rounded-sm w-fit">
          View All Products
        </button>
      </section>
    </div>
  );
}

export default Home;
