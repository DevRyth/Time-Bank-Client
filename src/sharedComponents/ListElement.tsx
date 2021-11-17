import React from "react";
import { Link } from "react-router-dom";
interface Props {
  title: string;
  path?: string;
  className?: string;
}
const ListElement: React.FC<Props> = ({ title, className, path }) => {
  return (
    <Link to={path!}>
      <li
        className={`flex justify-center list-none border-b py-1 text-sm font-semibold px-2 tracking-wider border-gray-600 ${className}`}
      >
        {title}
      </li>
    </Link>
  );
};

export default ListElement;
