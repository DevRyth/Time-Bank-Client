import React, { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    inputFor: string;
    className?: string;
    options: string[];
    optionsValue?: string[];
    labelSide?: "left" | "right";
    labelClass?: string;
    theme: "primary-dark" | "primary-semi-dark" | "primary-lite" | "secondary-dark" | "secondary-semi-dark" | "secondary-lite";
    spaceBetween?: number;
    fontWeight?: "font-thin" | "font-extralight" | "font-light" | "font-normal" | "font-medium" | "font-semibold" | "font-bold" | "font-extrabold" | "font-black";
    radioButtonScale?: number;
}

const Radio: React.FC<Props> = ({ inputFor, options, className, labelSide, labelClass, spaceBetween, theme, optionsValue, fontWeight, radioButtonScale }) => {

    className = className ? className : "";
    optionsValue = optionsValue ? optionsValue : options;
    labelClass = labelClass ? labelClass : "";
    labelSide = labelSide ? labelSide : "left";
    theme = theme ? theme : "primary-dark";
    spaceBetween = spaceBetween ? spaceBetween : 6;
    fontWeight = fontWeight ? fontWeight : "font-normal";
    radioButtonScale = radioButtonScale ? radioButtonScale : 1;

    return (
        <div className={`w-max ${className}`}>
            {
                options.map((option, index) => {
                    return <div className={`flex flex-row justify-between items-center space-x-${spaceBetween}`}>
                        {labelSide === 'left' ? <label className={`capitalize ${fontWeight} text-${theme} ${labelClass}`}>{option}</label> : true}
                        <input type="radio" name={`${inputFor}`} value={optionsValue![index]} className="cursor-pointer" style={{transform: `scale(${radioButtonScale})`}} />
                        {labelSide === 'right' ? <label className={`capitalize ${fontWeight} text-${theme} ${labelClass}`}>{option}</label> : true}
                    </div>
                })
            }
        </div>
    );
};

export default Radio;
