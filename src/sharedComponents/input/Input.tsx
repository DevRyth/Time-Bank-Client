import React, { InputHTMLAttributes, ReactNode } from "react";
interface Props extends InputHTMLAttributes<HTMLInputElement> {
  children: ReactNode;
  iconColor: string;
}

const Input: React.FC<Props> = ({
  placeholder,
  type,
  className,
  children,
  iconColor,
}) => {
  return (
    <div className="flex border-b  border-gray-600 p-2 w-max">
      <div className={`flex-row m-3 ${iconColor}`}>{children}</div>
      <div className="flex-row m-2">
        <input
          type={type}
          name=""
          id=""
          placeholder={placeholder}
          className={`outline-none ${className}`}
        />
      </div>
    </div>
  );
};
export default Input;
