import logo from '../Images/logo.png'
import { useState } from 'react';
function Topline() {
    const [total,setTotal] = useState(0);
    return (
      <div class="flex flex-row w-[100vw] h-20  border-b border-2 border-gray-300">
        <div>
        <img src={logo} alt="Logo" className="h-10 my-5 w-auto mx-12"></img>
        </div>

        <div className="flex w-[100vw] items-center justify-center ">
          <span className=" text-[#eb008b] font-normal text-3xl">My wishlist..</span>
        </div>

        <div>Cart Total {total}</div>

        
      </div>
    );
  }
  export default Topline;