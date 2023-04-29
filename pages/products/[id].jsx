import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useGetProductDetailsQuery } from "@/api/product-api/product-api";
import Loader from "@/components/loader";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faHeart } from "@fortawesome/free-solid-svg-icons";
import { setCount } from "@/feature/productsSlice";
import { useDispatch } from "react-redux";
const ProductInfo = () => {
  const [readMore, setReadMore] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();
  const id = router.query;
  const { data, isLoading, isSuccess } = useGetProductDetailsQuery(id);

  const handleAddDeleteCart = (item) => {
    const myArray = JSON.parse(localStorage.getItem("myArray")) || [];
    const productExists = myArray.some((product) => product?.id === item?.id);
    if (!productExists) {
      myArray.push(item);
      localStorage.setItem("myArray", JSON.stringify(myArray));
      dispatch(setCount(myArray.length));
    } else {
      const updatedArray = myArray.filter(
        (product) => product?.id !== item?.id
      );
      localStorage.setItem("myArray", JSON.stringify(updatedArray));
      dispatch(setCount(updatedArray.length));
    }
  };
  const isProductInStorage = (id) => {
    const myArray = JSON.parse(localStorage.getItem("myArray")) || [];
    return myArray.some((product) => product?.id === id);
  };
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="w-full max-h-[1000px] sm:bg-[#f7f7f7] flex justify-center items-center py-[30px] ">
          <div className="md:flex  md:items-center md:flex-row gap-4 shadow-xl p-[20px] bg-white lg:w-8/12 md:10/12 w-full rounded-xl flex-col mx-[20px] ">
            <div className="flex justify-center items-center mb-[20px] md:w-[20%] w-full md:mb-[0px]">
              <Image src={data?.image} alt="image" width={1000} height={200} />
              {/* <img src={data?.image} alt="image" className="w-[200px]" /> */}
            </div>
            <div className="md:w-[80%] w-full">
              <div className="flex justify-between items-start">
                <p className="font-bold text-[25px] "> {data?.title}</p>
                <FontAwesomeIcon
                  icon={faHeart}
                  className="card-icon text-[#a19a9a] hover:text-first-color duration-300 cursor-pointer"
                />
              </div>
              <p className="text-[#2196F3] font-bold border-[2px] border-[#eee] border-[solid] w-fit p-[6px] capitalize rounded-md my-[10px]">
                {data?.category}
              </p>
              <div className="flex justify-between items-center">
                <span className="inline-block font-[500]">
                  <FontAwesomeIcon
                    icon={faStar}
                    className="text-md mr-1 block text-[gold]"
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    className="text-md mr-1 block text-[gold]"
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    className="text-md mr-1 block text-[gold]"
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    className="text-md mr-1 block text-[gold]"
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    className="text-md mr-1 block text-[gold]"
                  />
                  {data?.rating?.rate}
                </span>
                <span className="inline-block font-[500] hover:text-first-color duration-300">
                  Count:
                  <span className="font-normal">({data?.rating?.count})</span>
                </span>
              </div>
              <p className="my-[10px] font-[600] text-[30px]">${data?.price}</p>

              {readMore && (
                <p className="my-[10px] text-[#555] text-[17px]">
                  {" "}
                  {data?.description}
                </p>
              )}
              <p className="my-[10px] text-[#555] text-[17px]">
                {" "}
                {data?.description.slice(0, 200)}{" "}
                <span
                  onClick={() => setReadMore(!readMore)}
                  className="text-[#2196F3] cursor-pointer"
                >
                  {readMore ? "Read Less" : "Read More..."}
                </span>
              </p>

              <div className="flex justify-around  md:justify-between  ">
                <button
                  onClick={() => handleAddDeleteCart(data)}
                  className={`text-[#2196F3] py-[8px] px-[8px] border-[2px] border-[#2196F3] border-[solid] rounded-md text-[16px] font-[500] hover:text-white hover:bg-[#2196F3] duration-300  `}
                >
                  {isProductInStorage && isProductInStorage(data?.id)
                    ? ("Delete From Cart")
                    : ("Add to cart")}
                </button>
                {/* <button
                  onClick={handleOpen}
                  className="text-[#2196F3] py-[8px] px-[8px] border-[2px] border-[#2196F3] border-[solid] rounded-md text-[16px] font-[500]"
                >
                  edit
                </button> */}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductInfo;
