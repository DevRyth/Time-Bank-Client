import React from "react";
import { Link } from "react-router-dom";
interface Props {
  title: string;
  path?: string;
  className?: string;
  icon?: string;
  onClick?: () => void;
}
const ListElement: React.FC<Props> = ({ onClick, title, className, path }) => {
  return (
    <div className={className} onClick={onClick}>
      <Link to={path!}>
        <li className={`list-none`}>{title}</li>
      </Link>
    </div>
  );
};

export default ListElement;
