import { CSSProperties } from "react";
import "./Stack.css";

type StackProps = {
  spacing: number;
  direction: "row" | "column";
  wrap: boolean;
  number: number;
};

const Stack = ({
  spacing = 10,
  direction = "row",
  wrap = false,
  number = 4,
}: StackProps) => {
  const style: CSSProperties = {
    display: "flex",
    flexDirection: direction,
    flexWrap: wrap ? "wrap" : "nowrap",
    gap: `${spacing}px`,
  };
  return (
    <div style={style}>
      {Array(number)
        .fill("hi")
        .map((i) => (
          <div className="box">{i}</div>
        ))}
    </div>
  );
};

export default Stack;
