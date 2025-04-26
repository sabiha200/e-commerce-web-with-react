import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function NextArrow({ onClick , customStyle }) {
    return (
      <div className= {`w-6 h-6 md:w-10 md:h-10 ${customStyle} rounded-full bg-[#ececec] text-secondary cursor-pointer flex justify-center items-center`}
        onClick={onClick}
      ><FaArrowRight /></div>
    );
  }
  
  function PrevArrow({ onClick , customStyle }) {
    return (
      <div className= {`w-6 h-6 md:w-10 md:h-10 ${customStyle} rounded-full bg-[#ececec] text-secondary cursor-pointer flex justify-center items-center`}
        onClick={onClick}
      > <FaArrowLeft /></div>
    );
  }
   export {NextArrow,PrevArrow};