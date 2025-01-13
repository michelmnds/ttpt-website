import { JSX } from "react";

interface SegmentProps {
  icon: JSX.Element;
  lastStep?: boolean;
}

export const Segment = ({ icon, lastStep }: SegmentProps) => {
  return (
    <div className="flex flex-col items-center flex-shrink gap-4">
      {icon}
      <div
        className={`w-1 h-full shadow-primary rounded-full ${
          lastStep
            ? "bg-gradient-to-b from-yellow-80 to-transparent"
            : "shadow-md bg-yellow-80"
        }`}
      />
    </div>
  );
};
