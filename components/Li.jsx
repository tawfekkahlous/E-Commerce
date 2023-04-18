import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useRouter } from "next/router";
const Li = ({ icon, text, link, onClick }) => {
  const router = useRouter();
  return (
    <>
      <li
        onClick={onClick} className="ml-[10px]"
      >
        <Link
          className="text-xs hover:text-first-color hover:duration-500 "
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
