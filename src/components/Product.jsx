import React, { useContext } from "react";
import "./Card.css";
import { MovieContext } from "../context/ProductContext.jsx";
function Card({ proImg ,proTitle,proObj}) {
  let {handleAddToCart}=useContext(MovieContext)
  console.log(proImg);
  return (
    <div className="w-[180px] h-fit flex flex-col items-center mb-2 ">
      <div
        className="w-[140px] h-[210px] bg-contain hover:scale-105"
        style={{
          backgroundImage: `url(${proImg})`,
          backgroundPosition: "center",
          borderRadius: "10px",
        }}
      ></div>
      <div onClick={()=>{handleAddToCart(proObj); console.log("used");}} className="text-blue-400 h-8 w-30 flex justify-center items-center rounded-lg bg-blue-600/60 hover:cursor-pointer hover:scale-135">Add to cart</div>
      <div className="opacity-50">{proTitle}</div>
      <div className="font-bold text-yellow-500">${proObj.price}</div>
    </div>
  );
}

export default Card;
