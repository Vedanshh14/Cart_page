function Card({ id, name, image, price, remove_item, add_price }) {
  return (
      <div className="flex mx-4 my-4 flex-col rounded-xl bg-white text-gray-700 justify-center items-center shadow-md">
          <div className="mx-6 h-20 sm:h-40 w-auto space-x-4 rounded-xl bg-blue-gray-500 bg-clip-border flex justify-center items-center">
              <img src={image} alt={name} className="object-contain h-full w-full" />
          </div>
          <div className="p-4 sm:p-6">
              <h5 className="mb-2 block font-sans text-xs sm:text-sm leading-snug tracking-normal text-blue-gray-900 antialiased">
                  {name}
              </h5>
              <p className="block font-semibold font-sans text-xs sm:text-sm leading-relaxed text-inherit antialiased">
                  Rs {price}
              </p>
          </div>
          <div className="flex w-full flex-col p-4 sm:p-6 pt-0">
              <button
                  data-ripple-light="true"
                  
                  className="select-none rounded-lg py-2 px-3 sm:py-3 sm:px-6 m-1 text-center align-middle font-sans text-xs sm:text-sm sm:font-bold uppercase text-[#eb008b] border border-[#eb008b]"
                  onClick={() => remove_item(id)}
              >
                  Remove
              </button>
              <button
                  data-ripple-light="true"
                 
                  className="select-none rounded-lg bg-[#eb008b] py-2 px-3 sm:py-3 sm:px-6 m-1 text-center align-middle font-sans text-xs sm:text-sm sm:font-bold text-white"
                  onClick={() => add_price(id, price)}
              >
                  Add to cart
              </button>
          </div>
      </div>
  );
}

export default Card;