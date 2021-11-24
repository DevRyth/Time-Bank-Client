import React, { SelectHTMLAttributes } from "react";

interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
  options: any;
  label: string;
  className?: string;
}

const SelectTag: React.FC<Props> = ({ options, label, className, ...rest }) => {
  return (
    <select
      className={`w-min border p-1.5 outline-none border-t-0 border-l-0 border-r-0 border-b-2 bg-white border-primary-dark ${className}`}
      {...rest}
    >
      <option value="" label={label} />
      {options.map((item: any, index: number) => (
        <option key={index} value={item} label={item} />
      ))}
    </select>
  );
};

export default React.memo(SelectTag);
