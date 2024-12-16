import React from "react";
import { isTimeInRange } from "../utils/timeChecker";

interface TimedContentProps {
  startTime: string; // Format: "HH:mm"
  endTime: string; // Format: "HH:mm"
  children: React.ReactNode;
}

const TimedContent: React.FC<TimedContentProps> = ({
  startTime,
  endTime,
  children,
}) => {
  const isVisible = isTimeInRange(startTime, endTime);

  return isVisible ? <div>{children}</div> : null;
};

export default TimedContent;
