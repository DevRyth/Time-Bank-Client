import React from "react";
import { string } from "yup";
import { TimeBank } from "../../Models/AuthUser";
interface Props {
    theme?: "primary" | "secondary";
    optionName: string[],
    className?: string;
    value:string
  }

  const Dropdown:React.FC<Props> = ({
    optionName,
    className,
    theme,
    value
  }) => {
    const borderColor =
    theme === "primary"
      ? "border-primary-dark"
      : "border-secondary-dark";

    return(
        // <div className={`${className} mx-4  drop-shadow-2xl`}>
        <select name="" id="" className={`${className}  ${borderColor} ml-4 px-4 border rounded-full text-center`}>
            <option  value="">choose any</option>
            {optionName.map(option =>(
                <option value={option}>{option}</option>
            ))}

        </select>
    // </div>
    );
};
export default React.memo(Dropdown);
