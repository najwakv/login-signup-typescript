import React from "react";
import { Link } from "react-router-dom";

interface AuthButtonProps {
  to: string;
  label: string;
}

const AuthButton: React.FC<AuthButtonProps> = ({ to, label }) => {
  return (
    <Link to={to}>
      <div className="flex justify-center pt-3 laptop:pt-4 desktop:pt-5 monitor:pt-6">
        <button
          type="submit"
          className=" w-full bg-purple text-white text-sm laptop:text-base desktop:text-lg py-2 desktop:py-3 monitor:py-4 rounded-lg"
        >
          {label}
        </button>
      </div>
    </Link>
  );
};

export default AuthButton;
