import React from "react";

interface Props {
  text: string;
}

const SwitchButton: React.FC<Props> = ({ text }) => {
  return (
    <div className="flex justify-center items-center">
      <label htmlFor="switch-button">
        <input
          type="checkbox"
          id="switch-button"
          className={`cursor-pointer h-10 w-20 rounded-full appearance-none bg-white bg-opacity-5 border-2 border-primary-dark checked:bg-primary-lite transition duration-200 relative`}
        />
      </label>
    </div>
  );
};
export default SwitchButton;
