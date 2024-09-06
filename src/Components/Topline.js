import logo from '../Images/logo.png'
function Topline() {
    return (
      <div class="flex flex-row w-[100vw] h-20  border-b border-2 border-gray-300">
        <div>
        <img src={logo} alt="Logo" className="h-12 my-4 w-auto mx-12"></img>
        </div>

        <div className="flex w-[100vw] items-center justify-center ">
          <span className=" text-[#eb008b] font-normal text-3xl">My wishlist..</span>
        </div>

        
      </div>
    );
  }
  export default Topline;