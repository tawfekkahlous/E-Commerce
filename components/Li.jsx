import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const Li = ({ icon, text, link, onClick }) => {
  return (
    <>
      <li className="ml-2 sm:ml-4 " onClick={onClick}>
        <Link
          className=" text-xs hover:text-first-color hover:duration-500"
          href={link}
        >
          <FontAwesomeIcon
            icon={icon}
            className="text-xs text-first-color mr-1"
          />{" "}
          {text}
        </Link>
      </li>
    </>
  );
};

export default Li;
