import React, { useContext } from "react";
import "./Card.css";
import { MovieContext } from "../context/ProductContext.jsx";
function Card({ proImg ,proTitle,proObj}) {
  let {handleAddToCart}=useContext(MovieContext)
  console.log(proImg);
  return (
    <div className="w-[180px] h-fit flex flex-col items-center mb-2">
      <div
        className="w-[140px] h-[210px] bg-contain hover:scale-105"
        style={{
          backgroundImage: `url(${proImg})`,
          backgroundPosition: "center",
          borderRadius: "10px",
        }}
      ></div>
      <div onClick={()=>{handleAddToCart(proObj); console.log("used");}} className=" h-8 w-30 flex justify-center items-center rounded-lg bg-yellow-900/60 hover:cursor-pointer hover:scale-105">Add to cart</div>
      <div>{proTitle}</div>
      <div>${proObj.price}</div>
    </div>
  );
}

export default Card;
