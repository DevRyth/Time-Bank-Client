import React, { useState } from "react";
import { ImCross } from "react-icons/im";

interface Props {
  theme?: "primary" | "secondary";
  isDark?: boolean;
  className?: string;
  children: React.ReactChild;
  containsIcon: boolean;
}

const Alert: React.FC<Props> = ({
  theme,
  isDark,
  className,
  children,
  containsIcon,
}) => {
  if (!theme) theme = "primary";
  if (isDark == null) isDark = false;

  const [isVisible, setIsVisible] = useState(true);

  const bgColor =
    theme === "primary"
      ? isDark
        ? "bg-primary-dark"
        : "bg-primary-lite"
      : isDark
      ? "bg-secondary-dark"
      : "bg-secondary-lite";
  const textColor =
    theme === "primary"
      ? isDark
        ? "text-on-primary-dark"
        : "text-on-primary-lite"
      : "text-on-secondary";
  const borderColor =
    theme === "primary"
      ? isDark
        ? "border-primary-lite"
        : "border-primary-dark"
      : isDark
      ? "border-secondary-lite"
      : "border-secondary-dark";

  return (
    <div
      className={`${
        isVisible ? "flex" : "hidden"
      } py-2 px-6 border-2 ${borderColor} justify-between items-center ${bgColor} ${textColor} ${className}`}
    >
      <span className="break-words">{children}</span>
      {containsIcon && (
        <ImCross
          className="cursor-pointer h-3 w-3 ml-4"
          onClick={() => {
            setIsVisible(!isVisible);
          }}
        />
      )}
    </div>
  );
};

export default Alert;
