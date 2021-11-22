import React from "react";
interface Props {
  name: string;
  num: number;
  className?: string;
}
const CardTimeStatus: React.FC<Props> = ({ name, className, num }) => {
  return (
    <div
      className={`h-32 w-72 text-center text-white rounded-3xl ${className}`}
    >
      <div className="text-white">{name}</div>
      <div className="text-white font-bold text-2xl p-4">{num}</div>
    </div>
  );
};
export default React.memo(CardTimeStatus);
