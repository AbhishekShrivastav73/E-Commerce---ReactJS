import React from "react";

function ProductCards({ value }) {
  const splittedArray = value.title.split("");
  const newArray = splittedArray.slice(0, 21);

  return (
    <>
      <div key={Element.id} className="flex-shrink-0 w-64 h-72 md:h-[60vh] relative bg-white rounded-md  flex flex-col justify-between items-center p-4">
        <div className="discount bg-[#db4444] absolute text-white px-5 py-1 rounded-md top-5 -left-8">
          <h6 className="text-sm font-semibold">40% OFF!</h6>
        </div>
        <div className="imgs w-[70%] md:w-[90%] h-32 md:h-[35vh] bg-zinc-200">
          <img className="w-full h-full object-fit" src={value.image} alt="" />
        </div>
        <div className="w-full">
          <p className="font-semibold mt-2 tracking-tighter">{newArray}</p>
          <h4 className="text-semibold text-[#db4444] ">{value.category}</h4>
          <p className="font-bold text-[#db4444] ">MRP - ${value.price}</p>
        </div>
      </div>
    </>
  );
}

export default ProductCards;
