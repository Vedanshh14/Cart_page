function Card({ id, name, image, price }) {
  return (

    <div className="flex mx-4 my-12 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
      <div className=" mx-6 h-80 space-x-4 rounded-xl bg-blue-gray-500 bg-clip-border flex justify-center items-center">
        <img src={image} alt={name} />
      </div>
      <div class="p-6">
        <h5 class="mb-2 block font-sans text-xl  leading-snug tracking-normal text-blue-gray-900 antialiased">
          {name}
        </h5>
        <p class="block font-semibold font-sans text-base font-light leading-relaxed text-inherit antialiased">
          Rs {price}
        </p>
      </div>
      <div className="flex w-60 flex-col p-6 pt-0 justify-between">
        <button data-ripple-light="true" type="button" class="select-none rounded-lg bg-blue-500 py-3 px-6 m-2 text-center align-middle font-sans text-xs font-bold uppercase text-white">
          Remove
        </button>
        <button data-ripple-light="true" type="button" class="select-none rounded-lg bg-blue-500 py-3 px-6 m-2 text-center align-middle font-sans text-xs ">
          Add to cart
        </button>
      </div>




    </div>
  )
}
export default Card;