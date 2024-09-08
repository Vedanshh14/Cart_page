import logo from '../Images/logo.png';
import { useState } from 'react';

function Topline({ total }) {


    return (
        // <div className="fixed flex flex-row w-[100vw] h-20 justify-between border-b border-2 bg-white border-gray-300">
        <div className="fixed flex flex-col sm:flex-row w-full h-auto sm:h-20 justify-between items-center border-b border-2 bg-white border-gray-300 px-2 sm:px-4 py-2 sm:py-0">
            

            <div>
                <img src={logo} alt="Logo" className="h-8 sm:h-10 w-auto" />
            </div>

            

            <div className="flex items-center justify-center mt-2 sm:mt-0">
                <span className="text-[#eb008b] font-bold text-lg sm:text-2xl">My Wishlist</span>
            </div>

            <div className="flex flex-row items-center justify-center p-2 sm:p-3 mx-2 sm:mx-10 my-2 sm:my-4 text-sm sm:text-xl border rounded-md border-[#eb008b]">
                <span>Cart Total: Rs. {total}</span>
            </div>





        </div>
    );
}

export default Topline;
