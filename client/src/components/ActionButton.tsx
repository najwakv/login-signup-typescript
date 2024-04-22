import React from "react";

interface ButtonProps {
  onClick?: () => void;
  disabled?: boolean;
  isEnabled?: boolean;
  buttonText: string;
  buttonClass?: string;
}

const ActionButton: React.FC<ButtonProps> = ({
  onClick,
  disabled,
  isEnabled,
  buttonText,
  buttonClass = "",
}) => {
  const handleClick = () => {
    if (!disabled && onClick) {
      onClick();
    }
  };

  return (
    <button
      onClick={handleClick}
      disabled={!isEnabled || disabled}
      className={`w-full bg-white font-bold border-2 text-sm laptop:text-base desktop:text-lg py-2 desktop:py-3 monitor:py-4 rounded-lg ${buttonClass}`}
    >
      {buttonText}
    </button>
  );
};

export default ActionButton;
