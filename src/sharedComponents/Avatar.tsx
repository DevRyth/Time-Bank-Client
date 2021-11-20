import React, { ImgHTMLAttributes } from "react";

interface Props extends ImgHTMLAttributes<HTMLImageElement> {
  className?: string;
  shape: "circular" | "rounded";
  url: string;
}
const Avatar: React.FC<Props> = ({ shape, url, onClick, className }) => {
  const shapeClass = shape === "circular" ? "rounded-full" : "rounded-none";
  return (
    <img
      src={url}
      onClick={onClick}
      alt=""
      className={`h-10 w-10 ${shapeClass} ${className}`}
    />
  );
};
export default Avatar;
