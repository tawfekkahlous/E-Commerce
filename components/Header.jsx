import React from "react";

import Li from "./Li";
import { dataLeft,dataRight } from "@/data/header-data/header-data"; 

const Header = () => {
  return (
    <div className="py-2 bg-header-color">
      <div className="wrapper ">
        <div className="flex flex-col sm:items-center md:justify-between md:flex-row text-white ">
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
