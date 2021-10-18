import React from "react";

interface Props {
  text: string;
  className?: string;
}

const SwitchButton: React.FC<Props> = ({ text, className }) => {
  return (
    <div className={`flex justify-center items-center mt-2 ${className}`}>
      <label className="text-sm my-auto" htmlFor="switch-button">
        {text}
      </label>
      <input
        type="checkbox"
        id="switch-button"
        className={`cursor-pointer h-6 w-12 ml-2 rounded-full appearance-none bg-white bg-opacity-5 border-2 border-primary-dark checked:bg-primary-lite transition duration-200 relative`}
      />
    </div>
  );
};
export default SwitchButton;
