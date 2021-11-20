import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
interface Props {
  //   percentage: string;
}

const ProgressBar: React.FC<Props> = () => {
  const percentage = 46;
  return (
    <div>
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        styles={buildStyles({
          textColor: "red",
          pathColor: "turquoise",
          trailColor: "gold",
        })}
      />
    </div>
  );
};

export default React.memo(ProgressBar);
