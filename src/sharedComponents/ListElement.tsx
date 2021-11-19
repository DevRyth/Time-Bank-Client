import React from "react";
import { Link } from "react-router-dom";
interface Props {
  title: string;
  path?: string;
  className?: string;
  icon?: string;
}
const ListElement: React.FC<Props> = ({ title, className, path }) => {
  return (
    <Link to={path!}>
      <li className={`list-none px-2  ${className}`}>{title}</li>
    </Link>
  );
};

export default ListElement;
