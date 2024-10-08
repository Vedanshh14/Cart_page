import { useState } from "react";

function Card({ id, name, image, price,remove_item,add_price}) {
 
     let newName;
     if (name.length > 24) {
      newName = name.slice(0, 24) + "...";
    } else {
      newName = name;
    }
    
  
  
  return (

    <div className="flex mx-4 my-12 flex-col rounded-xl bg-white  text-gray-700 justify-center items-center shadow-md">
      <div className=" mx-6 h-80 space-x-4 rounded-xl bg-blue-gray-500 bg-clip-border flex justify-center items-center">
        <img src={image} alt={name} className="object-contain h-full w-full" />
      </div>
      <div class="p-6">
        <h5 class="mb-2 block font-sans text-xl  leading-snug tracking-normal text-blue-gray-900 antialiased">
          {newName}
        </h5>
        <p class="block  font-sans text-base font-light leading-relaxed text-inherit antialiased">-
          Rs {price}
        </p>
      </div>
      <div className="flex w-60 flex-col p-6 pt-0 ">
        <button data-ripple-light="true" class="object-containselect-none rounded-lg py-3 px-6 m-2 text-center align-middle font-sans text-xs font-bold uppercase text-[#eb008b] border border-[#eb008b]" onClick={()=>remove_item(id)}>
          Remove
        </button>
        <button data-ripple-light="true" class="select-none rounded-lg bg-[#eb008b] py-3 px-6 m-2 text-center align-middle font-sans text-xs font-bold text-white " onClick={()=>add_price(id,price)}>
          Add to cart
        </button>
      </div>
  </div>
  )
}
export default Card;