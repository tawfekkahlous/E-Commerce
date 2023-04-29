import React from "react";

import Li from "./Li";
import { dataLeft,dataRight } from "@/data/header-data/header-data"; 

const Header = () => {
  return (
    <div className="py-2 bg-header-color sticky top-0 left-0 z-[997]">
      <div className="wrapper ">
        <div className="flex  sm:items-center md:justify-between md:flex-row text-white  ">
          <ul className=" sm:flex sm:justify-start ">
            {dataLeft.map((item, key) => {
              return (
                <Li
                  key={key}
                  icon={item.icon}
                  text={item.text}
                  link={item.link}
                />
              );
            })}
          </ul>

          <ul className="flex justify-start">
            {dataRight.map((item, key) => {
              return (
                <Li
                  key={key}
                  icon={item.icon}
                  text={item.text}
                  link={item.link}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
