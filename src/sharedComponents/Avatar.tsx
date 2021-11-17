import React from "react";

interface Props {
  className?: string;
  shape: "circular" | "rounded";
  url: string;
}
const Avatar: React.FC<Props> = ({ shape, url, className }) => {
  const shapeClass = shape === "circular" ? "rounded-full" : "rounded-none";
  return (
    <img src={url} alt="" className={`h-10 w-10 ${shapeClass} ${className}`} />
  );
};
export default Avatar;
