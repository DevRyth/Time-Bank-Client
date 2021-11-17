import React from "react";
interface Props {
  title: string;
  className?: string;
}
const ListElement: React.FC<Props> = ({ title, className }) => {
  return (
    <li
      className={`flex justify-center list-none border-b py-1 text-sm font-semibold px-2 tracking-wider border-gray-600 ${className}`}
    >
      {title}
    </li>
  );
};

export default ListElement;
