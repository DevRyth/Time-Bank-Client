import React from "react";

interface Props {
  shape: String;
  URL: String;
}
const Avatar: React.FC<Props> = ({ shape, URL }) => {
  return <img src={`${URL}`} alt="" className={`${shape} h-10 w-10`} />;
};
export default Avatar;
