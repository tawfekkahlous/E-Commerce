import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faShoppingCart,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
const Search = ({ handleToogle }) => {
  return (
    <div className="bg-second-color py-3  border-b-[2px] border-first-color">
      <div className="xl:w-[1170px] lg:w-[910px] w-[100%] mx-auto lg:grid lg:grid-cols-12 lg:gap-x-4  flex flex-col items-center  ">
        <div className=" lg:col-span-3 grid-cols-4 sm:ml-4 ">
          <Image
            src="/logo.png"
            alt="Landscape picture"
            width={150}
            height={150}
          />
        </div>

        <div className="lg:col-span-6">
          <form className=" flex items-center md:py-4 py-2 ">
            <select className="h-10 rounded-l-3xl md:text-md text-[12px] text-gray-500 md:px-5 px-3 border-r-2 border-[#E4E7ED]">
              <option value="0">All Categories</option>
              <option value="1">Category 01</option>
              <option value="1">Category 02</option>
            </select>
            <input
              className="h-10 text-gray-500 flex-1 md:px-4 px-2  md:text-md text-[14px]"
              placeholder="Search here"
            />
            <button className=" text-white bg-first-color h-10 rounded-r-3xl md:px-5 px-3 py-2 md:text-md text-[14px]">
              Search
            </button>
          </form>
        </div>

        <div className="lg:col-span-3 flex justify-end grid-cols-4">
          <div className="inline-block py-4">
            <a href="#" className="text-white block w-24 text-center title ">
              <FontAwesomeIcon icon={faHeart} className="text-md mr-1 block" />
              <span className="text-xs block">Your Wishlist</span>
              <div>2</div>
            </a>
          </div>

          <div className="inline-block py-4">
            <a className="text-white block w-24 text-center title">
              <FontAwesomeIcon
                icon={faShoppingCart}
                className="text-md mr-1 block"
              />
              <span className="text-xs block">Your Cart</span>
              <div>3</div>
            </a>
          </div>
          <div
            className="inline-block py-4 md:hidden cursor-pointer"
            onClick={handleToogle}
          >
            <a className="text-white block w-24 text-center title">
              <FontAwesomeIcon icon={faBars} className="text-md mr-1 block" />
              <span className="text-xs block ">Menu</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
