import React, { InputHTMLAttributes, ReactNode } from "react";
interface Props extends InputHTMLAttributes<HTMLInputElement> {
  children: ReactNode;
  iconColor?: string;
}

const Input: React.FC<Props> = ({
  name,
  placeholder,
  type,
  className,
  children,
  iconColor,
}) => {
  return (
    <div className="flex justify-center">
      <div className="border-b pb-1 pl-1 border-gray-600 flex">
        <div className={`flex-row my-auto ${iconColor}`}>{children}</div>
        <div className="flex-row m-2">
          <input
            type={type}
            name={name}
            placeholder={placeholder}
            className={`outline-none text-sm md:text-base tracking-wider ${className} w-full`}
          />
        </div>
      </div>
    </div>
  );
};
export default Input;
