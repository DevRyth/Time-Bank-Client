import React from "react";

interface Props {
  shape: String;
}
const Avatar: React.FC<Props> = ({ shape }) => {
  return (
    <div>
      <img
        src="https://media.istockphoto.com/photos/colored-powder-explosion-on-black-background-picture-id1057506940?k=20&m=1057506940&s=612x612&w=0&h=3j5EA6YFVg3q-laNqTGtLxfCKVR3_o6gcVZZseNaWGk="
        alt=""
        className={`${shape} h-10 w-10`}
      />
    </div>
  );
};
export default Avatar;
