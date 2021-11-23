import React, { ReactNode } from "react";
import { Link } from "react-router-dom";
interface Props {
  title: string;
  path?: string;
  className?: string;
  onClick?: () => void;
  icon?: ReactNode;
}

const ListElement: React.FC<Props> = ({
  title,
  onClick,
  className,
  path,
  icon,
}) => {
  return (
    <Link to={path!}>
      <li className={`list-none px-2 flex ${className}`} onClick={onClick}>
        <div className="flex-row  my-auto">{icon}</div>
        <span>{title}</span>
      </li>
    </Link>
  );
};

export default React.memo(ListElement);
