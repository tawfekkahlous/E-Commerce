import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
const Popup = ({ isOpen, children, handleToogle, mode, titlePopup }) => {
  return (
    <>
      {isOpen && (
        <>
          <div className=" w-[100%] sm:w-[400px] h-auto fixed top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 z-[9999999999] rounded-md bg-white shadow-md m-auto  ">
            <div className="flex justify-between items-center font-bold py-[20px] px-3 text-[17px] border-b-2 border-b-[solid] border-b-[#423e3e]">
              <h1 className="">{titlePopup}</h1>
              <AiOutlineCloseCircle onClick={handleToogle} className="cursor-pointer text-[20px]"/>
            </div>
            <div className="mt-[25px] ">{children}</div>
          </div>
          <div className="overlay" onClick={handleToogle}></div>
          <style>
            {`  
            body {
              overflow : hidden
            }
            .overlay{
                position : fixed;
                top :0;
                left : 0;
                height : 100%;
                width : 100%;
                background-color : rgba(0,0,0,0.3);
                z-index: 998;
            }
          `}
          </style>
        </>
      )}
    </>
  );
};

export default Popup;
