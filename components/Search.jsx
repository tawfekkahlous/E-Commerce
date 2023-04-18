import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faShoppingCart,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
const Search = ({ handleToogle }) => {
  return (
    <div className="bg-second-color py-2 border-b-[2px] border-first-color sticky top-0 left-0 z-[997]">
      <div className="wrapper lg:grid lg:grid-cols-12 lg:gap-x-4  flex flex-col items-center">
        <div className=" lg:col-span-3 grid-cols-4 ">
          <Image
            src="/logo.png"
            alt="Landscape picture"
            width={150}
            height={150}
          />
        </div>

        <div className="lg:col-span-6  ">
          <form className=" flex items-center md:py-4 py-2 ">
            <input
              className="h-10 text-gray-500 flex-1 md:px-4 px-4  md:text-md text-[14px]  rounded-l-3xl sm:w-[400px] search"
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
         
            <div className="inline-block py-4 mr-[-15px]">
              <Link href="/carts" className="text-white block w-24 text-center title">
                <FontAwesomeIcon
                  icon={faShoppingCart}
                  className="text-md mr-1 block"
                />
                <span className="text-xs block">Your Cart</span>
                <div>3</div>
              </Link>
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
