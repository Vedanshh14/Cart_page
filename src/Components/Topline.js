import logo from '../Images/logo.png';
import { useState } from 'react';

function Topline({total}) {
    

    return (
        <div className="fixed flex flex-row w-[100vw] h-20 justify-between border-b border-2 bg-white border-gray-300">
            <div>
                <img src={logo} alt="Logo" className="h-10 my-5 w-auto " />
            </div>

            <div className="flex items-center justify-center">
                <span className="text-[#eb008b] font-bold text-2xl">My Wishlist</span>
            </div>

            <div className="flex flex-row items-center justify-center p-3 mx-10 my-4 text-xl border rounded-md border-[#eb008b]">
                <span>Cart Total: Rs. {total}</span>
            </div> 
        </div>
    );
}

export default Topline;
