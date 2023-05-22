import "./ProgressBar.scss";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

interface ProgressBarProps {
  percentage: number;
  orderStep: number;
  strokeWidth: number;
  height?: number | string;
  width?: number | string;
}
const ProgressBar: React.FC<ProgressBarProps> = (props) => {
  return (
    <div
      style={{ height: props.height, width: props.width }}
      className="progressBar"
    >
      <CircularProgressbar
        value={0}
        text={props.orderStep + "of 6"}
        strokeWidth={props.strokeWidth}
        styles={buildStyles({
          rotation: 0,
          strokeLinecap: "butt",
          textSize: "24x",
          pathTransitionDuration: 0.5,
          textColor: "darkblue",
          backgroundColor: "#3e98c7",
        })}
      />
    </div>
  );
};

export { ProgressBar };
