import React from "react";

interface ImagePanelProps {
  image: string;
}

const ImagePanel: React.FC<ImagePanelProps> = ({ image }) => {
  return (
    <div className="w-full tablet:w-1/2 h-full justify-center items-center hidden tablet:flex">
      <img
        src={image}
        className="max-w-full max-h-full"
        alt="Panel Image"
      />
    </div>
  );
};

export default ImagePanel;