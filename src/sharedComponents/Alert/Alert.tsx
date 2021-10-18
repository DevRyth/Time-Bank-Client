import React, { useState } from "react";
import {ImCross} from "react-icons/im";

interface Props {
    theme?: "primary" | "secondary";
    isDark?: boolean;
    className?: string;
    children: React.ReactChild;
}

const Alert: React.FC<Props> = ({ theme, isDark, className, children }) => {

  if(!theme) theme = "primary";
  if(isDark == null) isDark = false;

  const [isVisible, setIsVisible] = useState(true);

  const bgColor = (theme === "primary") ? (isDark) ? "bg-primary-dark" : "bg-primary-lite" : (isDark) ? "bg-secondary-dark" : "bg-secondary-lite";
  const textColor = (theme === "primary" ? (isDark) ? "text-on-primary-dark" : "text-on-primary-lite" : "text-on-secondary");
  const borderColor = (theme === "primary") ? (isDark) ? "border-primary-lite" : "border-primary-dark" : (isDark) ? "border-secondary-lite" : "border-secondary-dark";

  return (
    <div className={`${(isVisible) ? "flex" : "hidden"} p-2 border-2 ${borderColor} justify-between items-center ${bgColor} ${textColor} ${className}`}>
        {children}
        <ImCross onClick={() => {
          setIsVisible(!isVisible);
        }} />
    </div>
  );
};

export default Alert;