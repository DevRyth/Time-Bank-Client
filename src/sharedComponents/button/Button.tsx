import React, { ButtonHTMLAttributes } from "react";
import { ImSpinner3 } from "react-icons/im";
interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: "primary" | "secondary";
  title: string;
  className?: string;
  isSubmitting?: boolean;
}

const Button: React.FC<Props> = ({
  title,
  theme,
  className,
  isSubmitting,
  ...rest
}) => {
  const bgColor =
    theme === "primary"
      ? "bg-primary-dark hover:bg-primary-lite"
      : "bg-secondary-dark hover:bg-secondary-lite";
  return (
    <button
      {...rest}
      disabled={isSubmitting}
      className={`${bgColor} hover:bg-blue-700 text-white text-sm md:text-base py-2 px-6 rounded-full ${className}`}
    >
      {isSubmitting ? <ImSpinner3 className="animate-spin" /> : title}
    </button>
  );
};
export default Button;
