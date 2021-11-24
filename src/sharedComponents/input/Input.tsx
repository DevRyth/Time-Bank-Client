import React, { InputHTMLAttributes, ReactNode } from "react";
import { IoWarningOutline } from "react-icons/all";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  outerClassName?: string;
  children: ReactNode;
  iconColor?: string;
  touched?: boolean;
  errorMessage?: string;
}

const Input: React.FC<Props> = ({
  outerClassName,
  name,
  errorMessage,
  placeholder,
  touched,
  type,
  className,
  children,
  iconColor,
  ...rest
}) => {
  return (
    <div
      className={`border-b pb-1 pl-1 border-gray-600 flex flex-row ${outerClassName}`}
    >
      <div className={`my-auto ${iconColor}`}>{children}</div>
      <div className="flex flex-col">
        <div className="flex-row m-2">
          <input
            type={type}
            name={name}
            placeholder={placeholder}
            {...rest}
            className={`outline-none text-sm md:text-base tracking-wider ${className} w-full`}
          />
        </div>
        {touched && (
          <div className="relative">
            <div className="absolute text-left flex mt-3 text-yellow-600">
              {errorMessage && <IoWarningOutline className="my-auto" />}
              <p className="ml-2 text-xs">{errorMessage}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default React.memo(Input);
