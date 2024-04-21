import React from "react";

interface HeadingProps {
  title: string;
}
const Heading: React.FC<HeadingProps> = ({title}) => {
  return (
    <h2 className="text-2xl laptop:text-3xl desktop:text-4xl monitor:text-5xl font-bold">
      <span className="text-purple">{title}</span>
      <span className="text-red"> !</span>
    </h2>
  );
};

export default Heading;
