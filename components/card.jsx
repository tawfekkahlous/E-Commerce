import React from "react";
import Image from "next/image";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faEye,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
const Card = ({ id,title, price, category, image, className }) => {
  return (
    <>
      <div
        className={`${className}  justify-center w-[250px] max-w-[100%]  text-center mx-auto p-[15px]  border-[#ccc] border-[3px] border-solid  xl:col-span-3  lg:col-span-4 sm:col-span-6 col-span-12   hover:border-first-color duration-300 `}
      >
        <div className={`flex justify-center items-center h-[200px] w-full`}>
          <Image
            src={image}
            alt="product"
            className=" max-h-full"
            width={150}
            height={200}
          />
        </div>
        <div className="flex flex-col justify-around h-[120px] py-[10px]">
          <p className="text-[18px] my-[5px] font-bold">{category}</p>
          <p className="text-[15px] font-[500]">{title?.slice(0, 25)}...</p>
          <p className="text-first-color  font-bold text-[20px]">${price}</p>
        </div>
        <div className="product-btns">
          <button>
            <FontAwesomeIcon icon={faHeart} className="card-icon " />
            <span className="tooltipp">add to wishlist</span>
          </button>
          <button>
            <FontAwesomeIcon icon={faShoppingCart} className="card-icon" />
            <span className="tooltipp">add to card</span>
          </button>

          <button>
            <Link href={`/products/${id}`}>
              <FontAwesomeIcon icon={faEye} className="card-icon" />
              <span className="tooltipp">quick view</span>
            </Link>
          </button>
        </div>
      </div>
      <style>
        {`
            .card-icon{
                color: rgb(58, 56 ,56 ,.58);
                transtion:0.3s;
                z-index:-1

            }
            button:hover .card-icon {
              color:#D10024;
            }
          `}
      </style>
    </>
  );
};

export default Card;
