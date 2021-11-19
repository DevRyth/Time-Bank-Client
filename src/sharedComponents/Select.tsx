import React from "react";

interface Props {
    options: any;
    label: string;
    name: string;
    className?: string;
}

const SelectTag: React.FC<Props> = ({ options, label, name, className }) => {
    return (
        <select name={name} className={`w-min border rounded-md p-1 ${className}`}>
            <option selected>{label}</option>
            {options.map((item: any, index: Number) => (
                <option>{item}</option>
            ))}
        </select>
    );
};

export default React.memo(SelectTag);
