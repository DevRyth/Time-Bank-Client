import React from "react";

interface Props {
  shape: "circular" | "rounded";
  URL: String;
}
const Avatar: React.FC<Props> = ({ shape, URL }) => {
  const shapeClass = shape === "circular" ? "rounded-full" : "rounded-none";
  return <img src={`${URL}`} alt="" className={`${shapeClass} h-10 w-10`} />;
};
export default Avatar;
