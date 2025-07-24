import React from "react";
import "./swapCard.css";

interface SwapCardProps {
  frontContent: React.ReactNode;
  backContent: React.ReactNode;
  width?: string;
  height?: string;
}

const SwapCard: React.FC<SwapCardProps> = ({
  frontContent,
  backContent,
  width = "300px",
  height = "200px",
}) => {
  return (
    <div className="swap-card" style={{ width, height }}>
      <div className="swap-card-inner">
        <div className="swap-card-front">{frontContent}</div>
        <div className="swap-card-back">{backContent}</div>
      </div>
    </div>
  );
};

export default SwapCard;
