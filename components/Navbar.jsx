import React from "react";
import { navbarData } from "@/data/navbar/navbar-data";
import Li from "./Li";

const Navbar = ({ menu, handleToogle }) => {
  return (
    <>
      <div className="py-2 border-b-[#E4E7ED] border-[2px] ">
        <div className="xl:w-[1170px] lg:w-[910px] md:w-[100%] menu">
          <ul className="md:text-black  text-white md:flex block navbar nav">
            {navbarData.map((item, key) => {
              return (
                <Li
                  onClick={handleToogle}
                  key={key}
                  text={item.title}
                  link={item.link}
                  isLine={true}
                />
              );
            })}
          </ul>
        </div>
        {menu && <div className="overlay" onClick={handleToogle}></div>}
      </div>

      <style>
        {`
            @media (max-width: 768px) {
                .menu {
                        position: fixed;
                        left: ${menu ? "0" : "-100%"};
                        top: 0;
                        background: #15161d;
                        height: 100vh;
                        max-width: 250px;
                        width: 100%;
                        overflow: hidden;
                        z-index: 22;
                        padding-top: 60px;
                        -webkit-transform: translateX(0%);
                        -ms-transform: translateX(0%);
                        transform: translateX(0%);
                        -webkit-transition: 0.2s all;
                        transition: 0.2s all;
                        z-index : 999;
                    }
                    .nav li {
                        display: block;
                    }
                        .nav li a {
                        padding: 15px;
                        font-size: 14px !important;
                        font-weight: normal;
                    }
                    .overlay{
                        position : absolute;
                        top :0;
                        left : 0;
                        height : 100%;
                        width : 100%;
                        background-color : rgba(0,0,0,0.3);
                        z-index: 998;
                    }
                }
            `}
      </style>
    </>
  );
};

export default Navbar;
