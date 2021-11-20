import React, { SelectHTMLAttributes } from "react";

interface Props extends SelectHTMLAttributes<HTMLSelectElement>{
    options: any;
    label: string;
    name: string;
    className?: string;
}

const SelectTag: React.FC<Props> = ({ options, label, name, className }) => {
    return (
        <select name={name} className={`w-min border p-1.5 outline-none border-t-0 border-l-0 border-r-0 border-b-2 bg-white border-primary-dark ${className}`}>
            <option selected>{label}</option>
            {options.map((item: any, index: Number) => (
                <option>{item}</option>
            ))}
        </select>
    );
};

export default React.memo(SelectTag);
